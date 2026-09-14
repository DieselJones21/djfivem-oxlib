import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';
import { envy, envyKicker } from '../../../theme/envy';
import BrandMark from '../../../components/BrandMark';
import MiamiDecor from '../../../components/MiamiDecor';

const useStyles = createStyles(() => ({
  container: {
    width: 384,
    minHeight: 102,
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
    overflow: 'hidden',
    zIndex: 1,
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
    position: 'relative',
    zIndex: 1,
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
    position: 'relative',
    zIndex: 1,
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
    position: 'relative',
    zIndex: 1,
  },
}));

const Header: React.FC<{ title: string; current?: number; total?: number }> = ({ title, current, total }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <MiamiDecor />
      <Box className={classes.kickerRow}>
        <Box className={classes.brand}>
          <BrandMark height={48} maxWidth={150} />
          <Text className={classes.kicker}>Miami</Text>
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
