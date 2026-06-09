'use client';

import styled from 'styled-components';

export const Form = styled.form`
  background: ${({ theme }) => theme.color.background.subtle};
  border: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme }) => theme.color.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: grid;
  gap: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.m};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: start;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1.2fr) auto;
  }
`;

export const FormActionSpacer = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.text.smHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.smHigh200.lineHeight};
  visibility: hidden;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const FormAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.input.labelGap};
`;

export const ResultsHeader = styled.div`
  align-items: baseline;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.none} ${({ theme }) => theme.spacing.s};

  h2 {
    font-size: ${({ theme }) => theme.typography.headline.smHigh200.fontSize};
    font-weight: ${({ theme }) =>
      theme.typography.headline.smHigh200.fontWeight};
    line-height: ${({ theme }) =>
      theme.typography.headline.smHigh200.lineHeight};
  }

  p {
    color: ${({ theme }) => theme.color.text.disabledSubtle};
    font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
    line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
  }
`;

export const Grid = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.s};
  grid-template-columns: 1fr;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StateBox = styled.div`
  border: ${({ theme }) => theme.borderWidth.sm} dashed
    ${({ theme }) => theme.color.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.color.text.disabledSubtle};
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
  padding: ${({ theme }) => theme.spacing.x2xl}
    ${({ theme }) => theme.spacing.m};
  text-align: center;
`;

export const SkeletonCard = styled.li`
  animation: skeleton 1.4s ease-in-out infinite;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.background.subtle} 25%,
    ${({ theme }) => theme.color.background.success} 50%,
    ${({ theme }) => theme.color.background.subtle} 75%
  );
  background-size: 200% 100%;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 280px;

  @keyframes skeleton {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
`;
