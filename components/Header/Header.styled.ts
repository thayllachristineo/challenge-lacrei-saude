'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Container from '@/components/Container';

export const Bar = styled.header`
  background: ${({ theme }) => theme.header.background.default};
  border-bottom: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme }) => theme.header.border.default};
  padding: ${({ theme }) => theme.spacing.s} 0;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Inner = styled(Container)`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  justify-content: space-between;
  min-height: ${({ theme }) => theme.spacing.layout.l};
`;

export const Nav = styled.nav<{ $open: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: ${({ theme }) => theme.header.background.default};
    border-bottom: ${({ theme }) => theme.borderWidth.sm} solid
      ${({ theme }) => theme.header.border.default};
    box-shadow: ${({ theme }) => theme.shadow.dropdown};
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    inset: ${({ theme }) => theme.spacing.layout.l} 0 auto 0;
    padding: ${({ theme }) => theme.spacing.x2xs}
      ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.s};
    position: absolute;
  }
`;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.x2xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: stretch;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.x3xs};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const NavLink = styled(Link)`
  background: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.header.text.active};
  display: block;
  font-size: ${({ theme }) => theme.typography.text.xlHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.xlHigh200.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.xlHigh200.lineHeight};
  padding: ${({ theme }) => theme.spacing.x2xs}
    ${({ theme }) => theme.spacing.s};
  text-decoration: none;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;

  &:hover {
    background: ${({ theme }) => theme.header.background.active};
    color: ${({ theme }) => theme.header.text.active};
    text-decoration: none;
  }

  &:focus-visible {
    background: ${({ theme }) => theme.header.background.active};
    outline: 3px solid ${({ theme }) => theme.color.border.focusInfo};
    outline-offset: 2px;
    text-decoration: none;
  }
`;

export const Actions = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    & > a {
      display: none;
    }
  }
`;

export const MenuToggle = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.header.background.default};
  border: ${({ theme }) => theme.borderWidth.md} solid
    ${({ theme }) => theme.header.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.header.text.default};
  cursor: pointer;
  display: none;
  height: ${({ theme }) => theme.spacing.x2xl};
  justify-content: center;
  width: ${({ theme }) => theme.spacing.x2xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline-flex;
  }
`;

export const HomeLink = styled(Link)`
  display: inline-flex;

  &:hover {
    text-decoration: none;
  }
`;
