import { fireEvent } from '@testing-library/react';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Header from './Header';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  it('displays main navigation with site links', () => {
    renderWithTheme(<Header />);

    const nav = screen.getByRole('navigation', { name: 'Navegação principal' });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Profissionais' }),
    ).toBeInTheDocument();
  });

  it('marks the current page link with aria-current', () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole('link', { name: 'Início' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('toggles mobile menu state when the button is clicked', () => {
    const { container } = renderWithTheme(<Header />);

    const toggle = container.querySelector<HTMLButtonElement>(
      'button[aria-controls="menu-principal"]',
    );
    expect(toggle).not.toBeNull();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('aria-label', 'Abrir menu');

    fireEvent.click(toggle as HTMLButtonElement);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAttribute('aria-label', 'Fechar menu');
  });
});
