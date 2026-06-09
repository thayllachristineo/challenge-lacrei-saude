'use client';

import styled from 'styled-components';
import Button from '@/components/Button';
import Container from '@/components/Container';

export const Section = styled.section`
  padding-block: ${({ theme }) => theme.spacing.x3xl}
    ${({ theme }) => theme.spacing.layout.l};
`;

export const Band = styled(Container)`
  background: ${({ theme }) => theme.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.md};
  color: ${({ theme }) => theme.color.text.invert};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.m};
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.text.invert};
    font-size: clamp(
      ${({ theme }) => theme.typography.headline.sm.fontSize},
      3.5vw,
      ${({ theme }) => theme.typography.headline.base.fontSize}
    );
    font-weight: ${({ theme }) => theme.typography.headline.base.fontWeight};
    line-height: ${({ theme }) => theme.typography.headline.base.lineHeight};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.color.text.invert};
    font-size: ${({ theme }) => theme.typography.text.base.fontSize};
    line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
    margin: ${({ theme }) => theme.spacing.none} auto
      ${({ theme }) => theme.spacing.m};
    max-width: 48ch;
    opacity: 0.9;
  }
`;

export const CtaButton = styled(Button)`
  background: ${({ theme }) => theme.color.text.invert};
  border-color: ${({ theme }) => theme.color.text.invert};
  color: ${({ theme }) => theme.color.text.pressed};

  &:hover {
    background: ${({ theme }) => theme.color.background.success};
    border-color: ${({ theme }) => theme.color.background.success};
  }
`;
