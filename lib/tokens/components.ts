import { semanticTokens } from './semantic';

const { background, text, border } = semanticTokens.color;
const g = semanticTokens.gradient;

export const componentTokens = {
  button: {
    background: {
      primary: {
        default: background.accent,
        hover: background.accentHover,
        active: background.accentPressed,
      },
      secondary: {
        hover: background.success,
        active: background.successHover,
      },
    },
    border: {
      primary: {
        default: border.accent,
      },
    },
    text: {
      onPrimary: text.invert,
      secondary: text.accent,
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
      muted: text.disabledSubtle,
      onBrand: text.invert,
    },
  },
  card: {
    background: {
      default: background.default,
      avatar: background.success,
      tag: background.success,
      favoriteActive: background.success,
    },
    border: {
      default: border.default,
      favorite: {
        default: border.default,
        active: border.accent,
      },
    },
    text: {
      default: text.default,
      muted: text.disabledSubtle,
      avatar: text.pressed,
      tag: text.pressed,
      favorite: background.accent,
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
} as const;
