import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';
import { envy, envyKicker } from '../../../theme/envy';
import BrandMark from '../../../components/BrandMark';

const useStyles = createStyles(() => ({
  container: {
    width: 384,
    minHeight: 86,
    padding: '10px 14px 12px',
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
      height: 1,
      background: `linear-gradient(90deg, transparent, ${envy.silver}, transparent)`,
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
    gap: 10,
    minWidth: 0,
  },
  kicker: {
    ...envyKicker,
  },
  heading: {
    fontSize: 20,
    lineHeight: 1.15,
    fontWeight: 800,
    fontStyle: 'italic',
    color: envy.chromeHi,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
  },
  badge: {
    minWidth: 34,
    height: 34,
    padding: '0 8px',
    borderRadius: 999,
    border: `1px solid ${envy.silver}`,
    color: envy.chromeHi,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700,
    background: 'rgba(255, 255, 255, 0.06)',
  },
}));

const Header: React.FC<{ title: string; current?: number; total?: number }> = ({ title, current, total }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.kickerRow}>
        <Box className={classes.brand}>
          <BrandMark height={32} maxWidth={108} />
          <Text className={classes.kicker}>Roleplay</Text>
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
