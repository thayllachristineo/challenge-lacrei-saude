'use client';

import styled from 'styled-components';
import Container from '@/components/Container';

const SectionSpacing = styled(Container).attrs({ as: 'section' })`
  padding-block: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.layout.l};
`;

export default SectionSpacing;
