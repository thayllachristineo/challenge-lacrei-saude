import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import ProfessionalsHero from './ProfessionalsHero';

describe('ProfessionalsHero', () => {
  it('displays the professionals page title and description', () => {
    renderWithTheme(<ProfessionalsHero />);

    expect(
      screen.getByRole('heading', { name: 'Encontre profissionais de saúde' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Busque por especialidade ou localização/i),
    ).toBeInTheDocument();
  });
});
