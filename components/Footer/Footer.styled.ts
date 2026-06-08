'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Container from '@/components/Container';

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.color.background.default};
  margin: 2px solid ${({ theme }) => theme.footer.gradient.bar};
`;

export const RainbowBar = styled.div`
  background: ${({ theme }) => theme.footer.gradient.bar};
  height: ${({ theme }) => theme.spacing.x3xs};
`;

export const Inner = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-block: ${({ theme }) => theme.spacing.x2xl}
    ${({ theme }) => theme.spacing.l};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.l};
    grid-template-areas:
      'institutional contact'
      'social social'
      'legal legal';
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-areas: 'brand institutional contact';
    grid-template-columns: 1.4fr 1fr 1fr;
  }
`;

export const BrandColumn = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: contents;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.m};
    grid-area: brand;
    max-width: 320px;
  }
`;

export const BrandLink = styled(Link)`
  display: inline-flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const InstitutionalNav = styled.nav`
  grid-area: institutional;
`;

export const ContactNav = styled.nav`
  grid-area: contact;
`;

export const ColumnTitle = styled.h2`
  color: ${({ theme }) => theme.footer.text.default};
  font-size: ${({ theme }) => theme.typography.text.xlHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.baseHigh200.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.baseHigh200.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.footer.text.default};
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};

  &:hover {
    color: ${({ theme }) => theme.footer.text.linkHover};
    text-decoration: none;
  }
`;

export const Social = styled.ul`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.m};
  grid-area: social;
`;

export const SocialLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.footer.text.icon};
  display: inline-flex;
  justify-content: center;
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.footer.text.linkHover};
  }

  svg {
    display: block;
  }
`;

export const Legal = styled.div`
  color: ${({ theme }) => theme.footer.text.muted};
  display: none;
  font-size: ${({ theme }) => theme.typography.text.xs.fontSize};
  gap: ${({ theme }) => theme.spacing.s};
  grid-area: legal;
  line-height: ${({ theme }) => theme.typography.text.xs.lineHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const Bottom = styled.div`
  border-top: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme }) => theme.footer.border.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const BottomInner = styled(Container)`
  color: ${({ theme }) => theme.footer.text.muted};
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  gap: ${({ theme }) => theme.spacing.x2xs} ${({ theme }) => theme.spacing.s};
  justify-content: space-between;
  line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
  padding-block: ${({ theme }) => theme.spacing.s};
`;
