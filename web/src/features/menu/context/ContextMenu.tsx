import { useNuiEvent } from '../../../hooks/useNuiEvent';
import { Box, createStyles, Flex, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ContextMenuProps } from '../../../typings';
import ContextButton from './components/ContextButton';
import { fetchNui } from '../../../utils/fetchNui';
import ReactMarkdown from 'react-markdown';
import HeaderButton from './components/HeaderButton';
import ScaleFade from '../../../transitions/ScaleFade';
import MarkdownComponents from '../../../config/MarkdownComponents';
import { envy, envyKicker, envyPanel } from '../../../theme/envy';

const openMenu = (id: string | undefined) => {
  fetchNui<ContextMenuProps>('openContext', { id: id, back: true });
};

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    top: '8%',
    right: '2%',
    width: 340,
    height: 580,
  },
  panel: {
    ...envyPanel,
    padding: 10,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 8,
    padding: '8px 8px 12px',
    background: envy.headerGradient,
    borderRadius: envy.radiusSm,
    border: '1px solid rgba(0, 229, 255, 0.2)',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 0,
      height: 2,
      background: `linear-gradient(90deg, transparent, ${envy.cyan}, transparent)`,
      boxShadow: '0 0 12px rgba(0, 229, 255, 0.7)',
    },
  },
  titleBlock: {
    flex: 1,
    minWidth: 0,
  },
  kickerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 4,
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
  titleText: {
    color: envy.text,
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    lineHeight: 1.15,
  },
  countPill: {
    border: `1px solid ${envy.cyan}`,
    color: envy.cyan,
    borderRadius: 999,
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: '0.12em',
    padding: '4px 8px',
    background: 'rgba(0, 229, 255, 0.08)',
    boxShadow: envy.glow,
    whiteSpace: 'nowrap',
  },
  buttonsContainer: {
    flex: 1,
    overflowY: 'scroll',
  },
  buttonsFlexWrapper: {
    gap: 8,
  },
}));

const ContextMenu: React.FC = () => {
  const { classes } = useStyles();
  const [visible, setVisible] = useState(false);
  const [contextMenu, setContextMenu] = useState<ContextMenuProps>({
    title: '',
    options: { '': { description: '', metadata: [] } },
  });

  const closeContext = () => {
    if (contextMenu.canClose === false) return;
    setVisible(false);
    fetchNui('closeContext');
  };

  // Hides the context menu on ESC
  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (['Escape'].includes(e.code)) closeContext();
    };

    window.addEventListener('keydown', keyHandler);

    return () => window.removeEventListener('keydown', keyHandler);
  }, [visible]);

  useNuiEvent('hideContext', () => setVisible(false));

  useNuiEvent<ContextMenuProps>('showContext', async (data) => {
    if (visible) {
      setVisible(false);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setContextMenu(data);
    setVisible(true);
  });

  const itemCount = Array.isArray(contextMenu.options)
    ? contextMenu.options.length
    : Object.keys(contextMenu.options || {}).length;

  return (
    <Box className={classes.container}>
      <ScaleFade visible={visible}>
        <Box className={classes.panel}>
          <Flex className={classes.header}>
            {contextMenu.menu && (
              <HeaderButton icon="chevron-left" iconSize={16} handleClick={() => openMenu(contextMenu.menu)} />
            )}
            <Box className={classes.titleBlock}>
              <Box className={classes.kickerRow}>
                <Box className={classes.brand}>
                  <Box className={classes.crown} />
                  <Text className={classes.kicker}>Context menu</Text>
                </Box>
                <Text className={classes.countPill}>{itemCount} ITEMS</Text>
              </Box>
              <Text className={classes.titleText}>
                <ReactMarkdown components={MarkdownComponents}>{contextMenu.title}</ReactMarkdown>
              </Text>
            </Box>
            <HeaderButton icon="xmark" canClose={contextMenu.canClose} iconSize={18} handleClick={closeContext} />
          </Flex>
          <Box className={classes.buttonsContainer}>
            <Stack className={classes.buttonsFlexWrapper}>
              {Object.entries(contextMenu.options).map((option, index) => (
                <ContextButton option={option} key={`context-item-${index}`} />
              ))}
            </Stack>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default ContextMenu;
