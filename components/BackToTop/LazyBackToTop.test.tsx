import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import LazyBackToTop from './LazyBackToTop';

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: () =>
    jest.requireActual<typeof import('./BackToTop')>('./BackToTop').default,
}));

describe('LazyBackToTop', () => {
  it('renders the back to top button', () => {
    renderWithTheme(<LazyBackToTop />);

    expect(
      screen.getByLabelText('Voltar ao topo da página'),
    ).toBeInTheDocument();
  });
});
