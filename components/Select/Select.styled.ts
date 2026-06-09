'use client';

import styled from 'styled-components';

export { Field, HelperText, Label } from '@/components/Input/Input.styled';

export type ControlStyleProps = {
  $hasError: boolean;
};

export const Control = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select<ControlStyleProps>`
  appearance: none;
  background: ${({ theme }) => theme.input.background.default};
  border: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.input.border.error : theme.input.border.default};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  color: ${({ theme }) => theme.input.text.value};
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  height: ${({ theme }) => theme.input.height};
  line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
  padding: ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.x2xl} ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.input.paddingInline};
  transition: border-color 0.18s ease;
  width: 100%;

  &:hover:not(:disabled):not(:focus-visible) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.input.border.error : theme.input.border.hover};
  }

  &:active:not(:disabled) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.input.border.error : theme.input.border.pressed};
  }

  &:focus-visible {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.input.border.error : theme.input.border.focus};
    outline: 3px solid ${({ theme }) => theme.input.border.focus};
    outline-offset: 1px;
  }

  &:disabled {
    background: ${({ theme }) => theme.input.background.disabled};
    border-color: ${({ theme }) => theme.input.border.disabled};
    color: ${({ theme }) => theme.input.text.disabled};
    cursor: not-allowed;
  }
`;

export const Chevron = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.input.icon.default};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  right: ${({ theme }) => theme.input.iconGap};
  top: 0;
  width: ${({ theme }) => theme.spacing.x2xl};

  svg {
    height: ${({ theme }) => theme.input.iconSize};
    width: ${({ theme }) => theme.input.iconSize};
  }
`;
