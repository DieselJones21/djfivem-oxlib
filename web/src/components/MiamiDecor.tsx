import { Box } from '@mantine/core';
import { envy } from '../theme/envy';

const Palm: React.FC<{ flip?: boolean; color: string }> = ({ flip, color }) => (
  <svg
    viewBox="0 0 72 96"
    width="100%"
    height="100%"
    aria-hidden
    style={{ transform: flip ? 'scaleX(-1)' : undefined, display: 'block' }}
  >
    <g fill={color}>
      <path d="M38.2 94c-.6-16.8-1.8-34.4 1.6-51.2.8-4 2.4-8.6 3.8-12.2.4 6.6-1.2 18.4-2.4 30.4-.8 8.4-1.6 21.2-3 33z" />
      <path d="M43.4 29.2C28 24.4 12.6 32.6 8 44.8c12.2-7.4 24.8-10.6 35.4-15.6z" />
      <path d="M43.2 27.6C32.4 16.2 24.8 6.4 28.6 2.2c6.6 8.8 11.8 16.8 14.6 25.4z" />
      <path d="M44.2 27.2c2.4-14.6 8.2-24.8 16.4-26.6-1.8 10.4-6.2 19.2-16.4 26.6z" />
      <path d="M44.6 29.6c14.8-2.2 26.4 3.6 31.2 14.2-11.6-6-21.8-9.4-31.2-14.2z" />
      <path d="M43.8 32.2c12.6 6.4 18.8 16.8 18.2 27.8-10.4-9.2-15.8-16.6-18.2-27.8z" />
      <path d="M41.6 31.4C29.4 38 20.2 48.6 18.8 60.4c8.8-10.2 16.4-18.4 22.8-29z" />
    </g>
  </svg>
);

const Wave: React.FC = () => (
  <svg viewBox="0 0 360 18" width="100%" height="18" preserveAspectRatio="none" aria-hidden>
    <path
      d="M0 12c28-8 48 6 76 0s44-10 72-2 40 10 68 2 48-12 76-4 40 10 68 2v10H0z"
      fill={envy.teal}
      opacity="0.35"
    />
    <path
      d="M0 15c32-6 52 4 80 0s40-8 72 0 48 8 72 0 44-10 72-2 40 8 64 2v5H0z"
      fill={envy.cyan}
      opacity="0.28"
    />
  </svg>
);

const MiamiDecor: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <Box
    aria-hidden
    sx={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0,
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: compact ? 4 : 6,
        right: compact ? 10 : 14,
        width: compact ? 18 : 22,
        height: compact ? 18 : 22,
        borderRadius: 999,
        background: 'radial-gradient(circle at 35% 35%, #FFE8A8, #FF8A5C 62%, transparent 70%)',
        opacity: 0.7,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        left: compact ? -6 : -4,
        bottom: 8,
        width: compact ? 54 : 68,
        height: compact ? 72 : 90,
        color: envy.cyan,
        opacity: 0.22,
      }}
    >
      <Palm color={envy.cyan} />
    </Box>
    <Box
      sx={{
        position: 'absolute',
        right: compact ? -8 : -6,
        bottom: 8,
        width: compact ? 48 : 62,
        height: compact ? 66 : 82,
        opacity: 0.2,
      }}
    >
      <Palm flip color={envy.teal} />
    </Box>
    <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 14, opacity: 0.9 }}>
      <Wave />
    </Box>
  </Box>
);

export default MiamiDecor;
