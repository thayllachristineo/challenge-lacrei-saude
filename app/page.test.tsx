import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import HomePage from './page';

describe('HomePage', () => {
  it('renders all landing page sections', () => {
    renderWithTheme(<HomePage />);

    expect(
      screen.getByRole('heading', {
        name: /Saúde segura e acolhedora para toda a comunidade LGBTQIAPN\+/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Tecnologia como forma de cuidado' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Como funciona' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: 'Pronte para encontrar o cuidado que você merece?',
      }),
    ).toBeInTheDocument();
  });
});
