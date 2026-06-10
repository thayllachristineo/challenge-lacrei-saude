import { semanticTokens } from './semantic';

const { background, text, border, icon } = semanticTokens.color;
const { typography, spacing, borderRadius, borderWidth, shadow } =
  semanticTokens;
const g = semanticTokens.gradient;

export const componentTokens = {
  button: {
    height: spacing.x2xl,
    borderRadius: borderRadius.sm,
    shadow: shadow.md,
    typography: typography.text.xlHigh200,
    paddingInline: spacing.s,
    paddingInlineLg: spacing.m,
    iconGap: spacing.xs,
    iconSize: spacing.m,
    focus: border.focusInfo,
    primary: {
      background: {
        default: background.accent,
        hover: background.accentHover,
        pressed: background.accentPressed,
        disabled: background.disabled,
      },
      border: {
        default: 'transparent',
      },
      text: {
        default: text.invert,
        hover: text.invert,
        pressed: text.invert,
        disabled: text.disabled,
      },
      icon: {
        default: icon.invert,
        hover: icon.invert,
        pressed: icon.invert,
        disabled: icon.disabled,
      },
    },
    secondary: {
      background: {
        default: background.default,
        hover: background.successHover,
        pressed: background.successPressed,
        disabled: background.disabled,
      },
      border: {
        default: border.accent,
        hover: border.hover,
        pressed: border.pressed,
        disabled: border.disabled,
      },
      text: {
        default: text.accent,
        hover: text.hover,
        pressed: text.pressed,
        disabled: text.disabled,
      },
      icon: {
        default: icon.accent,
        hover: icon.hover,
        pressed: icon.pressed,
        disabled: icon.disabled,
      },
    },
    link: {
      background: {
        default: 'transparent',
        hover: background.successHover,
        pressed: background.successPressed,
      },
      text: {
        default: text.accent,
        hover: text.hover,
        pressed: text.pressed,
      },
      icon: {
        default: icon.accent,
        hover: icon.hover,
        pressed: icon.pressed,
      },
    },
  },
  buttonIcon: {
    size: spacing.x2xl,
    iconSize: spacing.m,
    inset: spacing.xs,
    borderRadius: borderRadius.sm,
    shadow: shadow.md,
    focus: border.focusInfo,
    primary: {
      background: {
        default: background.accent,
        hover: background.accentHover,
        pressed: background.accentPressed,
        disabled: background.disabled,
      },
      border: {
        default: 'transparent',
      },
      icon: {
        default: icon.invert,
        hover: icon.invert,
        pressed: icon.invert,
        disabled: icon.disabled,
      },
    },
    secondary: {
      background: {
        default: background.default,
        hover: background.successHover,
        pressed: background.successPressed,
        disabled: background.default,
      },
      border: {
        default: border.accent,
        hover: border.hover,
        pressed: border.pressed,
        disabled: border.disabled,
      },
      icon: {
        default: icon.accent,
        hover: icon.hover,
        pressed: icon.pressed,
        disabled: icon.disabled,
      },
    },
    ghost: {
      background: {
        default: 'transparent',
        hover: background.successHover,
        pressed: background.successPressed,
        disabled: 'transparent',
        focus: background.default,
      },
      border: {
        default: 'transparent',
      },
      icon: {
        default: icon.default,
        hover: icon.hover,
        pressed: icon.pressed,
        disabled: icon.disabled,
        focus: icon.accent,
      },
    },
    critical: {
      background: {
        default: background.error,
        hover: background.errorHover,
        pressed: background.errorPressed,
        disabled: background.errorSubtle,
      },
      border: {
        default: 'transparent',
      },
      icon: {
        default: icon.invert,
        hover: icon.invert,
        pressed: icon.invert,
        disabled: icon.disabled,
      },
    },
  },
  header: {
    background: {
      default: background.default,
      active: background.success,
    },
    border: {
      default: border.default,
    },
    text: {
      default: text.default,
      active: text.accent,
    },
  },
  footer: {
    background: {
      surface: background.subtle,
      icon: background.success,
      iconHover: background.successHover,
    },
    border: {
      default: border.default,
    },
    text: {
      default: text.default,
      muted: text.disabledSubtle,
      linkHover: text.accent,
      icon: text.accent,
    },
    gradient: {
      bar: g.primary,
    },
  },
  hero: {
    gradient: {
      background: `radial-gradient(120% 120% at 100% 0%, ${background.subtle} 0%, ${background.default} 55%)`,
      bar: g.secondary,
    },
    background: {
      badge: background.success,
      card: background.accent,
    },
    text: {
      badge: text.pressed,
      accent: background.accent,
      muted: text.default,
      onBrand: text.invert,
    },
  },
  card: {
    background: {
      avatar: background.success,
      default: background.default,
      service: background.success,
      tag: background.success,
    },
    border: {
      default: border.default,
    },
    borderRadius: borderRadius.sm,
    spacing: {
      badgeGap: spacing.x2xs,
      gap: spacing.s,
      paddingInline: spacing.s,
      paddingBlock: spacing.m,
      sectionGap: spacing.m,
    },
    avatar: {
      desktop: '6.625rem',
      mobile: '3.5rem',
    },
    text: {
      accent: text.accent,
      avatar: text.pressed,
      credentials: text.default,
      default: text.default,
      heading: text.heading,
      muted: text.disabledSubtle,
      service: text.pressed,
      tag: text.pressed,
    },
  },
  backToTop: {
    background: {
      default: background.accent,
      hover: background.accentHover,
    },
    text: {
      default: text.invert,
    },
  },
  logo: {
    text: {
      default: background.accent,
    },
  },
  input: {
    borderRadius: borderRadius.sm,
    height: spacing.x2xl,
    helperGap: spacing.x3xs,
    iconGap: spacing.x2xs,
    iconSize: '1.25rem',
    labelGap: spacing.x2xs,
    paddingInline: spacing.s,
    background: {
      default: background.default,
      disabled: background.disabled,
    },
    border: {
      default: border.default,
      disabled: border.disabled,
      error: border.error,
      focus: border.focusInfo,
      hover: border.hover,
      pressed: border.pressed,
      success: border.success,
    },
    text: {
      disabled: text.disabled,
      error: text.error,
      helper: text.default,
      label: text.heading,
      placeholder: text.disabledSubtle,
      value: text.default,
    },
    icon: {
      default: icon.default,
      disabled: icon.disabled,
      error: icon.error,
      success: icon.success,
    },
  },
  link: {
    inline: {
      textStyle: typography.text.xlHigh200,
      textColor: text.accent,
      iconSize: spacing.m,
      iconColor: icon.accent,
      iconSpace: spacing.x2xs,
    },
    default: {
      minHeight: spacing.x2xl,
      textColor: text.accent,
      iconSize: spacing.m,
      iconColor: icon.accent,
      iconSpace: spacing.x2xs,
    },
    secondary: {
      textStyle: typography.text.sm,
      textColor: text.accent,
      iconSize: spacing.m,
      iconColor: icon.accent,
      iconSpace: spacing.x2xs,
    },
    disabled: {
      textColor: text.disabledSubtle,
    },
    hover: {
      textColor: text.hover,
    },
    pressed: {
      textColor: text.pressed,
    },
    focus: {
      textColor: text.accent,
      focusDisplay: border.focusInfo,
    },
  },
} as const;
