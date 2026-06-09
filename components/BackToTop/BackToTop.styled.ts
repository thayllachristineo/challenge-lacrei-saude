'use client';

import styled from 'styled-components';

export const Floating = styled.button<{ $visible: boolean }>`
  align-items: center;
  background: ${({ theme }) => theme.backToTop.background.default};
  border: ${({ theme }) => theme.borderWidth.none};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  bottom: ${({ theme }) => theme.spacing.s};
  box-shadow: ${({ theme }) => theme.shadow.md};
  color: ${({ theme }) => theme.backToTop.text.default};
  cursor: pointer;
  display: inline-flex;
  height: ${({ theme }) => theme.spacing.x2xl};
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  position: fixed;
  right: ${({ theme }) => theme.spacing.s};
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(12px)'};
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  width: ${({ theme }) => theme.spacing.x2xl};
  z-index: 60;

  &:hover {
    background: ${({ theme }) => theme.backToTop.background.hover};
  }
`;
