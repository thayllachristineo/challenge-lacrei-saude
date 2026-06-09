import { renderWithTheme, screen, waitFor } from '@/test-utils/renderWithTheme';
import type { Professional } from '@/lib/professionals';
import ProfissionaisPage from './page';

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: () =>
    jest.requireActual<typeof import('@/components/BackToTop/BackToTop')>(
      '@/components/BackToTop/BackToTop',
    ).default,
}));

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

describe('ProfissionaisPage', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: [mockProfessional],
        total: 1,
        specialties: ['Clínica Geral'],
      }),
    });
  });

  it('defines page metadata', async () => {
    const { metadata } = await import('./page');

    expect(metadata.title).toBe('Encontrar profissionais');
    expect(metadata.description).toMatch(/profissionais de saúde seguros/i);
  });

  it('renders the hero, explorer, and back to top button', async () => {
    renderWithTheme(<ProfissionaisPage />);

    expect(
      screen.getByRole('heading', { name: 'Encontre profissionais de saúde' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('form', { name: 'Buscar profissionais de saúde' }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Voltar ao topo da página'),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Dra. Marina Alves' }),
      ).toBeInTheDocument();
    });
  });
});
