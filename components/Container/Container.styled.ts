'use client';

import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding-inline: ${({ theme }) => theme.spacing.s};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: ${({ theme }) => theme.spacing.l};
  }
`;
