export const envyPalette = [
  '#FFE8F4',
  '#FFB8DC',
  '#FF7AC0',
  '#FF4DA6',
  '#FF2D8A',
  '#E91E8C',
  '#C4186A',
  '#9A1254',
  '#6E0D3C',
  '#3A0820',
] as const;

const pinkRgb = '233, 30, 140';
const aquaRgb = '46, 230, 214';
const silverRgb = '214, 228, 236';

export const envy = {
  teal: '#2EE6D6',
  tealSoft: '#7AF3E8',
  tealDeep: '#0E8F88',
  cyan: '#E91E8C',
  cyanSoft: '#FF4DA6',
  cyanDeep: '#C4186A',
  chromeHi: '#F4FBFF',
  chromeMid: '#C5D8E4',
  chromeLo: '#7A93A4',
  silver: '#D6E4EC',
  text: '#F4FBFF',
  muted: '#9BB0BE',
  danger: '#E91E8C',
  success: '#2EE6D6',
  warning: '#FFD166',
  bg: 'rgba(4, 8, 16, 0.96)',
  bgRaised: 'rgba(8, 12, 22, 0.97)',
  item: 'rgba(10, 16, 28, 0.94)',
  itemHover: `rgba(${pinkRgb}, 0.12)`,
  itemActive: `rgba(${pinkRgb}, 0.18)`,
  radius: 12,
  radiusSm: 8,
  border: `1px solid rgba(${silverRgb}, 0.42)`,
  borderTeal: `1px solid rgba(${aquaRgb}, 0.55)`,
  borderStrong: `1px solid rgba(${pinkRgb}, 0.7)`,
  glow: `0 0 8px rgba(${pinkRgb}, 0.16)`,
  glowStrong: `0 0 10px rgba(${pinkRgb}, 0.22)`,
  tealFill: `rgba(${aquaRgb}, 0.10)`,
  tealFillStrong: `rgba(${aquaRgb}, 0.16)`,
  tealLine: `rgba(${aquaRgb}, 0.55)`,
  tealLineSoft: `rgba(${aquaRgb}, 0.28)`,
  tealGlow: `rgba(${aquaRgb}, 0.28)`,
  silverLine: `rgba(${silverRgb}, 0.42)`,
  insetChrome:
    'inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -1px 0 rgba(0, 0, 0, 0.55)',
  panelShadow: `0 10px 22px rgba(0, 0, 0, 0.58), 0 0 0 1px rgba(${silverRgb}, 0.16)`,
  headerGradient:
    'linear-gradient(180deg, rgba(255, 90, 160, 0.28) 0%, rgba(46, 230, 214, 0.10) 26%, rgba(10, 16, 32, 0.96) 58%, rgba(4, 8, 16, 0.98) 100%)',
  chromeGradient:
    'linear-gradient(180deg, #FFFFFF 0%, #E6F4FC 18%, #A8C0D0 48%, #6A808C 58%, #D5E8F0 100%)',
  beachGradient: `linear-gradient(90deg, ${'#C4186A'}, ${'#FF2D8A'} 48%, ${'#2EE6D6'})`,
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

const palmMark = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 96"><g fill="%23E91E8C"><path d="M38.2 94c-.6-16.8-1.8-34.4 1.6-51.2.8-4 2.4-8.6 3.8-12.2.4 6.6-1.2 18.4-2.4 30.4-.8 8.4-1.6 21.2-3 33z"/><path d="M43.4 29.2C28 24.4 12.6 32.6 8 44.8c12.2-7.4 24.8-10.6 35.4-15.6z"/><path d="M43.2 27.6C32.4 16.2 24.8 6.4 28.6 2.2c6.6 8.8 11.8 16.8 14.6 25.4z"/><path d="M44.2 27.2c2.4-14.6 8.2-24.8 16.4-26.6-1.8 10.4-6.2 19.2-16.4 26.6z"/><path d="M44.6 29.6c14.8-2.2 26.4 3.6 31.2 14.2-11.6-6-21.8-9.4-31.2-14.2z"/><path d="M43.8 32.2c12.6 6.4 18.8 16.8 18.2 27.8-10.4-9.2-15.8-16.6-18.2-27.8z"/><path d="M41.6 31.4C29.4 38 20.2 48.6 18.8 60.4c8.8-10.2 16.4-18.4 22.8-29z"/></g></svg>`
);

export const envyPanel = {
  backgroundColor: 'rgba(4, 8, 16, 0.96)',
  backgroundImage: `url("data:image/svg+xml,${palmMark}"), url("data:image/svg+xml,${palmMark}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left -14px bottom -6px, right -18px bottom -8px',
  backgroundSize: '78px 104px, 68px 92px',
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
  color: envy.tealSoft,
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: '0.28em',
  fontStyle: 'italic' as const,
  textTransform: 'uppercase' as const,
  textShadow: 'none',
};

export const envyHeaderSurface = {
  backgroundImage: `url("data:image/svg+xml,${palmMark}"), url("data:image/svg+xml,${palmMark}"), ${envy.headerGradient}`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left -12px bottom 0, right -14px bottom 0, 0 0',
  backgroundSize: '58px 78px, 52px 70px, 100% 100%',
  overflow: 'hidden' as const,
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
    ...envyHeaderSurface,
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
