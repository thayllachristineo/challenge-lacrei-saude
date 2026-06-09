'use client';

import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.card.background.default};
  border: ${({ theme }) => theme.borderWidth.sm} solid
    ${({ theme }) => theme.card.border.default};
  border-radius: ${({ theme }) => theme.card.borderRadius};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.card.spacing.gap};
  height: 100%;
  padding: ${({ theme }) => theme.card.spacing.paddingBlock}
    ${({ theme }) => theme.card.spacing.paddingInline};
`;

export const Top = styled.div`
  align-items: flex-start;
  display: flex;
  gap: ${({ theme }) => theme.card.spacing.badgeGap};
  justify-content: space-between;
`;

export const Avatar = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.card.background.avatar};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  color: ${({ theme }) => theme.card.text.avatar};
  display: inline-flex;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.typography.text.xlHigh200.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.extra};
  height: ${({ theme }) => theme.card.avatar.mobile};
  justify-content: center;
  line-height: 1;
  width: ${({ theme }) => theme.card.avatar.mobile};
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.x4xs};
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.card.text.accent};
  font-size: ${({ theme }) => theme.typography.text.xlHigh200.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.xlHigh200.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.xlHigh200.lineHeight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.headline.smHigh200.fontSize};
    font-weight: ${({ theme }) =>
      theme.typography.headline.smHigh200.fontWeight};
    line-height: ${({ theme }) =>
      theme.typography.headline.smHigh200.lineHeight};
  }
`;

export const Pronouns = styled.span`
  align-self: flex-start;
  background: ${({ theme }) => theme.card.background.tag};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  color: ${({ theme }) => theme.card.text.tag};
  display: inline-flex;
  font-size: ${({ theme }) => theme.typography.text.xs.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh200.fontWeight};
  gap: ${({ theme }) => theme.spacing.x3xs};
  line-height: ${({ theme }) => theme.typography.text.xs.lineHeight};
  padding: ${({ theme }) => theme.spacing.x4xs}
    ${({ theme }) => theme.spacing.x3xs};
`;

export const Specialty = styled.p`
  color: ${({ theme }) => theme.card.text.credentials};
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.base.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.base.lineHeight};
`;

export const Meta = styled.ul`
  color: ${({ theme }) => theme.card.text.default};
  display: flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  gap: ${({ theme }) => theme.card.spacing.badgeGap}
    ${({ theme }) => theme.card.spacing.gap};
  line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    display: inline-flex;
    gap: ${({ theme }) => theme.spacing.x3xs};
  }

  svg {
    color: ${({ theme }) => theme.color.icon.accent};
    flex-shrink: 0;
    opacity: 0.5;
  }
`;

export const Bio = styled.p`
  color: ${({ theme }) => theme.card.text.default};
  flex: 1;
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  line-height: ${({ theme }) => theme.typography.text.sm.lineHeight};
`;

export const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.x3xs};
`;
