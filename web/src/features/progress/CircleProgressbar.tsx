import React from 'react';
import { Box, createStyles, keyframes, RingProgress, Stack, Text, useMantineTheme } from '@mantine/core';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import ScaleFade from '../../transitions/ScaleFade';
import type { CircleProgressbarProps } from '../../typings';
import { envy, envyKicker } from '../../theme/envy';

const progressCircle = keyframes({
  '0%': { strokeDasharray: `0, ${33.5 * 2 * Math.PI}` },
  '100%': { strokeDasharray: `${33.5 * 2 * Math.PI}, 0` },
});

const useStyles = createStyles((_theme, params: { position: 'middle' | 'bottom'; duration: number }) => ({
  container: {
    width: '100%',
    height: params.position === 'middle' ? '100%' : '20%',
    bottom: 0,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  plate: {
    width: 118,
    height: 118,
    borderRadius: '50%',
    background: envy.bgRaised,
    border: envy.border,
    boxShadow: `${envy.panelShadow}, ${envy.insetChrome}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    filter: 'drop-shadow(0 0 12px rgba(0, 229, 255, 0.45))',
    '> svg > circle:nth-child(1)': {
      stroke: 'rgba(197, 205, 214, 0.22)',
    },
    '> svg > circle:nth-child(2)': {
      transition: 'none',
      animation: `${progressCircle} linear forwards`,
      animationDuration: `${params.duration}ms`,
      stroke: envy.cyan,
    },
  },
  value: {
    textAlign: 'center',
    fontFamily: 'Roboto Mono',
    textShadow: '0 0 12px rgba(0, 229, 255, 0.55)',
    color: envy.cyan,
    fontWeight: 800,
  },
  kicker: {
    ...envyKicker,
    textAlign: 'center',
    marginTop: 10,
  },
  label: {
    textAlign: 'center',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
    color: envy.text,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 700,
  },
  wrapper: {
    marginTop: params.position === 'middle' ? 25 : undefined,
    alignItems: 'center',
  },
}));

const CircleProgressbar: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [progressDuration, setProgressDuration] = React.useState(0);
  const [position, setPosition] = React.useState<'middle' | 'bottom'>('middle');
  const [value, setValue] = React.useState(0);
  const [label, setLabel] = React.useState('');
  const theme = useMantineTheme();
  const { classes } = useStyles({ position, duration: progressDuration });

  useNuiEvent('progressCancel', () => {
    setValue(99);
    setVisible(false);
  });

  useNuiEvent<CircleProgressbarProps>('circleProgress', (data) => {
    if (visible) return;
    setVisible(true);
    setValue(0);
    setLabel(data.label || '');
    setProgressDuration(data.duration);
    setPosition(data.position || 'middle');
    const onePercent = data.duration * 0.01;
    const updateProgress = setInterval(() => {
      setValue((previousValue) => {
        const newValue = previousValue + 1;
        newValue >= 100 && clearInterval(updateProgress);
        return newValue;
      });
    }, onePercent);
  });

  return (
    <>
      <Stack spacing={0} className={classes.container}>
        <ScaleFade visible={visible} onExitComplete={() => fetchNui('progressComplete')}>
          <Stack spacing={0} align="center" className={classes.wrapper}>
            <Box className={classes.plate}>
              <RingProgress
                size={96}
                thickness={8}
                sections={[{ value: 0, color: theme.primaryColor }]}
                onAnimationEnd={() => setVisible(false)}
                className={classes.progress}
                label={<Text className={classes.value}>{value}%</Text>}
              />
            </Box>
            <Text className={classes.kicker}>Progress</Text>
            {label && <Text className={classes.label}>{label}</Text>}
          </Stack>
        </ScaleFade>
      </Stack>
    </>
  );
};

export default CircleProgressbar;
