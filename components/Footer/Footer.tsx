'use client';

import Image from 'next/image';
import Link from '@/components/Link';
import {
  Bottom,
  BottomInner,
  BrandColumn,
  BrandLink,
  ColumnTitle,
  ContactNav,
  Inner,
  InstitutionalNav,
  Legal,
  LinkList,
  RainbowBar,
  Social,
  SocialLink,
  Wrapper,
} from './Footer.styled';

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/lacreisaude',
    label: 'Facebook da Lacrei Saúde (abre em nova aba)',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M14 8h2.5V5.5H14c-2.2 0-3.5 1.3-3.5 3.5V12H8v3h2.5v7H14v-7h2.4l.6-3H14V9c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/lacreisaude',
    label: 'Instagram da Lacrei Saúde (abre em nova aba)',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/lacrei',
    label: 'LinkedIn da Lacrei Saúde (abre em nova aba)',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 10v8M8 7.5v.5M12 18v-4.5c0-1.4 1.1-2.5 2.5-2.5S17 12.1 17 13.5V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: 'mailto:contato@lacreisaude.com.br',
    label: 'Enviar e-mail para contato@lacreisaude.com.br',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m3 7 9 6 9-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <RainbowBar aria-hidden="true" />
      <Inner as="div">
        <BrandColumn>
          <BrandLink href="/" aria-label="Lacrei Saúde — página inicial">
            <Image
              src="/images/lacrei-horizontal-gradiente2.svg"
              alt="Logotipo Lacrei Saúde"
              width={170}
              height={48}
            />
          </BrandLink>
          <nav aria-label="Redes sociais">
            <Social>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <SocialLink
                    href={social.href}
                    {...(social.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialLink>
                </li>
              ))}
            </Social>
          </nav>
        </BrandColumn>

        <InstitutionalNav aria-label="Links institucionais">
          <ColumnTitle>Institucional</ColumnTitle>
          <LinkList>
            <li>
              <Link href="/" variant="secondary">
                Início
              </Link>
            </li>
            <li>
              <Link href="/profissionais" variant="secondary">
                Encontrar profissionais
              </Link>
            </li>
          </LinkList>
        </InstitutionalNav>

        <ContactNav aria-label="Contato">
          <ColumnTitle>Contato</ColumnTitle>
          <LinkList>
            <li>
              <Link
                href="mailto:contato@lacreisaude.com.br"
                variant="secondary"
              >
                contato@lacreisaude.com.br
              </Link>
            </li>
            <li>
              <Link href="/profissionais" variant="secondary">
                Central de ajuda
              </Link>
            </li>
          </LinkList>
        </ContactNav>

        <Legal>
          <p>
            A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
            emergência procure o hospital mais próximo.
          </p>
          <p>
            Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o
            site{' '}
            <Link href="https://www.cvv.org.br" variant="inline">
              www.cvv.org.br
            </Link>
          </p>
          <p>
            Copyright © {year} Lacrei Saúde. Todos os direitos reservados. CNPJ:
            51.265.351/0001-65
          </p>
        </Legal>
      </Inner>

      <Bottom>
        <BottomInner as="div">
          <span>© {year} Lacrei Saúde. Todos os direitos reservados.</span>
        </BottomInner>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
