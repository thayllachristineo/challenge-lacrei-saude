'use client';

import { Band, CtaButton, Section } from './CtaBand.styled';

const CtaBand = () => (
  <Section aria-labelledby="cta-title">
    <Band as="div">
      <h2 id="cta-title">Pronte para encontrar o cuidado que você merece?</h2>
      <p>
        Comece agora a buscar profissionais de saúde que respeitam quem você é.
      </p>
      <CtaButton href="/profissionais" size="lg">
        Encontrar profissionais
      </CtaButton>
    </Band>
  </Section>
);

export default CtaBand;
