'use client';

import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import type { LinkVariant } from './Link.types';

export type StyleProps = {
  $variant: LinkVariant;
  $disabled: boolean;
};

const variantStyles = {
  inline: css`
    color: ${({ theme }) => theme.link.inline.textColor};
    font-size: ${({ theme }) => theme.link.inline.textStyle.fontSize};
    font-weight: ${({ theme }) => theme.link.inline.textStyle.fontWeight};
    gap: ${({ theme }) => theme.link.inline.iconSpace};
    line-height: ${({ theme }) => theme.link.inline.textStyle.lineHeight};
    text-decoration: underline;

    svg {
      color: ${({ theme }) => theme.link.inline.iconColor};
      flex-shrink: 0;
      height: ${({ theme }) => theme.link.inline.iconSize};
      width: ${({ theme }) => theme.link.inline.iconSize};
    }
  `,
  default: css`
    align-items: center;
    color: ${({ theme }) => theme.link.default.textColor};
    font-size: ${({ theme }) => theme.typography.text.base.fontSize};
    font-weight: ${({ theme }) => theme.typography.text.base.fontWeight};
    gap: ${({ theme }) => theme.link.default.iconSpace};
    line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
    min-height: ${({ theme }) => theme.link.default.minHeight};
    text-decoration: none;

    svg {
      color: ${({ theme }) => theme.link.default.iconColor};
      flex-shrink: 0;
      height: ${({ theme }) => theme.link.default.iconSize};
      width: ${({ theme }) => theme.link.default.iconSize};
    }
  `,
  secondary: css`
    align-items: center;
    color: ${({ theme }) => theme.link.secondary.textColor};
    font-size: ${({ theme }) => theme.link.secondary.textStyle.fontSize};
    font-weight: ${({ theme }) => theme.link.secondary.textStyle.fontWeight};
    gap: ${({ theme }) => theme.link.secondary.iconSpace};
    line-height: ${({ theme }) => theme.link.secondary.textStyle.lineHeight};
    text-decoration: none;

    svg {
      color: ${({ theme }) => theme.link.secondary.iconColor};
      flex-shrink: 0;
      height: ${({ theme }) => theme.link.secondary.iconSize};
      width: ${({ theme }) => theme.link.secondary.iconSize};
    }
  `,
} as const;

export const StyledLink = styled(NextLink)<StyleProps>`
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.18s ease;

  ${({ $variant }) => variantStyles[$variant]};

  &:hover:not([aria-disabled='true']) {
    color: ${({ theme }) => theme.link.hover.textColor};
    text-decoration: ${({ $variant }) =>
      $variant === 'inline' ? 'underline' : 'none'};
  }

  &:visited:not([aria-disabled='true']) {
    color: ${({ theme, $variant }) =>
      $variant === 'secondary'
        ? theme.link.secondary.textColor
        : $variant === 'inline'
          ? theme.link.inline.textColor
          : theme.link.default.textColor};
  }

  &:active:not([aria-disabled='true']) {
    color: ${({ theme }) => theme.link.pressed.textColor};
  }

  &[aria-disabled='true'] {
    color: ${({ theme }) => theme.link.disabled.textColor};
    pointer-events: none;
    text-decoration: none;
  }

  &:focus-visible {
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    color: ${({ theme }) => theme.link.focus.textColor};
    outline: 3px solid ${({ theme }) => theme.link.focus.focusDisplay};
    outline-offset: 2px;
    text-decoration: none;
  }
`;
