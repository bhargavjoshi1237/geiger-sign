import type { TCssVarsSchema } from '../types/css-vars';

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * KEEP THIS FILE IN SYNC WITH `packages/ui/styles/theme.css`.
 *
 * These are the light-mode default values for the CSS custom properties
 * defined under `:root` in the theme stylesheet, exposed here as hex strings
 * so they can be used as defaults for colour-picker UI components and other
 * places that don't render through CSS variables.
 *
 * If you change a value in `theme.css`, update it here too. There is NO
 * automated check linking the two files; they have drifted historically
 * and will drift again unless you update both.
 *
 * Computed via `colord({ h, s, l }).toHex()` — see the inline HSL comments
 * for the source-of-truth values from `theme.css`.
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
// Geiger Sign: light values from `packages/ui/styles/geiger-theme.css` (keys without a Geiger value keep upstream).
export const DEFAULT_BRAND_COLORS = {
  background: '#ffffff', //              0 0% 100%
  foreground: '#09090b', //              240 10% 3.9%
  muted: '#f4f4f5', //                   240 4.8% 95.9%
  mutedForeground: '#71717a', //         240 3.8% 46.1%
  popover: '#ffffff', //                 0 0% 100%
  popoverForeground: '#09090b', //       240 10% 3.9%
  card: '#ffffff', //                    0 0% 100%
  cardBorder: '#e4e4e7', //              240 5.9% 90%
  cardForeground: '#09090b', //          240 10% 3.9%
  fieldCard: '#f4f4f5', //               240 4.8% 95.9%
  fieldCardBorder: '#18181b', //         240 5.9% 10%
  fieldCardForeground: '#09090b', //     240 10% 3.9%
  widget: '#f7f7f7', //                  0 0% 97%
  widgetForeground: '#f2f2f2', //        0 0% 95%
  border: '#e4e4e7', //                  240 5.9% 90%
  input: '#e4e4e7', //                   240 5.9% 90%
  primary: '#18181b', //                 240 5.9% 10%
  primaryForeground: '#fafafa', //       0 0% 98%
  secondary: '#f4f4f5', //               240 4.8% 95.9%
  secondaryForeground: '#18181b', //     240 5.9% 10%
  accent: '#f4f4f5', //                  240 4.8% 95.9%
  accentForeground: '#18181b', //        240 5.9% 10%
  destructive: '#dc2626', //             0 72.2% 50.6%
  destructiveForeground: '#fafafa', //   0 0% 98%
  ring: '#a1a1aa', //                    240 5% 64.9%
  warning: '#e1cb05', //                 54 96% 45%
  envelopeEditorBackground: '#f8fafc', //210 40% 98.04%
  // `cardBorderTint` is intentionally excluded from the colour-picker UI:
  // unlike the rest of these tokens it is consumed via `rgb(var(--token))`
  // (not `hsl(...)`) and stored as raw RGB triplets in `theme.css`. It does
  // not flow through `toNativeCssVars` and is not user-customisable from the
  // branding form. `radius` is a length, not a colour, so it lives in
  // `DEFAULT_BRAND_RADIUS` below.
} as const satisfies Record<keyof Omit<TCssVarsSchema, 'radius' | 'cardBorderTint'>, string>;

export const DEFAULT_BRAND_RADIUS = '0.5rem';
