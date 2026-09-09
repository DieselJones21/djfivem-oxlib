export const envyPalette = [
  '#F3FFFC',
  '#C9F7EF',
  '#96EDDF',
  '#5FE0CC',
  '#3DD6C0',
  '#2AD4C1',
  '#1AAF9E',
  '#148B7E',
  '#0E6860',
  '#084540',
] as const;

const tealRgb = '42, 212, 193';
const silverRgb = '201, 208, 216';

export const envy = {
  teal: '#2AD4C1',
  tealSoft: '#9AF3E8',
  tealDeep: '#0E8F84',
  cyan: '#2AD4C1',
  cyanSoft: '#9AF3E8',
  cyanDeep: '#0E8F84',
  chromeHi: '#F7FAFC',
  chromeMid: '#C9D0D8',
  chromeLo: '#7A8590',
  silver: '#C9D0D8',
  text: '#F4F7FA',
  muted: '#A7B0B8',
  danger: '#FF5C7A',
  success: '#3DFFC8',
  warning: '#FFD166',
  bg: 'rgba(4, 6, 8, 0.96)',
  bgRaised: 'rgba(8, 10, 12, 0.97)',
  item: 'rgba(10, 12, 16, 0.94)',
  itemHover: `rgba(${tealRgb}, 0.10)`,
  itemActive: `rgba(${tealRgb}, 0.16)`,
  radius: 14,
  radiusSm: 10,
  border: `1px solid rgba(${silverRgb}, 0.42)`,
  borderTeal: `1px solid rgba(${tealRgb}, 0.55)`,
  borderStrong: `1px solid rgba(${tealRgb}, 0.88)`,
  glow: `0 0 12px rgba(${tealRgb}, 0.22)`,
  glowStrong: `0 0 16px rgba(${tealRgb}, 0.38)`,
  tealFill: `rgba(${tealRgb}, 0.10)`,
  tealFillStrong: `rgba(${tealRgb}, 0.18)`,
  tealLine: `rgba(${tealRgb}, 0.45)`,
  tealLineSoft: `rgba(${tealRgb}, 0.22)`,
  tealGlow: `rgba(${tealRgb}, 0.55)`,
  silverLine: `rgba(${silverRgb}, 0.38)`,
  insetChrome:
    'inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.55)',
  panelShadow: `0 10px 24px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(${silverRgb}, 0.22)`,
  headerGradient:
    'linear-gradient(180deg, rgba(214, 222, 230, 0.20) 0%, rgba(28, 32, 38, 0.96) 34%, rgba(6, 8, 10, 0.98) 100%)',
  chromeGradient:
    'linear-gradient(180deg, #FFFFFF 0%, #E6ECF2 20%, #AAB4BE 48%, #6A737C 58%, #D5DDE5 100%)',
};

export const envyDropdown = {
  background: envy.bgRaised,
  border: envy.border,
  boxShadow: envy.panelShadow,
};

export const envyLabel = {
  color: envy.chromeMid,
  fontWeight: 600,
  letterSpacing: '0.04em' as const,
};

export const envyPanel = {
  background: 'rgba(6, 8, 10, 0.96)',
  border: envy.border,
  borderRadius: envy.radius,
  boxShadow: envy.panelShadow,
  position: 'relative' as const,
  overflow: 'hidden',
  backgroundClip: 'padding-box' as const,
};

export const envyItem = {
  background: envy.item,
  border: envy.border,
  borderRadius: envy.radiusSm,
  boxShadow: envy.insetChrome,
  transition: 'border-color 120ms ease, box-shadow 120ms ease, background 120ms ease',
};

export const envyKicker = {
  color: envy.teal,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  textShadow: `0 0 12px ${envy.tealGlow}`,
};

export const envyModalStyles = {
  modal: {
    background: envy.bgRaised,
    border: envy.border,
    borderRadius: envy.radius,
    boxShadow: envy.panelShadow,
    color: envy.text,
    overflow: 'hidden',
  },
  header: {
    background: envy.headerGradient,
    borderBottom: `1px solid ${envy.silverLine}`,
    marginBottom: 12,
    padding: '14px 16px',
  },
  title: {
    color: envy.text,
    fontWeight: 800,
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
    width: '100%',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.72)',
  },
  inner: {
    background: 'transparent',
  },
  body: {
    padding: '8px 16px 16px',
    maxHeight: 'min(70vh, 640px)',
    overflowY: 'auto' as const,
    overflowX: 'hidden' as const,
    minHeight: 0,
  },
};
