'use client';

import Button from '@/components/Button';
import {
  Art,
  ArtBadge,
  ArtList,
  ArtTitle,
  Ctas,
  Eyebrow,
  Grid,
  Lead,
  Section,
  Stats,
  Title,
} from './Hero.styled';

const Hero = () => (
  <Section aria-labelledby="hero-title">
    <Grid as="div">
      <div>
        <Eyebrow>🌈 Cuidado que acolhe</Eyebrow>
        <Title id="hero-title">
          Saúde <span>segura e acolhedora</span> para toda a comunidade
          LGBTQIAPN+
        </Title>
        <Lead>
          A Lacrei Saúde conecta você a profissionais de saúde preparados para
          oferecer um atendimento respeitoso, livre de preconceitos e centrado
          em quem você é.
        </Lead>
        <Ctas>
          <Button href="/profissionais" size="lg">
            Encontrar profissionais
          </Button>
          <Button href="#como-funciona" variant="secondary" size="lg">
            Como funciona
          </Button>
        </Ctas>

        <Stats>
          <div>
            <dt>profissionais verificados</dt>
            <dd>+500</dd>
          </div>
          <div>
            <dt>cidades atendidas</dt>
            <dd>120</dd>
          </div>
          <div>
            <dt>avaliação média</dt>
            <dd>4.9</dd>
          </div>
        </Stats>
      </div>

      <Art>
        <ArtBadge aria-hidden="true" />
        <ArtTitle>Por que a Lacrei Saúde?</ArtTitle>
        <p>Um cuidado pensado para respeitar a sua identidade.</p>
        <ArtList>
          {[
            'Profissionais que respeitam nome social e pronomes',
            'Atendimento online e presencial em todo o Brasil',
            'Privacidade e segurança dos seus dados',
          ].map((item) => (
            <li key={item}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.18)" />
                <path
                  d="M7 12.5l3 3 7-7"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ArtList>
      </Art>
    </Grid>
  </Section>
);

export default Hero;
