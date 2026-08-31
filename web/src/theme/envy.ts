export const envyPalette = [
  '#E7FFFF',
  '#B4FBFF',
  '#7CF5FF',
  '#3DEAFF',
  '#12E0FF',
  '#00D4F0',
  '#00C0DC',
  '#00A4BC',
  '#008498',
  '#006070',
] as const;

export const envy = {
  cyan: '#00E5FF',
  cyanSoft: '#7AFFF8',
  cyanDeep: '#00A8BE',
  chromeHi: '#F4F7FA',
  chromeMid: '#C5CDD6',
  chromeLo: '#7A8590',
  text: '#F4F7FA',
  muted: '#9AA8B3',
  danger: '#FF5C7A',
  success: '#3DFFC8',
  warning: '#FFD166',
  bg: 'rgba(6, 8, 12, 0.94)',
  bgRaised: 'rgba(10, 14, 20, 0.96)',
  item: 'rgba(12, 16, 22, 0.92)',
  itemHover: 'rgba(0, 229, 255, 0.10)',
  itemActive: 'rgba(0, 229, 255, 0.16)',
  radius: 14,
  radiusSm: 10,
  border: '1px solid rgba(0, 229, 255, 0.42)',
  borderStrong: '1px solid rgba(0, 229, 255, 0.78)',
  glow: '0 0 22px rgba(0, 229, 255, 0.22)',
  glowStrong: '0 0 28px rgba(0, 229, 255, 0.42)',
  insetChrome:
    'inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 -1px 0 rgba(0, 0, 0, 0.45)',
  panelShadow:
    '0 18px 48px rgba(0, 0, 0, 0.55), 0 0 24px rgba(0, 229, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
  headerGradient:
    'linear-gradient(180deg, rgba(36, 44, 54, 0.96) 0%, rgba(10, 13, 18, 0.98) 100%)',
  chromeGradient:
    'linear-gradient(180deg, #F7FAFC 0%, #C5CDD6 42%, #8A949E 58%, #E8EEF4 100%)',
};

export const envyPanel = {
  background: envy.bg,
  border: envy.border,
  borderRadius: envy.radius,
  boxShadow: envy.panelShadow,
  position: 'relative' as const,
  overflow: 'hidden',
};

export const envyItem = {
  background: envy.item,
  border: envy.border,
  borderRadius: envy.radiusSm,
  boxShadow: envy.insetChrome,
  transition: 'border-color 120ms ease, box-shadow 120ms ease, background 120ms ease',
};

export const envyKicker = {
  color: envy.cyan,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  textShadow: '0 0 12px rgba(0, 229, 255, 0.55)',
};
