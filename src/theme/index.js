import {darken, transparentize} from 'polished';

/**
 * This module holds essential theme colors to create
 * unique branding style for my application.
 *
 * If we need, we can create multi-theme application and switch
 * theme dynamically without any server bulding. Just using JSS and React
 */
const base = {
  brand: '#ff5959',
  light: '#fff',
  dark: '#000',
};

export default {
  brand: base.brand,
  success: '#69b32d',
  danger: '#f1462f',
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: 14,
    lineHeight: 1.2,
  },
  common: {
    card: darken(0.04, base.light),
    widget: base.light,
    border: darken(0.1, base.light),
    radius: 3,
  },
  icon: {
    default: transparentize(0.5, base.dark),
    inverse: transparentize(0.1, base.light),
  },
  loader: {
    foreground: transparentize(0.4, base.dark),
    background: transparentize(0.8, base.dark),
  },
  text: {
    default: transparentize(0.15, base.dark),
    highlight: base.brand,
    muted: transparentize(0.5, base.dark),
  },
  shadow: {
    level1: '0 0 2px 0 rgba(0,0,0,0.10), 0 2px 2px 0 rgba(0,0,0,0.20)',
    level2: '0 0 4px 0 rgba(0,0,0,0.10), 0 4px 4px 0 rgba(0,0,0,0.20)',
    level3: '0 0 8px 0 rgba(0,0,0,0.10), 0 8px 8px 0 rgba(0,0,0,0.20)',
    level4: '0 0 16px 0 rgba(0,0,0,0.10), 0 16px 16px 0 rgba(0,0,0,0.20)',
    level5: '0 0 24px 0 rgba(0,0,0,0.10), 0 24px 24px 0 rgba(0,0,0,0.20)',
  },
  button: {
    color: transparentize(0.3, base.dark),
    background: darken(0.08, base.light),
    hoverBackground: darken(0.12, base.light),
    icon: transparentize(0.5, base.dark),
  },
};
