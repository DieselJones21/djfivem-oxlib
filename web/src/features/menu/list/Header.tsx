import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';
import { envy, envyKicker } from '../../../theme/envy';

const useStyles = createStyles(() => ({
  container: {
    width: 384,
    minHeight: 74,
    padding: '12px 16px 14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
    background: envy.headerGradient,
    borderBottom: `1px solid ${envy.silverLine}`,
    borderTopLeftRadius: envy.radius,
    borderTopRightRadius: envy.radius,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 0,
      height: 2,
      background: `linear-gradient(90deg, transparent, ${envy.cyan}, transparent)`,
      boxShadow: `0 0 12px ${envy.tealGlow}`,
    },
  },
  kickerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  crown: {
    width: 10,
    height: 10,
    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    background: envy.chromeGradient,
    boxShadow: `0 0 8px ${envy.cyan}`,
    flexShrink: 0,
  },
  kicker: {
    ...envyKicker,
  },
  heading: {
    fontSize: 22,
    lineHeight: 1.15,
    fontWeight: 800,
    color: envy.text,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
  },
  badge: {
    minWidth: 34,
    height: 34,
    padding: '0 8px',
    borderRadius: 999,
    border: `1px solid ${envy.silver}`,
    color: envy.teal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700,
    boxShadow: envy.glow,
    background: envy.tealFill,
  },
}));

const Header: React.FC<{ title: string; current?: number; total?: number }> = ({ title, current, total }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.kickerRow}>
        <Box className={classes.brand}>
          <Box className={classes.crown} />
          <Text className={classes.kicker}>Selection menu</Text>
        </Box>
        {total != null && current != null && (
          <Box className={classes.badge}>
            {current}/{total}
          </Box>
        )}
      </Box>
      <Text className={classes.heading}>{title}</Text>
    </Box>
  );
};

export default React.memo(Header);
