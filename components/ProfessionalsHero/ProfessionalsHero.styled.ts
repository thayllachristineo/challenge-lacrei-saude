'use client';

import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.color.background.success};
  padding-block: ${({ theme }) => theme.spacing.x2xl};
`;

export const Title = styled.h1`
  font-size: clamp(
    ${({ theme }) => theme.typography.headline.base.fontSize},
    4vw,
    ${({ theme }) => theme.typography.headline.xl.fontSize}
  );
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  line-height: ${({ theme }) => theme.typography.headline.xl.lineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Lead = styled.p`
  color: ${({ theme }) => theme.color.text.disabledSubtle};
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.base.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
  max-width: 60ch;
`;
