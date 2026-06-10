'use client';

import styled from 'styled-components';

export const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.x3xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-block: ${({ theme }) => theme.spacing.layout.l};
  }
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 56ch;

  h2 {
    font-size: clamp(
      ${({ theme }) => theme.typography.headline.sm.fontSize},
      3.5vw,
      ${({ theme }) => theme.typography.headline.lg.fontSize}
    );
    font-weight: ${({ theme }) => theme.typography.headline.lg.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.lg.lineHeight};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.color.text.default};
    font-size: ${({ theme }) => theme.typography.text.base.fontSize};
    line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
  }
`;

export const Grid = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.s};
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.li`
  background: ${({ theme }) => theme.color.background.subtle};
  border: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme }) => theme.color.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 100%;
  padding: ${({ theme }) => theme.spacing.m} ${({ theme }) => theme.spacing.m};

  h3 {
    font-size: ${({ theme }) => theme.typography.headline.smHigh200.fontSize};
    font-weight: ${({ theme }) =>
      theme.typography.headline.smHigh200.fontWeight};
    line-height: ${({ theme }) =>
      theme.typography.headline.smHigh200.lineHeight};
    margin: ${({ theme }) => theme.spacing.s}
      ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.x2xs};
  }

  p {
    color: ${({ theme }) => theme.color.text.default};
    font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
    line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
  }
`;

export const IconBox = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.color.background.success};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.color.text.pressed};
  display: inline-flex;
  height: ${({ theme }) => theme.spacing.x2xl};
  justify-content: center;
  width: ${({ theme }) => theme.spacing.x2xl};
`;
