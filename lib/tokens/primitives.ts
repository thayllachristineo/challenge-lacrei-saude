/** Raw design values — never used directly in components. */
export const primitiveTokens = {
  /** Color */
  color: {
    // Brand: Emerald
    'emerald-10': '#DFF2ED',
    'emerald-20': '#B2DFD0',
    'emerald-30': '#80CAB1',
    'emerald-40': '#4FB494',
    'emerald-50': '#29A480',
    'emerald-60': '#018762',
    'emerald-70': '#007756',
    'emerald-80': '#007756',

    // System: Green
    'green-10': '#EBF9F0',
    'green-20': '#C4EED1',
    'green-30': '#9CE2B2',
    'green-40': '#75D693',
    'green-50': '#4ECB74',
    'green-60': '#00B15C',
    'green-70': '#298A46',
    'green-80': '#113B1E',

    // System: Red
    'red-10': '#FBEEEA',
    'red-20': '#FCE9E9',
    'red-30': '#F5BCBC',
    'red-40': '#EE9090',
    'red-50': '#963D1D',
    'red-60': '#BC1C1C',
    'red-70': '#9B1717',
    'red-80': '#6F1111',

    // System: Orange
    'orange-10': '#FDF4E6',
    'orange-20': '#F9E8CC',
    'orange-30': '#F7DDB3',
    'orange-40': '#F3D199',
    'orange-50': '#F1C580',
    'orange-60': '#EEB966',
    'orange-70': '#EBAE4D',
    'orange-80': '#E8A233',
    'orange-90': '#B95113',

    // System: Blue
    'blue-10': '#EBF2F9',
    'blue-20': '#C4D8EE',
    'blue-30': '#9CBEE2',
    'blue-40': '#75A4D7',
    'blue-50': '#4D8ACB',
    'blue-60': '#28588A',
    'blue-70': '#1D3F63',
    'blue-80': '#11263B',

    // System: Grey
    'gray-10': '#FFFFFF',
    'gray-20': '#F0F0F0',
    'gray-30': '#CFCFCF',
    'gray-40': '#BFBFBF',
    'gray-50': '#737373',
    'gray-60': '#515151',
    'gray-70': '#2D2D2D',
    'gray-80': '#131313',
  },
  /** Gradients */
  gradient: {
    primary: 'linear-gradient(90deg, #018383 0%, #014687 100%)',
    subtle: 'linear-gradient(90deg, #F5FFFB 0%, #FFFFFF 100%)',
    secondary: 'linear-gradient(90deg, #008392 0%, #00BC86 100%)',
  },

  /** Border Radius */
  borderRadius: {
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '60px',
    circle: '50%',
  },

  /** Border Width */
  borderWidth: {
    none: '0px',
    sm: '1px',
    md: '2px',
    lg: '4px',
    xl: '8px',
  },

  /** Shadows */
  shadows: {
    sm: '0px 1px 3px rgba(0, 0, 0, 0.10)',
    md: '0px 5px 10px rgba(0, 0, 0, 0.30)',
    lg: '0px 15px 25px rgba(0, 0, 0, 0.50)',
    inner: 'inset 2px -9px 20px rgba(0, 0, 0, 0.70)',
    header: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    dropdown: '0px 1px 4px rgba(0, 0, 0, 1)',
  },

  /** Spacing */
  spacing: {
    'spacing-none': '0',
    'spacing-4-xs': '2px',
    'spacing-3-xs': '4px',
    'spacing-2-xs': '8px',
    'spacing-xs': '12px',
    'spacing-s': '16px',
    'spacing-m': '24px',
    'spacing-l': '32px',
    'spacing-xl': '40px',
    'spacing-2-xl': '48px',
    'spacing-3-xl': '56px',
    'spacing-layout-l': '64px',
    'spacing-layout-xl': '96px',
    'spacing-layout-2-xl': '128px',
  },

  linearSpacing: {
    'spacing-none': '0',
    'spacing-4-xs': '0.125rem',
    'spacing-3-xs': '0.25rem',
    'spacing-2-xs': '0.5rem',
    'spacing-xs': '0.75rem',
    'spacing-s': '1rem',
    'spacing-m': '1.5rem',
    'spacing-l': '2rem',
    'spacing-xl': '2.5rem',
    'spacing-2-xl': '3rem',
    'spacing-3-xl': '3.5rem',
    'spacing-layout-l': '4rem',
    'spacing-layout-xl': '6rem',
    'spacing-layout-2-xl': '8rem',
  },

  /** Typography */
  fontFamily: {
    body: 'var(--font-nunito-sans), system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    heading:
      'var(--font-nunito-sans), system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  },
  fontSize: {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '24': '24px',
    '32': '32px',
    '40': '40px',
    '48': '48px',
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extra: 800,
  },
  lineHeight: {
    tight: '120%',
    normal: '150%',
  },

  /** Breakpoints */
  breakpoint: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },

  /** Layout */
  layout: {
    maxWidth: '1200px',
  },
} as const;
