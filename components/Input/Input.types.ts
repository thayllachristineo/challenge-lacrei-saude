import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputStatus = 'default' | 'error' | 'success';

export type InputProps = {
  label: string;
  id: string;
  helperText?: string;
  error?: string | boolean;
  success?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>;
