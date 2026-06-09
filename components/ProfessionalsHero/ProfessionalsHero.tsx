'use client';

import Container from '@/components/Container';
import { Lead, Section, Title } from './ProfessionalsHero.styled';

const ProfessionalsHero = () => (
  <Section aria-labelledby="profissionais-title">
    <Container as="div">
      <Title id="profissionais-title">Encontre profissionais de saúde</Title>
      <Lead>
        Busque por especialidade ou localização e conecte-se a profissionais que
        oferecem um atendimento seguro e acolhedor para a comunidade LGBTQIAPN+.
      </Lead>
    </Container>
  </Section>
);

export default ProfessionalsHero;
