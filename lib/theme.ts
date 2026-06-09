import { componentTokens } from './tokens/components';
import { semanticTokens } from './tokens/semantic';

/**
 * Única API de design tokens. Importe apenas daqui.
 *
 * Cor:           theme.color.text.default
 * Gradiente:     theme.gradient.primary
 * Border radius: theme.borderRadius.sm
 * Border width:  theme.borderWidth.md
 * Componente:    theme.button.primary.background.default
 * Link:          theme.link.inline.textColor
 *                theme.link.default.minHeight
 *                theme.link.secondary.textColor
 *                theme.link.hover.textColor
 * Shadow:        theme.shadow.md
 * Spacing:       theme.spacing.s
 * Tipografia:    theme.typography.headline.xl
 * Breakpoint:    theme.breakpoints.md
 * Layout:        theme.layout.maxWidth
 */

export const theme = {
  ...semanticTokens,
  ...componentTokens,
} as const;

export type AppTheme = typeof theme;
