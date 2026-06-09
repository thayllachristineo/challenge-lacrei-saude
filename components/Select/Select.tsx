'use client';

import {
  Chevron,
  Control,
  Field,
  HelperText,
  Label,
  StyledSelect,
} from './Select.styled';
import type { SelectProps } from './Select.types';

export type { SelectOption, SelectProps } from './Select.types';

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

/** Campo select acessível com os mesmos tokens do Input Text. */
const Select = ({
  label,
  id,
  helperText,
  error,
  options,
  placeholder,
  disabled,
  ...rest
}: SelectProps) => {
  const errorMessage = typeof error === 'string' ? error : undefined;
  const hasError = Boolean(error);
  const helperId = helperText || errorMessage ? `${id}-helper` : undefined;

  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Control>
        <StyledSelect
          id={id}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={helperId}
          $hasError={hasError}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <Chevron aria-hidden="true">
          <ChevronIcon />
        </Chevron>
      </Control>

      {(helperText || errorMessage) && (
        <HelperText id={helperId} $hasError={hasError}>
          <span>{errorMessage ?? helperText}</span>
        </HelperText>
      )}
    </Field>
  );
};

export default Select;
