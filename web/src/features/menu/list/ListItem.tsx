import { Box, createStyles, Group, Progress, Stack, Text } from '@mantine/core';
import React, { forwardRef } from 'react';
import CustomCheckbox from './CustomCheckbox';
import type { MenuItem } from '../../../typings';
import { isIconUrl } from '../../../utils/isIconUrl';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import LibIcon from '../../../components/LibIcon';
import { envy, envyItem } from '../../../theme/envy';

interface Props {
  item: MenuItem;
  index: number;
  scrollIndex: number;
  checked: boolean;
}

const useStyles = createStyles((_theme, params: { iconColor?: string }) => ({
  buttonContainer: {
    ...envyItem,
    padding: 2,
    height: 64,
    scrollMargin: 8,
    '&:focus': {
      backgroundColor: envy.itemActive,
      outline: 'none',
      border: envy.borderStrong,
      boxShadow: `${envy.glowStrong}, ${envy.insetChrome}`,
    },
  },
  iconImage: {
    maxWidth: 32,
  },
  buttonWrapper: {
    paddingLeft: 8,
    paddingRight: 12,
    height: '100%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    height: 38,
    borderRadius: 8,
    border: `1px solid rgba(0, 229, 255, 0.35)`,
    background: 'rgba(0, 229, 255, 0.08)',
    boxShadow: 'inset 0 0 10px rgba(0, 229, 255, 0.12)',
  },
  icon: {
    fontSize: 18,
    color: params.iconColor || envy.cyan,
    filter: 'drop-shadow(0 0 6px rgba(0, 229, 255, 0.55))',
  },
  label: {
    color: envy.text,
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.04em',
    verticalAlign: 'middle',
  },
  valueLabel: {
    color: envy.muted,
    fontSize: 12,
  },
  chevronIcon: {
    fontSize: 14,
    color: envy.cyan,
  },
  scrollIndexValue: {
    color: envy.cyan,
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 700,
    minWidth: 36,
    textAlign: 'center',
  },
  progressStack: {
    width: '100%',
    marginRight: 5,
  },
  progressLabel: {
    verticalAlign: 'middle',
    marginBottom: 6,
    color: envy.text,
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: 13,
    letterSpacing: '0.04em',
  },
}));

const ListItem = forwardRef<Array<HTMLDivElement | null>, Props>(({ item, index, scrollIndex, checked }, ref) => {
  const { classes } = useStyles({ iconColor: item.iconColor });

  return (
    <Box
      tabIndex={index}
      className={classes.buttonContainer}
      key={`item-${index}`}
      ref={(element: HTMLDivElement) => {
        if (ref)
          // @ts-ignore i cba
          return (ref.current = [...ref.current, element]);
      }}
    >
      <Group spacing={15} noWrap className={classes.buttonWrapper}>
        {item.icon && (
          <Box className={classes.iconContainer}>
            {typeof item.icon === 'string' && isIconUrl(item.icon) ? (
              <img src={item.icon} alt="Missing image" className={classes.iconImage} />
            ) : (
              <LibIcon
                icon={item.icon as IconProp}
                className={classes.icon}
                fixedWidth
                animation={item.iconAnimation}
              />
            )}
          </Box>
        )}
        {Array.isArray(item.values) ? (
          <Group position="apart" w="100%">
            <Stack spacing={0} justify="space-between">
              <Text className={classes.label}>{item.label}</Text>
              <Text className={classes.valueLabel}>
                {typeof item.values[scrollIndex] === 'object'
                  ? // @ts-ignore for some reason even checking the type TS still thinks it's a string
                    item.values[scrollIndex].label
                  : item.values[scrollIndex]}
              </Text>
            </Stack>
            <Group spacing={1} position="center">
              <LibIcon icon="chevron-left" className={classes.chevronIcon} />
              <Text className={classes.scrollIndexValue}>
                {scrollIndex + 1}/{item.values.length}
              </Text>
              <LibIcon icon="chevron-right" className={classes.chevronIcon} />
            </Group>
          </Group>
        ) : item.checked !== undefined ? (
          <Group position="apart" w="100%">
            <Text className={classes.label}>{item.label}</Text>
            <CustomCheckbox checked={checked}></CustomCheckbox>
          </Group>
        ) : item.progress !== undefined ? (
          <Stack className={classes.progressStack} spacing={0}>
            <Text className={classes.progressLabel}>{item.label}</Text>
            <Progress
              value={item.progress}
              color={item.colorScheme || 'envy'}
              size="sm"
              radius="xl"
              styles={() => ({
                root: { backgroundColor: 'rgba(255, 255, 255, 0.08)', height: 7 },
              })}
            />
          </Stack>
        ) : (
          <Text className={classes.label}>{item.label}</Text>
        )}
      </Group>
    </Box>
  );
});

export default React.memo(ListItem);
