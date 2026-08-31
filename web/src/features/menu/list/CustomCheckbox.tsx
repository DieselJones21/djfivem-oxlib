import { Checkbox, createStyles } from '@mantine/core';
import { envy } from '../../../theme/envy';

const useStyles = createStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(6, 8, 12, 0.9)',
    border: `2px solid ${envy.cyan}`,
    borderRadius: 6,
    '&:checked': {
      backgroundColor: envy.cyan,
      borderColor: envy.cyan,
      boxShadow: envy.glow,
    },
  },
  inner: {
    '> svg > path': {
      fill: '#061014',
    },
  },
}));

const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  const { classes } = useStyles();
  return (
    <Checkbox
      checked={checked}
      size="md"
      classNames={{ root: classes.root, input: classes.input, inner: classes.inner }}
    />
  );
};

export default CustomCheckbox;
