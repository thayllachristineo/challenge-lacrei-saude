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
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.text.base.fontSize};
    font-weight: ${({ theme }) => theme.typography.text.base.fontWeight};
    line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
    background: ${({ theme }) => theme.color.background.default};
    color: ${({ theme }) => theme.color.text.default};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #conteudo-principal {
    flex: 1 0 auto;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fontFamily.heading};
    line-height: ${({ theme }) => theme.typography.headline.base.lineHeight};
    color: ${({ theme }) => theme.color.text.heading};
  }

  a {
    color: ${({ theme }) => theme.color.text.accent};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img,
  picture,
  svg {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.border.accent};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  .skip-link {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 100;
    background: ${({ theme }) => theme.gradient.primary};
    color: ${({ theme }) => theme.color.text.invert};
    font-size: ${({ theme }) => theme.typography.text.smHigh200.fontSize};
    font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
    line-height: ${({ theme }) => theme.typography.text.smHigh200.lineHeight};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.s};
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} 0;
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
