import { Button, createStyles } from '@mantine/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LibIcon from '../../../../components/LibIcon';
import { envy } from '../../../../theme/envy';

interface Props {
  icon: IconProp;
  canClose?: boolean;
  iconSize: number;
  handleClick: () => void;
}

const useStyles = createStyles((_theme, params: { canClose?: boolean }) => ({
  button: {
    borderRadius: 999,
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    height: 34,
    width: 34,
    minWidth: 34,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 0,
    background: envy.tealFill,
    border: `1px solid ${envy.silver}`,
    boxShadow: 'none',
    '&:hover': {
      background: envy.itemHover,
    },
  },
  root: {
    border: `1px solid ${envy.silver}`,
  },
  label: {
    color: params.canClose === false ? envy.muted : envy.cyan,
  },
}));

const HeaderButton: React.FC<Props> = ({ icon, canClose, iconSize, handleClick }) => {
  const { classes } = useStyles({ canClose });

  return (
    <Button
      variant="default"
      className={classes.button}
      classNames={{ label: classes.label, root: classes.root }}
      disabled={canClose === false}
      onClick={handleClick}
    >
      <LibIcon icon={icon} fontSize={iconSize} fixedWidth />
    </Button>
  );
};

export default HeaderButton;
