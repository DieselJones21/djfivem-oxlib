export const envyPalette = [
  '#F8E8EB',
  '#EFC3C9',
  '#E08A94',
  '#D25564',
  '#C83345',
  '#C41E3A',
  '#9E1830',
  '#7A1226',
  '#560D1B',
  '#360810',
] as const;

const redRgb = '196, 30, 58';
const silverRgb = '214, 220, 226';

export const envy = {
  teal: '#C41E3A',
  tealSoft: '#E25566',
  tealDeep: '#7A1226',
  cyan: '#C41E3A',
  cyanSoft: '#E25566',
  cyanDeep: '#7A1226',
  chromeHi: '#F7FAFC',
  chromeMid: '#C9D0D8',
  chromeLo: '#7A8590',
  silver: '#D6DCE2',
  text: '#F4F7FA',
  muted: '#A7B0B8',
  danger: '#C41E3A',
  success: '#3DFFC8',
  warning: '#FFD166',
  bg: 'rgba(6, 6, 8, 0.96)',
  bgRaised: 'rgba(10, 10, 12, 0.97)',
  item: 'rgba(12, 12, 14, 0.94)',
  itemHover: `rgba(${redRgb}, 0.10)`,
  itemActive: `rgba(${redRgb}, 0.16)`,
  radius: 12,
  radiusSm: 8,
  border: `1px solid rgba(${silverRgb}, 0.5)`,
  borderTeal: `1px solid rgba(${redRgb}, 0.7)`,
  borderStrong: `1px solid rgba(${silverRgb}, 0.92)`,
  glow: `0 0 8px rgba(${redRgb}, 0.16)`,
  glowStrong: `0 0 10px rgba(${redRgb}, 0.22)`,
  tealFill: `rgba(${redRgb}, 0.10)`,
  tealFillStrong: `rgba(${redRgb}, 0.16)`,
  tealLine: `rgba(${redRgb}, 0.55)`,
  tealLineSoft: `rgba(${redRgb}, 0.28)`,
  tealGlow: `rgba(${redRgb}, 0.28)`,
  silverLine: `rgba(${silverRgb}, 0.42)`,
  insetChrome:
    'inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 -1px 0 rgba(0, 0, 0, 0.6)',
  panelShadow: `0 10px 22px rgba(0, 0, 0, 0.58), 0 0 0 1px rgba(${silverRgb}, 0.2)`,
  headerGradient:
    'linear-gradient(180deg, rgba(236, 240, 244, 0.22) 0%, rgba(28, 30, 34, 0.96) 36%, rgba(6, 6, 8, 0.98) 100%)',
  chromeGradient:
    'linear-gradient(180deg, #FFFFFF 0%, #E6ECF2 18%, #AAB4BE 48%, #6A737C 58%, #D5DDE5 100%)',
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
  background: 'rgba(6, 6, 8, 0.96)',
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
  color: envy.chromeHi,
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: '0.28em',
  fontStyle: 'italic' as const,
  textTransform: 'uppercase' as const,
  textShadow: 'none',
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
    letterSpacing: '0.08em',
    fontStyle: 'italic' as const,
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
