'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/lib/GlobalStyle';
import { theme } from '@/lib/theme';

type TProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: TProps) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default AppProviders;
