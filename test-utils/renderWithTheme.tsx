import React from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

export function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  });
}

export * from '@testing-library/react';
