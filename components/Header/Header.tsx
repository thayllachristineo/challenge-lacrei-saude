'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import {
  Actions,
  Bar,
  HomeLink,
  Inner,
  MenuToggle,
  Nav,
  NavLink,
  NavList,
  RightSide,
} from './Header.styled';

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/profissionais', label: 'Profissionais' },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <Inner as="div">
        <HomeLink href="/" aria-label="Lacrei Saúde — página inicial">
          <Image
            src="/images/lacrei-horizontal-gradiente2.svg"
            alt="Lacrei Saúde"
            width={170}
            height={48}
          />
        </HomeLink>

        <RightSide>
          <Nav
            id="menu-principal"
            $open={open}
            aria-label="Navegação principal"
          >
            <NavList>
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </NavList>
            <Actions>
              <Button href="/profissionais" size="md">
                Agendar consulta
              </Button>
            </Actions>
          </Nav>

          <Button href="/profissionais" size="md">
            Agendar consulta
          </Button>

          <MenuToggle
            type="button"
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </MenuToggle>
        </RightSide>
      </Inner>
    </Bar>
  );
};

export default Header;
