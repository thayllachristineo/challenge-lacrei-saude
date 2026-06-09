'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';
import type { ButtonSize, ButtonVariant } from './Button.types';

export type StyleProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.button.primary.background.default};
    border: ${({ theme }) => theme.borderWidth.none} solid
      ${({ theme }) => theme.button.primary.border.default};
    box-shadow: ${({ theme }) => theme.button.shadow};
    color: ${({ theme }) => theme.button.primary.text.default};

    svg {
      color: ${({ theme }) => theme.button.primary.icon.default};
    }

    &:hover:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.button.primary.background.hover};
      color: ${({ theme }) => theme.button.primary.text.hover};

      svg {
        color: ${({ theme }) => theme.button.primary.icon.hover};
      }
    }

    &:active:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.button.primary.background.pressed};
      color: ${({ theme }) => theme.button.primary.text.pressed};

      svg {
        color: ${({ theme }) => theme.button.primary.icon.pressed};
      }
    }

    &[aria-disabled='true'] {
      background: ${({ theme }) => theme.button.primary.background.disabled};
      box-shadow: none;
      color: ${({ theme }) => theme.button.primary.text.disabled};

      svg {
        color: ${({ theme }) => theme.button.primary.icon.disabled};
      }
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.button.secondary.background.default};
    border: ${({ theme }) => theme.borderWidth.sm} solid
      ${({ theme }) => theme.button.secondary.border.default};
    box-shadow: ${({ theme }) => theme.button.shadow};
    color: ${({ theme }) => theme.button.secondary.text.default};

    svg {
      color: ${({ theme }) => theme.button.secondary.icon.default};
    }

    &:hover:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.button.secondary.background.hover};
      border-color: ${({ theme }) => theme.button.secondary.border.hover};
      color: ${({ theme }) => theme.button.secondary.text.hover};

      svg {
        color: ${({ theme }) => theme.button.secondary.icon.hover};
      }
    }

    &:active:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.button.secondary.background.pressed};
      border-color: ${({ theme }) => theme.button.secondary.border.pressed};
      color: ${({ theme }) => theme.button.secondary.text.pressed};

      svg {
        color: ${({ theme }) => theme.button.secondary.icon.pressed};
      }
    }

    &[aria-disabled='true'] {
      background: ${({ theme }) => theme.button.secondary.background.disabled};
      border-color: ${({ theme }) => theme.button.secondary.border.disabled};
      box-shadow: none;
      color: ${({ theme }) => theme.button.secondary.text.disabled};

      svg {
        color: ${({ theme }) => theme.button.secondary.icon.disabled};
      }
    }
  `,
  ghost: css`
    background: ${({ theme }) => theme.button.link.background.default};
    border: ${({ theme }) => theme.borderWidth.none} solid transparent;
    box-shadow: none;
    color: ${({ theme }) => theme.button.link.text.default};

    svg {
      color: ${({ theme }) => theme.button.link.icon.default};
    }

    &:hover:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.button.link.background.hover};
      color: ${({ theme }) => theme.button.link.text.hover};

      svg {
        color: ${({ theme }) => theme.button.link.icon.hover};
      }
    }

    &:active:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.button.link.background.pressed};
      color: ${({ theme }) => theme.button.link.text.pressed};

      svg {
        color: ${({ theme }) => theme.button.link.icon.pressed};
      }
    }
  `,
} as const;

const sizeStyles = {
  md: css`
    padding-inline: ${({ theme }) => theme.button.paddingInline};
  `,
  lg: css`
    padding-inline: ${({ theme }) => theme.button.paddingInlineLg};
  `,
} as const;

const sharedStyles = css<StyleProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ theme }) => theme.button.typography.fontSize};
  font-weight: ${({ theme }) => theme.button.typography.fontWeight};
  gap: ${({ theme }) => theme.button.iconGap};
  justify-content: center;
  line-height: ${({ theme }) => theme.button.typography.lineHeight};
  min-height: ${({ theme }) => theme.button.height};
  text-align: center;
  text-decoration: none;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    color 0.18s ease;

  svg {
    flex-shrink: 0;
    height: ${({ theme }) => theme.button.iconSize};
    width: ${({ theme }) => theme.button.iconSize};
  }

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant }) => variantStyles[$variant]};
  ${({ $size }) => sizeStyles[$size]};

  &:hover {
    text-decoration: none;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.button.focus};
    outline-offset: 2px;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<StyleProps>`
  ${sharedStyles}
`;

export const StyledLink = styled(Link)<StyleProps>`
  ${sharedStyles}
`;

export const Spinner = styled.span`
  animation: button-spin 0.7s linear infinite;
  border: ${({ theme }) => theme.borderWidth.md} solid currentColor;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  border-right-color: transparent;
  height: 1em;
  width: 1em;

  @keyframes button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
