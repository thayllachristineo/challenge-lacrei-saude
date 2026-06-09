'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: ${({ theme }) => theme.spacing.none};
    padding: ${({ theme }) => theme.spacing.none};
  }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.color.background.default};
    color: ${({ theme }) => theme.color.text.default};
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.text.base.fontSize};
    font-weight: ${({ theme }) => theme.typography.text.base.fontWeight};
    line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
    min-height: 100vh;
    text-rendering: optimizeLegibility;
  }

  #conteudo-principal {
    flex: 1 0 auto;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.color.text.heading};
    font-family: ${({ theme }) => theme.fontFamily.heading};
    line-height: ${({ theme }) => theme.typography.headline.base.lineHeight};
  }

  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    outline: 3px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 2px;
  }

  .skip-link {
    background: ${({ theme }) => theme.gradient.primary};
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} 0;
    color: ${({ theme }) => theme.color.text.invert};
    font-size: ${({ theme }) => theme.typography.text.smHigh200.fontSize};
    font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
    left: -9999px;
    line-height: ${({ theme }) => theme.typography.text.smHigh200.lineHeight};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
    position: absolute;
    top: 0;
    z-index: 100;
  }

  .skip-link:focus {
    left: 0;
    text-decoration: none;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
