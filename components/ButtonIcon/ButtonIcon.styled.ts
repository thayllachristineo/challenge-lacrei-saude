'use client';

import styled, { css } from 'styled-components';
import type { ButtonIconVariant } from './ButtonIcon.types';

export type StyleProps = {
  $variant: ButtonIconVariant;
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.buttonIcon.primary.background.default};
    border: ${({ theme }) => theme.borderWidth.none} solid
      ${({ theme }) => theme.buttonIcon.primary.border.default};
    box-shadow: ${({ theme }) => theme.buttonIcon.shadow};
    color: ${({ theme }) => theme.buttonIcon.primary.icon.default};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.primary.background.hover};
      color: ${({ theme }) => theme.buttonIcon.primary.icon.hover};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.primary.background.pressed};
      color: ${({ theme }) => theme.buttonIcon.primary.icon.pressed};
    }

    &:disabled {
      background: ${({ theme }) =>
        theme.buttonIcon.primary.background.disabled};
      box-shadow: none;
      color: ${({ theme }) => theme.buttonIcon.primary.icon.disabled};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.buttonIcon.secondary.background.default};
    border: ${({ theme }) => theme.borderWidth.md} solid
      ${({ theme }) => theme.buttonIcon.secondary.border.default};
    box-shadow: ${({ theme }) => theme.buttonIcon.shadow};
    color: ${({ theme }) => theme.buttonIcon.secondary.icon.default};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.secondary.background.hover};
      border-color: ${({ theme }) => theme.buttonIcon.secondary.border.hover};
      color: ${({ theme }) => theme.buttonIcon.secondary.icon.hover};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) =>
        theme.buttonIcon.secondary.background.pressed};
      border-color: ${({ theme }) => theme.buttonIcon.secondary.border.pressed};
      color: ${({ theme }) => theme.buttonIcon.secondary.icon.pressed};
    }

    &:disabled {
      background: ${({ theme }) =>
        theme.buttonIcon.secondary.background.disabled};
      border-color: ${({ theme }) =>
        theme.buttonIcon.secondary.border.disabled};
      box-shadow: none;
      color: ${({ theme }) => theme.buttonIcon.secondary.icon.disabled};
    }
  `,
  ghost: css`
    background: ${({ theme }) => theme.buttonIcon.ghost.background.default};
    border: ${({ theme }) => theme.borderWidth.none} solid
      ${({ theme }) => theme.buttonIcon.ghost.border.default};
    box-shadow: none;
    color: ${({ theme }) => theme.buttonIcon.ghost.icon.default};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.ghost.background.hover};
      color: ${({ theme }) => theme.buttonIcon.ghost.icon.hover};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.ghost.background.pressed};
      color: ${({ theme }) => theme.buttonIcon.ghost.icon.pressed};
    }

    &:disabled {
      background: ${({ theme }) => theme.buttonIcon.ghost.background.disabled};
      color: ${({ theme }) => theme.buttonIcon.ghost.icon.disabled};
    }

    &:focus-visible:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.ghost.background.focus};
      color: ${({ theme }) => theme.buttonIcon.ghost.icon.focus};
    }
  `,
  critical: css`
    background: ${({ theme }) => theme.buttonIcon.critical.background.default};
    border: ${({ theme }) => theme.borderWidth.none} solid
      ${({ theme }) => theme.buttonIcon.critical.border.default};
    box-shadow: ${({ theme }) => theme.buttonIcon.shadow};
    color: ${({ theme }) => theme.buttonIcon.critical.icon.default};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.buttonIcon.critical.background.hover};
      color: ${({ theme }) => theme.buttonIcon.critical.icon.hover};
    }

    &:active:not(:disabled) {
      background: ${({ theme }) =>
        theme.buttonIcon.critical.background.pressed};
      color: ${({ theme }) => theme.buttonIcon.critical.icon.pressed};
    }

    &:disabled {
      background: ${({ theme }) =>
        theme.buttonIcon.critical.background.disabled};
      box-shadow: none;
      color: ${({ theme }) => theme.buttonIcon.critical.icon.disabled};
    }
  `,
} as const;

export const StyledButtonIcon = styled.button<StyleProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.buttonIcon.borderRadius};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  height: ${({ theme }) => theme.buttonIcon.size};
  justify-content: center;
  padding: ${({ theme }) => theme.buttonIcon.inset};
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    color 0.18s ease;
  width: ${({ theme }) => theme.buttonIcon.size};

  svg {
    display: block;
    flex-shrink: 0;
    height: ${({ theme }) => theme.buttonIcon.iconSize};
    width: ${({ theme }) => theme.buttonIcon.iconSize};
  }

  ${({ $variant }) => variantStyles[$variant]};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.buttonIcon.focus};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
