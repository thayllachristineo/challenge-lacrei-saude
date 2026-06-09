'use client';

import {
  ClearButton,
  Control,
  Field,
  HelperIcon,
  HelperText,
  IconSlot,
  Label,
  StatusIcon,
  StyledInput,
} from './Input.styled';
import type { InputProps } from './Input.types';

export type { InputProps } from './Input.types';

const ClearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M6 6l12 12M18 6 6 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 8v5M12 16h.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12.5 10.5 15 16 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

/** Campo de texto acessível com estados do handoff Input Text. */
const Input = ({
  label,
  id,
  helperText,
  error,
  success = false,
  clearable = false,
  onClear,
  iconLeft,
  iconRight,
  disabled,
  value,
  defaultValue,
  ...rest
}: InputProps) => {
  const errorMessage = typeof error === 'string' ? error : undefined;
  const hasError = Boolean(error);
  const hasSuccess = success && !hasError;
  const currentValue = value ?? defaultValue ?? '';
  const hasValue = String(currentValue).length > 0;
  const showClear =
    clearable && hasValue && !disabled && !hasError && !hasSuccess;
  const showStatusIcon = hasError || hasSuccess;
  const showIconRight = showStatusIcon || showClear || Boolean(iconRight);
  const helperId = helperText || errorMessage ? `${id}-helper` : undefined;

  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Control>
        {iconLeft && (
          <IconSlot $side="left" aria-hidden="true">
            {iconLeft}
          </IconSlot>
        )}

        <StyledInput
          id={id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          aria-invalid={hasError || undefined}
          aria-describedby={helperId}
          $hasError={hasError}
          $hasSuccess={hasSuccess}
          $hasIconLeft={Boolean(iconLeft)}
          $hasIconRight={showIconRight}
          {...rest}
        />

        {hasError && (
          <StatusIcon $side="right" $variant="error" aria-hidden="true">
            <ErrorIcon />
          </StatusIcon>
        )}

        {hasSuccess && (
          <StatusIcon $side="right" $variant="success" aria-hidden="true">
            <SuccessIcon />
          </StatusIcon>
        )}

        {showClear && (
          <ClearButton
            type="button"
            aria-label="Limpar texto"
            onClick={onClear}
          >
            <ClearIcon />
          </ClearButton>
        )}

        {!showStatusIcon && !showClear && iconRight && (
          <IconSlot $side="right" aria-hidden="true">
            {iconRight}
          </IconSlot>
        )}
      </Control>

      {(helperText || errorMessage) && (
        <HelperText id={helperId} $hasError={hasError}>
          {hasError && (
            <HelperIcon aria-hidden="true">
              <ErrorIcon />
            </HelperIcon>
          )}
          <span>{errorMessage ?? helperText}</span>
        </HelperText>
      )}
    </Field>
  );
};

export default Input;
