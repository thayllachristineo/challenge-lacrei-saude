'use client';

import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.styled';
import type { ButtonIconVariant } from './ButtonIcon.types';

export type { ButtonIconVariant } from './ButtonIcon.types';

type ButtonIconProps = {
  variant?: ButtonIconVariant;
  children: React.ReactNode;
  'aria-label': string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

/** Botão quadrado 48×48px para ações com ícone apenas. */
const ButtonIcon = ({
  variant = 'secondary',
  children,
  type = 'button',
  ...rest
}: ButtonIconProps) => (
  <StyledButtonIcon type={type} $variant={variant} {...rest}>
    {children}
  </StyledButtonIcon>
);

export default ButtonIcon;
