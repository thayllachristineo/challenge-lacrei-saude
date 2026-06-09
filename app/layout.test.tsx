import { render, screen } from '@testing-library/react';
import RootLayout, { metadata, viewport } from './layout';

jest.mock('next/font/google', () => ({
  Nunito_Sans: () => ({
    variable: '--font-nunito-sans',
  }),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useServerInsertedHTML: jest.fn(),
}));

describe('RootLayout', () => {
  it('defines global metadata and viewport', () => {
    expect(metadata.title).toMatchObject({
      default: 'Lacrei Saúde — Cuidado seguro e acolhedor',
    });
    expect(metadata.description).toMatch(/comunidade LGBTQIAPN\+/i);
    expect(viewport.themeColor).toBe('#0B6B5B');
  });

  it('renders the global structure with header, main, and footer', () => {
    const layout = RootLayout({ children: <p>Conteúdo da página</p> });
    const shell = layout.props.children.props.children;

    render(shell);

    expect(
      screen.getByRole('link', { name: 'Pular para o conteúdo principal' }),
    ).toHaveAttribute('href', '#conteudo-principal');
    expect(
      screen.getByRole('navigation', { name: 'Navegação principal' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveAttribute(
      'id',
      'conteudo-principal',
    );
    expect(screen.getByText('Conteúdo da página')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Lacrei Saúde' }),
    ).toBeInTheDocument();
  });
});
