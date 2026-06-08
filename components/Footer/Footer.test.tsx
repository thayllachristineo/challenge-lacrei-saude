import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Footer from './Footer';

describe('Footer', () => {
  it('displays the brand logo and institutional links', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('link', { name: 'Lacrei Saúde — página inicial' }),
    ).toHaveAttribute('href', '/');
    expect(
      screen.getByRole('img', { name: 'Logotipo Lacrei Saúde' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Links institucionais' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Encontrar profissionais' }),
    ).toHaveAttribute('href', '/profissionais');
    expect(
      screen.getByRole('navigation', { name: 'Contato' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Central de ajuda' }),
    ).toHaveAttribute('href', '/profissionais');
  });

  it('displays social links, legal notice and copyright', () => {
    renderWithTheme(<Footer />);

    expect(
      screen.getByRole('navigation', { name: 'Redes sociais' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'Facebook da Lacrei Saúde (abre em nova aba)',
      }),
    ).toHaveAttribute('href', 'https://www.facebook.com/lacreisaude');
    expect(
      screen.getByText(/não oferece tratamento médico emergencial/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/CNPJ: 51\.265\.351\/0001-65/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.`,
      ),
    ).toBeInTheDocument();
  });
});
