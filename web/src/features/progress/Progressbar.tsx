import React from 'react';
import { Box, createStyles, Text } from '@mantine/core';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import ScaleFade from '../../transitions/ScaleFade';
import type { ProgressbarProps } from '../../typings';
import { envy } from '../../theme/envy';

const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    height: '18%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    paddingBottom: 28,
    pointerEvents: 'none',
  },
  container: {
    width: 420,
    padding: '10px 4px 8px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: '0 4px',
  },
  label: {
    maxWidth: 320,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: '0.03em',
    color: envy.text,
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
  },
  percent: {
    color: envy.cyan,
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: '0.08em',
    textShadow: `0 0 10px ${envy.tealGlow}`,
  },
  track: {
    width: '100%',
    height: 10,
    borderRadius: 999,
    background: 'rgba(12, 16, 22, 0.92)',
    border: envy.border,
    overflow: 'hidden',
    boxShadow: envy.insetChrome,
  },
  bar: {
    height: '100%',
    background: `linear-gradient(90deg, ${envy.cyanDeep}, ${envy.cyanSoft})`,
    boxShadow: `0 0 16px ${envy.tealGlow}`,
    borderRadius: 999,
  },
}));

const Progressbar: React.FC = () => {
  const { classes } = useStyles();
  const [visible, setVisible] = React.useState(false);
  const [label, setLabel] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [percent, setPercent] = React.useState(0);

  useNuiEvent('progressCancel', () => setVisible(false));

  useNuiEvent<ProgressbarProps>('progress', (data) => {
    setVisible(true);
    setLabel(data.label);
    setDuration(data.duration);
    setPercent(0);
  });

  React.useEffect(() => {
    if (!visible || !duration) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(100, ((now - start) / duration) * 100);
      setPercent(Math.floor(next));
      if (next < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, duration]);

  return (
    <>
      <Box className={classes.wrapper}>
        <ScaleFade visible={visible} onExitComplete={() => fetchNui('progressComplete')}>
          <Box className={classes.container}>
            <Box className={classes.meta}>
              <Text className={classes.label}>{label}</Text>
              <Text className={classes.percent}>{percent}%</Text>
            </Box>
            <Box className={classes.track}>
              <Box
                className={classes.bar}
                onAnimationEnd={() => setVisible(false)}
                sx={{
                  animation: 'progress-bar linear',
                  animationDuration: `${duration}ms`,
                }}
              />
            </Box>
          </Box>
        </ScaleFade>
      </Box>
    </>
  );
};

export default Progressbar;
