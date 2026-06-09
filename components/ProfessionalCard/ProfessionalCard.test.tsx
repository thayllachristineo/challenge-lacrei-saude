import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import ProfessionalCard from './ProfessionalCard';
import type { Professional } from '@/lib/professionals';

const professional: Professional = {
  id: '99',
  name: 'Dra. Marina Alves',
  pronouns: 'ela/dela',
  specialty: 'Clínica Geral',
  city: 'São Paulo',
  state: 'SP',
  modality: 'Online e Presencial',
  rating: 4.9,
  bio: 'Atendimento humanizado.',
};

describe('ProfessionalCard', () => {
  it("displays the professional's main information", () => {
    renderWithTheme(<ProfessionalCard professional={professional} />);

    expect(
      screen.getByRole('heading', { name: 'Dra. Marina Alves' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Clínica Geral')).toBeInTheDocument();
    expect(screen.getByText('ela/dela')).toBeInTheDocument();
  });

  it('toggles favorite state when the button is clicked', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ProfessionalCard professional={professional} />);

    const favButton = screen.getByRole('button', {
      name: 'Adicionar Dra. Marina Alves aos favoritos',
    });
    expect(favButton).toHaveAttribute('aria-pressed', 'false');

    await user.click(favButton);

    const activeButton = screen.getByRole('button', {
      name: 'Remover Dra. Marina Alves dos favoritos',
    });
    expect(activeButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('provides a navigation action to the profile', () => {
    renderWithTheme(<ProfessionalCard professional={professional} />);

    expect(
      screen.getByRole('link', { name: 'Ver perfil e agendar' }),
    ).toHaveAttribute('href', '/profissionais');
  });
});
