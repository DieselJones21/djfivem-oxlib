import { Box, createStyles } from '@mantine/core';

export const rebelLogoSrc = './images/rebel-logo.png';

const useStyles = createStyles(() => ({
  mark: {
    display: 'block',
    height: 'auto',
    objectFit: 'contain',
    flexShrink: 0,
    pointerEvents: 'none',
    userSelect: 'none',
  },
}));

const BrandMark: React.FC<{ height?: number; maxWidth?: number }> = ({ height = 34, maxWidth = 120 }) => {
  const { classes } = useStyles();

  return (
    <Box
      component="img"
      src={rebelLogoSrc}
      alt="Rebel Roleplay"
      className={classes.mark}
      sx={{ height, maxWidth }}
    />
  );
};

export default BrandMark;
