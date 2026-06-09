import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen, waitFor } from '@/test-utils/renderWithTheme';
import type { Professional } from '@/lib/professionals';
import ProfessionalsExplorer from './ProfessionalsExplorer';

const mockProfessional: Professional = {
  id: '1',
  name: 'Dra. Marina Alves',
  pronouns: 'ela/dela',
  specialty: 'Clínica Geral',
  city: 'São Paulo',
  state: 'SP',
  modality: 'Online e Presencial',
  rating: 4.9,
  bio: 'Atendimento humanizado.',
};

const mockFetchSuccess = (data: Professional[] = [mockProfessional]) =>
  jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      data,
      total: data.length,
      specialties: ['Clínica Geral'],
    }),
  });

describe('ProfessionalsExplorer', () => {
  beforeEach(() => {
    global.fetch = mockFetchSuccess();
  });

  it('renders the search form with accessible fields', () => {
    renderWithTheme(
      <ProfessionalsExplorer initialSpecialties={['Clínica Geral']} />,
    );

    expect(
      screen.getByRole('form', { name: 'Buscar profissionais de saúde' }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Buscar por nome, cidade ou especialidade'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Especialidade')).toBeInTheDocument();
  });

  it('loads and displays professionals after the initial request', async () => {
    renderWithTheme(
      <ProfessionalsExplorer initialSpecialties={['Clínica Geral']} />,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Dra. Marina Alves' }),
      ).toBeInTheDocument();
    });

    expect(screen.getByText(/1 resultado/i)).toBeInTheDocument();
  });

  it('displays an error message when the API fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Falha na rede'));

    renderWithTheme(
      <ProfessionalsExplorer initialSpecialties={['Clínica Geral']} />,
    );

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Não foi possível carregar os profissionais.',
      );
    });
  });

  it('searches for professionals when the form is submitted', async () => {
    const user = userEvent.setup();
    global.fetch = mockFetchSuccess();

    renderWithTheme(
      <ProfessionalsExplorer initialSpecialties={['Clínica Geral']} />,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Dra. Marina Alves' }),
      ).toBeInTheDocument();
    });

    await user.type(
      screen.getByLabelText('Buscar por nome, cidade ou especialidade'),
      'Marina',
    );
    await user.click(screen.getByRole('button', { name: 'Buscar' }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenLastCalledWith(
        expect.stringContaining('q=Marina'),
      );
    });
  });

  it('informs when no professionals are found', async () => {
    global.fetch = mockFetchSuccess([]);

    renderWithTheme(
      <ProfessionalsExplorer initialSpecialties={['Clínica Geral']} />,
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          'Nenhum profissional encontrado para os filtros selecionados.',
        ),
      ).toBeInTheDocument();
    });
  });
});
