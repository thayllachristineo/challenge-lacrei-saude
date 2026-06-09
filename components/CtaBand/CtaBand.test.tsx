import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import CtaBand from './CtaBand';

describe('CtaBand', () => {
  it('displays the invitation and link to find professionals', () => {
    renderWithTheme(<CtaBand />);

    expect(
      screen.getByRole('heading', {
        name: 'Pronte para encontrar o cuidado que você merece?',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Encontrar profissionais' }),
    ).toHaveAttribute('href', '/profissionais');
  });
});
