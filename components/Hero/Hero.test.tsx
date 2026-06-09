import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Hero from './Hero';

describe('Hero', () => {
  it('displays the main title and landing CTAs', () => {
    renderWithTheme(<Hero />);

    expect(
      screen.getByRole('heading', {
        name: /Saúde segura e acolhedora para toda a comunidade LGBTQIAPN\+/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Encontrar profissionais' }),
    ).toHaveAttribute('href', '/profissionais');
    expect(screen.getByRole('link', { name: 'Como funciona' })).toHaveAttribute(
      'href',
      '#como-funciona',
    );
  });

  it('lists the platform differentiators', () => {
    renderWithTheme(<Hero />);

    expect(
      screen.getByText('Profissionais que respeitam nome social e pronomes'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Privacidade e segurança dos seus dados'),
    ).toBeInTheDocument();
  });
});
