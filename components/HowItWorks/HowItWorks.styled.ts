'use client';

import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.color.background.subtle};
  padding-block: ${({ theme }) => theme.spacing.x3xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-block: ${({ theme }) => theme.spacing.layout.l};
  }
`;

export const Title = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.typography.headline.sm.fontSize},
    3.5vw,
    ${({ theme }) => theme.typography.headline.lg.fontSize}
  );
  font-weight: ${({ theme }) => theme.typography.headline.lg.fontWeight};
  line-height: ${({ theme }) => theme.typography.headline.lg.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const Steps = styled.ol`
  counter-reset: step;
  display: grid;
  gap: ${({ theme }) => theme.spacing.m};
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Step = styled.li`
  background: ${({ theme }) => theme.color.background.default};
  border: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme }) => theme.color.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
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

  &::before {
    align-items: center;
    background: ${({ theme }) => theme.color.background.accent};
    border-radius: ${({ theme }) => theme.borderRadius.pill};
    color: ${({ theme }) => theme.color.text.invert};
    content: counter(step);
    counter-increment: step;
    display: inline-flex;
    font-size: ${({ theme }) => theme.typography.text.baseHigh200.fontSize};
    font-weight: ${({ theme }) => theme.fontWeight.extra};
    height: ${({ theme }) => theme.spacing.xl};
    justify-content: center;
    line-height: ${({ theme }) => theme.typography.text.baseHigh200.lineHeight};
    width: ${({ theme }) => theme.spacing.xl};
  }
`;
