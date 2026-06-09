'use client';

import styled, { css } from 'styled-components';

export type ControlStyleProps = {
  $hasError: boolean;
  $hasSuccess: boolean;
  $hasIconLeft: boolean;
  $hasIconRight: boolean;
};

const controlStates = css<ControlStyleProps>`
  background: ${({ theme }) => theme.input.background.default};
  border: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme, $hasError, $hasSuccess }) =>
      $hasError
        ? theme.input.border.error
        : $hasSuccess
          ? theme.input.border.success
          : theme.input.border.default};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  color: ${({ theme }) => theme.input.text.value};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  height: ${({ theme }) => theme.input.height};
  line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme, $hasIconRight }) =>
      $hasIconRight ? theme.spacing.x2xl : theme.input.paddingInline}
    ${({ theme }) => theme.spacing.none}
    ${({ theme, $hasIconLeft }) =>
      $hasIconLeft ? theme.spacing.x2xl : theme.input.paddingInline};
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.input.text.placeholder};
  }

  &:hover:not(:disabled):not(:focus-visible) {
    border-color: ${({ theme, $hasError, $hasSuccess }) =>
      $hasError
        ? theme.input.border.error
        : $hasSuccess
          ? theme.input.border.success
          : theme.input.border.hover};
  }

  &:active:not(:disabled) {
    border-color: ${({ theme, $hasError, $hasSuccess }) =>
      $hasError
        ? theme.input.border.error
        : $hasSuccess
          ? theme.input.border.success
          : theme.input.border.pressed};
  }

  &:focus-visible {
    border-color: ${({ theme, $hasError, $hasSuccess }) =>
      $hasError
        ? theme.input.border.error
        : $hasSuccess
          ? theme.input.border.success
          : theme.input.border.focus};
    outline: 3px solid ${({ theme }) => theme.input.border.focus};
    outline-offset: 1px;
  }

  &:disabled {
    background: ${({ theme }) => theme.input.background.disabled};
    border-color: ${({ theme }) => theme.input.border.disabled};
    color: ${({ theme }) => theme.input.text.disabled};
    cursor: not-allowed;

    &::placeholder {
      color: ${({ theme }) => theme.input.text.disabled};
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.input.text.label};
  font-size: ${({ theme }) => theme.typography.text.smHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.smHigh200.lineHeight};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.input.labelGap};
  width: 100%;

  &:has(:disabled) ${Label} {
    color: ${({ theme }) => theme.input.text.disabled};
  }
`;

export const Control = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<ControlStyleProps>`
  ${controlStates};
`;

export const IconSlot = styled.span<{ $side: 'left' | 'right' }>`
  align-items: center;
  color: ${({ theme }) => theme.input.icon.default};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: ${({ theme }) => theme.spacing.x2xl};

  ${({ $side, theme }) =>
    $side === 'left'
      ? css`
          left: ${theme.input.iconGap};
        `
      : css`
          right: ${theme.input.iconGap};
        `};

  svg {
    height: ${({ theme }) => theme.input.iconSize};
    width: ${({ theme }) => theme.input.iconSize};
  }
`;

export const StatusIcon = styled(IconSlot)<{ $variant: 'error' | 'success' }>`
  color: ${({ theme, $variant }) =>
    $variant === 'error' ? theme.input.icon.error : theme.input.icon.success};
`;

export const ClearButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.input.icon.default};
  cursor: pointer;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.none};
  position: absolute;
  right: ${({ theme }) => theme.input.iconGap};
  top: 0;
  width: ${({ theme }) => theme.spacing.x2xl};

  &:focus-visible {
    border-radius: ${({ theme }) => theme.input.borderRadius};
    outline: 3px solid ${({ theme }) => theme.input.border.focus};
    outline-offset: 1px;
  }

  svg {
    height: ${({ theme }) => theme.input.iconSize};
    width: ${({ theme }) => theme.input.iconSize};
  }
`;

export const HelperText = styled.p<{ $hasError: boolean }>`
  color: ${({ theme, $hasError }) =>
    $hasError ? theme.input.text.error : theme.input.text.helper};
  display: flex;
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  gap: ${({ theme }) => theme.input.helperGap};
  line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
  margin: ${({ theme }) => theme.spacing.none};
`;

export const HelperIcon = styled.span`
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;

  svg {
    height: ${({ theme }) => theme.typography.text.sm.fontSize};
    width: ${({ theme }) => theme.typography.text.sm.fontSize};
  }
`;
