'use client';

import styled from 'styled-components';
import Container from '@/components/Container';

export const Section = styled.section`
  background: ${({ theme }) => theme.hero.gradient.background};
  padding-block: ${({ theme }) => theme.spacing.x3xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-block: ${({ theme }) => theme.spacing.layout.xl};
  }
`;

export const Grid = styled(Container)`
  align-items: center;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.05fr 0.95fr;
  }
`;

export const Eyebrow = styled.p`
  align-items: center;
  background: ${({ theme }) => theme.hero.background.badge};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  color: ${({ theme }) => theme.hero.text.badge};
  display: inline-flex;
  font-size: ${({ theme }) => theme.typography.text.smHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
  gap: ${({ theme }) => theme.spacing.x2xs};
  line-height: ${({ theme }) => theme.typography.text.smHigh200.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.x3xs}
    ${({ theme }) => theme.spacing.xs};
`;

export const Title = styled.h1`
  font-size: clamp(
    ${({ theme }) => theme.typography.headline.base.fontSize},
    5vw,
    ${({ theme }) => theme.typography.headline.xl.fontSize}
  );
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: ${({ theme }) => theme.typography.headline.xl.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  span {
    color: ${({ theme }) => theme.hero.text.accent};
  }
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.hero.text.muted};
  font-size: ${({ theme }) => theme.typography.text.xl.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.xl.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.xl.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  max-width: 52ch;
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Stats = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.m};
  margin-top: ${({ theme }) => theme.spacing.xl};

  div {
    display: flex;
    flex-direction: column;
  }

  dt {
    color: ${({ theme }) => theme.hero.text.muted};
    font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
    line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
    order: 2;
  }

  dd {
    color: ${({ theme }) => theme.hero.text.accent};
    font-size: ${({ theme }) => theme.typography.headline.sm.fontSize};
    font-weight: ${({ theme }) => theme.fontWeight.extra};
    line-height: ${({ theme }) => theme.typography.headline.sm.lineHeight};
    order: 1;
  }
`;

export const Art = styled.div`
  background: ${({ theme }) => theme.hero.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  color: ${({ theme }) => theme.hero.text.onBrand};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.l};
  position: relative;
`;

export const ArtBadge = styled.span`
  background: ${({ theme }) => theme.hero.gradient.bar};
  height: ${({ theme }) => theme.spacing.x3xs};
  inset: 0 0 auto auto;
  position: absolute;
  width: 100%;
`;

export const ArtTitle = styled.h2`
  color: ${({ theme }) => theme.hero.text.onBrand};
  font-size: ${({ theme }) => theme.typography.headline.smHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.smHigh200.fontWeight};
  line-height: ${({ theme }) => theme.typography.headline.smHigh200.lineHeight};
  margin: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.none}
    ${({ theme }) => theme.spacing.x2xs};
`;

export const ArtList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.s};

  li {
    align-items: flex-start;
    display: flex;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  svg {
    flex-shrink: 0;
    margin-top: ${({ theme }) => theme.spacing.x4xs};
  }
`;
