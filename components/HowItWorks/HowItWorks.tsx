'use client';

import Container from '@/components/Container';
import { Section, Step, Steps, Title } from './HowItWorks.styled';

const STEPS = [
  {
    title: 'Busque',
    description:
      'Pesquise por especialidade, cidade ou modalidade de atendimento.',
  },
  {
    title: 'Escolha',
    description:
      'Veja perfis verificados, pronomes e avaliações de outras pessoas.',
  },
  {
    title: 'Agende',
    description:
      'Marque sua consulta online ou presencial de forma simples e segura.',
  },
];

const HowItWorks = () => (
  <Section id="como-funciona" aria-labelledby="how-title">
    <Container as="div">
      <Title id="how-title">Como funciona</Title>
      <Steps>
        {STEPS.map((step) => (
          <Step key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Step>
        ))}
      </Steps>
    </Container>
  </Section>
);

export default HowItWorks;
