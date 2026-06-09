import { fireEvent } from '@testing-library/react';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import BackToTop from './BackToTop';

describe('BackToTop', () => {
  const scrollToMock = jest.fn();

  beforeEach(() => {
    scrollToMock.mockClear();
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true,
    });
    window.scrollTo = scrollToMock;
  });

  it('is not keyboard accessible when the page has not been scrolled', () => {
    renderWithTheme(<BackToTop />);

    const button = screen.getByLabelText('Voltar ao topo da página');
    expect(button).toHaveAttribute('tabindex', '-1');
  });

  it('becomes focusable after scrolling the page', () => {
    renderWithTheme(<BackToTop />);

    Object.defineProperty(window, 'scrollY', {
      value: 500,
      writable: true,
      configurable: true,
    });
    fireEvent.scroll(window);

    const button = screen.getByLabelText('Voltar ao topo da página');
    expect(button).toHaveAttribute('tabindex', '0');
  });

  it('smoothly scrolls to the top when clicked', () => {
    Object.defineProperty(window, 'scrollY', {
      value: 500,
      writable: true,
      configurable: true,
    });

    renderWithTheme(<BackToTop />);
    fireEvent.scroll(window);

    fireEvent.click(screen.getByLabelText('Voltar ao topo da página'));

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
