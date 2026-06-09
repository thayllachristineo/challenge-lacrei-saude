'use client';

import React from 'react';
import { StyledLink } from './Link.styled';
import type { LinkVariant } from './Link.types';

export type { LinkVariant } from './Link.types';

type LinkProps = {
  href: string;
  variant?: LinkVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;

const isExternalHref = (href: string) =>
  href.startsWith('http://') || href.startsWith('https://');

/**
 * Link acessível com variantes inline, default e secondary (footer).
 */
const Link = ({
  href,
  variant = 'default',
  disabled = false,
  icon,
  children,
  ...rest
}: LinkProps) => {
  const external = isExternalHref(href);

  return (
    <StyledLink
      href={disabled ? '#' : href}
      $variant={variant}
      $disabled={disabled}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      <span>{children}</span>
      {icon && <span aria-hidden="true">{icon}</span>}
    </StyledLink>
  );
};

export default Link;
