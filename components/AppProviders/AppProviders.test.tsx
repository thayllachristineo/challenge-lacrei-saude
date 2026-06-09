import { render, screen } from '@testing-library/react';
import AppProviders from './AppProviders';

jest.mock('next/navigation', () => ({
  useServerInsertedHTML: jest.fn(),
}));

describe('AppProviders', () => {
  it('renders child content with global providers', () => {
    render(
      <AppProviders>
        <p>Conteúdo da aplicação</p>
      </AppProviders>,
    );

    expect(screen.getByText('Conteúdo da aplicação')).toBeInTheDocument();
  });
});
