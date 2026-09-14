import { Box, createStyles } from '@mantine/core';

export const the305LogoSrc = './images/the-305-logo.png';

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

const BrandMark: React.FC<{ height?: number; maxWidth?: number }> = ({ height = 44, maxWidth = 140 }) => {
  const { classes } = useStyles();

  return (
    <Box
      component="img"
      src={the305LogoSrc}
      alt="The 305"
      className={classes.mark}
      sx={{ height, maxWidth }}
    />
  );
};

export default BrandMark;
