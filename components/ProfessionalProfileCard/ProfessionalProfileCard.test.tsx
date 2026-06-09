import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import ProfessionalProfileCard from './ProfessionalProfileCard';

const baseProps = {
  id: '99',
  name: 'Dra. Marina Alves',
  pronouns: 'ela/dela',
  specialty: 'Clínica Geral',
  city: 'São Paulo',
  state: 'SP',
  modality: 'Online e Presencial',
  rating: 4.9,
  bio: 'Atendimento humanizado com foco em saúde integral.',
  initials: 'MA',
  appointmentHref: '/profissionais',
};

describe('ProfessionalProfileCard', () => {
  it('displays professional information', () => {
    renderWithTheme(<ProfessionalProfileCard {...baseProps} />);

    expect(
      screen.getByRole('heading', { name: 'Dra. Marina Alves' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Clínica Geral')).toBeInTheDocument();
    expect(screen.getByText('ela/dela')).toBeInTheDocument();
    expect(screen.getByText(/São Paulo, SP/)).toBeInTheDocument();
    expect(screen.getByText('Online e Presencial')).toBeInTheDocument();
    expect(screen.getByText(baseProps.bio)).toBeInTheDocument();
  });

  it('toggles favorite state', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ProfessionalProfileCard {...baseProps} />);

    const favButton = screen.getByRole('button', {
      name: 'Adicionar Dra. Marina Alves aos favoritos',
    });
    expect(favButton).toHaveAttribute('aria-pressed', 'false');

    await user.click(favButton);

    expect(
      screen.getByRole('button', {
        name: 'Remover Dra. Marina Alves dos favoritos',
      }),
    ).toHaveAttribute('aria-pressed', 'true');
  });

  it('provides a navigation action to the profile', () => {
    renderWithTheme(<ProfessionalProfileCard {...baseProps} />);

    expect(
      screen.getByRole('link', { name: 'Ver perfil e agendar' }),
    ).toHaveAttribute('href', '/profissionais');
  });
});
