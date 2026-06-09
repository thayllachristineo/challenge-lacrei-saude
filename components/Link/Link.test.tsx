import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Link from './Link';

describe('Link', () => {
  it('renders a default navigation link', () => {
    renderWithTheme(<Link href="/profissionais">Encontrar profissionais</Link>);

    expect(
      screen.getByRole('link', { name: 'Encontrar profissionais' }),
    ).toHaveAttribute('href', '/profissionais');
  });

  it('renders an inline external link with security attributes', () => {
    renderWithTheme(
      <Link href="https://www.cvv.org.br" variant="inline">
        www.cvv.org.br
      </Link>,
    );

    const link = screen.getByRole('link', { name: 'www.cvv.org.br' });
    expect(link).toHaveAttribute('href', 'https://www.cvv.org.br');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('marks disabled links as aria-disabled', () => {
    renderWithTheme(
      <Link href="/" variant="secondary" disabled>
        Indisponível
      </Link>,
    );

    expect(screen.getByRole('link', { name: 'Indisponível' })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });
});
