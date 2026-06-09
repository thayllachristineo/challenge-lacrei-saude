import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Values from './Values';

describe('Values', () => {
  it('displays the section title and three value pillars', () => {
    renderWithTheme(<Values />);

    expect(
      screen.getByRole('heading', { name: 'Tecnologia como forma de cuidado' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Acolhimento de verdade' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Segurança e privacidade' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Acesso para todes' }),
    ).toBeInTheDocument();
  });
});
