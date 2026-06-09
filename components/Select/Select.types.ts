import type { SelectHTMLAttributes } from 'react';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  label: string;
  id: string;
  helperText?: string;
  error?: string | boolean;
  options: SelectOption[];
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'children'>;
