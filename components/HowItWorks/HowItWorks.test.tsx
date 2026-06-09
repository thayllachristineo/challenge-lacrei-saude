import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('displays the section with the three flow steps', () => {
    renderWithTheme(<HowItWorks />);

    expect(
      screen.getByRole('heading', { name: 'Como funciona' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Busque' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Escolha' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Agende' })).toBeInTheDocument();
  });

  it('exposes the anchor for internal navigation', () => {
    const { container } = renderWithTheme(<HowItWorks />);

    expect(container.querySelector('#como-funciona')).toBeInTheDocument();
  });
});
