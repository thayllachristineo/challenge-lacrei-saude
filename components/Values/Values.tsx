'use client';

import Container from '@/components/Container';
import { Card, Grid, Header, IconBox, Section } from './Values.styled';

const VALUES = [
  {
    title: 'Acolhimento de verdade',
    description:
      'Profissionais comprometidos com um atendimento livre de discriminação e julgamentos.',
    icon: (
      <path
        d="M12 21s-7-4.35-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 3.5C19 16.65 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Segurança e privacidade',
    description:
      'Seus dados são tratados com responsabilidade e respeito à sua confidencialidade.',
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Acesso para todes',
    description:
      'Atendimento online e presencial, com interface acessível e inclusiva.',
    icon: (
      <>
        <circle cx="12" cy="6" r="2.2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M5 10h14M12 10v6m0 0l-3 4m3-4l3 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

const Values = () => (
  <Section aria-labelledby="values-title">
    <Container as="div">
      <Header>
        <h2 id="values-title">Tecnologia como forma de cuidado</h2>
        <p>
          Cada detalhe da Lacrei Saúde foi pensado para que você se sinta
          segura, segure e seguro ao buscar atendimento.
        </p>
      </Header>
      <Grid>
        {VALUES.map((value) => (
          <Card key={value.title}>
            <IconBox>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                {value.icon}
              </svg>
            </IconBox>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Values;
