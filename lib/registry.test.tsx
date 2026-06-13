import { render, screen } from '@testing-library/react';
import StyledComponentsRegistry from './registry';

const mockUseServerInsertedHTML = jest.fn();

jest.mock('next/navigation', () => ({
  useServerInsertedHTML: (callback: () => React.ReactNode) =>
    mockUseServerInsertedHTML(callback),
}));

describe('StyledComponentsRegistry', () => {
  beforeEach(() => {
    mockUseServerInsertedHTML.mockImplementation((callback) => {
      callback();
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders children', () => {
    render(
      <StyledComponentsRegistry>
        <p>Conteúdo estilizado</p>
      </StyledComponentsRegistry>,
    );

    expect(screen.getByText('Conteúdo estilizado')).toBeInTheDocument();
  });

  it('registers server-inserted styles via useServerInsertedHTML', () => {
    render(
      <StyledComponentsRegistry>
        <p>Conteúdo estilizado</p>
      </StyledComponentsRegistry>,
    );

    expect(mockUseServerInsertedHTML).toHaveBeenCalledTimes(1);
    expect(mockUseServerInsertedHTML.mock.calls[0][0]).toEqual(
      expect.any(Function),
    );
  });
});
