'use client';

import React from 'react';
import { Spinner, StyledButton, StyledLink } from './Button.styled';
import type { ButtonSize, ButtonVariant } from './Button.types';

export type { ButtonSize, ButtonVariant } from './Button.types';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Botão acessível e polimórfico.
 * - Sem `href`: renderiza <button> (ações).
 * - Com `href`: renderiza um <Link> do Next (navegação com prefetch).
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  iconLeft,
  children,
  href,
  ...rest
}: ButtonProps) => {
  const content = (
    <>
      {isLoading ? (
        <Spinner aria-hidden="true" />
      ) : (
        iconLeft && <span aria-hidden="true">{iconLeft}</span>
      )}
      <span>{children}</span>
    </>
  );

  if (href !== undefined) {
    return (
      <StyledLink
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...(rest as Omit<ButtonAsLink, keyof BaseProps | 'href' | 'children'>)}
      >
        {content}
      </StyledLink>
    );
  }

  const { type = 'button', disabled, ...buttonRest } = rest as ButtonAsButton;

  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      aria-disabled={disabled || isLoading || undefined}
      aria-busy={isLoading || undefined}
      disabled={disabled || isLoading}
      {...buttonRest}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
