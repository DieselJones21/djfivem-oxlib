import { useNuiEvent } from '../../../hooks/useNuiEvent';
import { Box, createStyles, Flex, Stack, Text } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
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

const HEADER_RESERVE = 112;

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    top: '6vh',
    right: '2vw',
    width: 360,
    maxHeight: '82vh',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  panel: {
    ...envyPanel,
    padding: 10,
    maxHeight: '82vh',
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 8,
    padding: '10px 10px 12px',
    background: envy.headerGradient,
    borderRadius: envy.radiusSm,
    border: `1px solid ${envy.silverLine}`,
    position: 'relative',
    flexShrink: 0,
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 0,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${envy.cyan}, transparent)`,
      boxShadow: `0 0 10px ${envy.tealGlow}`,
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
    width: 9,
    height: 9,
    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    background: envy.chromeGradient,
    boxShadow: `0 0 8px ${envy.cyan}`,
    flexShrink: 0,
  },
  kicker: {
    ...envyKicker,
    fontSize: 10,
  },
  titleText: {
    color: envy.text,
    fontWeight: 750,
    fontSize: 18,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    lineHeight: 1.2,
  },
  countPill: {
    border: `1px solid ${envy.silver}`,
    color: envy.teal,
    borderRadius: 999,
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: '0.12em',
    padding: '4px 8px',
    background: envy.tealFill,
    whiteSpace: 'nowrap',
  },
  listShell: {
    position: 'relative',
    flex: '1 1 auto',
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsContainer: {
    flex: '1 1 0%',
    minHeight: 0,
    maxHeight: `calc(82vh - ${HEADER_RESERVE}px)`,
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: 2,
    pointerEvents: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
  },
  buttonsFlexWrapper: {
    gap: 6,
    paddingBottom: 4,
  },
  fade: {
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    right: 10,
    height: 28,
    opacity: 0,
    transition: 'opacity 160ms ease',
    zIndex: 2,
  },
  fadeTop: {
    top: 0,
    background: 'linear-gradient(180deg, rgba(8, 10, 14, 0.92) 0%, rgba(8, 10, 14, 0) 100%)',
  },
  fadeBottom: {
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(8, 10, 14, 0) 0%, rgba(8, 10, 14, 0.92) 100%)',
  },
  fadeVisible: {
    opacity: 1,
  },
}));

const ContextMenu: React.FC = () => {
  const { classes, cx } = useStyles();
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const captureKeysRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [contextMenu, setContextMenu] = useState<ContextMenuProps>({
    title: '',
    options: { '': { description: '', metadata: [] } },
  });

  const closeContext = () => {
    if (contextMenu.canClose === false) return;
    setVisible(false);
    fetchNui('closeContext');
  };

  const syncOverflow = (node: HTMLDivElement) => {
    const top = node.scrollTop;
    const max = node.scrollHeight - node.clientHeight;
    setCanScrollUp(top > 4);
    setCanScrollDown(max > 4 && top < max - 4);
  };

  const scrollListByKey = (code: string) => {
    const node = listRef.current;
    if (!node) return false;
    if (code === 'ArrowDown') node.scrollTop += 56;
    else if (code === 'PageDown') node.scrollTop += 220;
    else if (code === 'ArrowUp') node.scrollTop -= 56;
    else if (code === 'PageUp') node.scrollTop -= 220;
    else if (code === 'Home') node.scrollTop = 0;
    else if (code === 'End') node.scrollTop = node.scrollHeight;
    else return false;
    return true;
  };

  useEffect(() => {
    if (!visible) {
      captureKeysRef.current = false;
      return;
    }

    const keyHandler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeContext();
        return;
      }
      if (!captureKeysRef.current) return;
      if (scrollListByKey(e.code)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const pointerHandler = (e: PointerEvent) => {
      const panel = panelRef.current;
      captureKeysRef.current = !!(panel && panel.contains(e.target as Node));
    };

    window.addEventListener('keydown', keyHandler, true);
    window.addEventListener('pointerdown', pointerHandler, true);

    return () => {
      window.removeEventListener('keydown', keyHandler, true);
      window.removeEventListener('pointerdown', pointerHandler, true);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      setCanScrollUp(false);
      setCanScrollDown(false);
      return;
    }

    const node = listRef.current;
    if (!node) return;

    node.scrollTop = 0;
    node.focus({ preventScroll: true });
    captureKeysRef.current = true;

    const onWheel = (event: WheelEvent) => {
      if (node.scrollHeight <= node.clientHeight) return;
      event.preventDefault();
      event.stopPropagation();
      node.scrollTop += event.deltaY;
    };

    const onScroll = () => syncOverflow(node);

    node.addEventListener('wheel', onWheel, { passive: false });
    node.addEventListener('scroll', onScroll, { passive: true });
    syncOverflow(node);

    const frame = window.requestAnimationFrame(() => syncOverflow(node));

    return () => {
      window.cancelAnimationFrame(frame);
      node.removeEventListener('wheel', onWheel);
      node.removeEventListener('scroll', onScroll);
    };
  }, [visible, contextMenu.title, contextMenu.options]);

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
      <ScaleFade visible={visible} fill>
        <Box
          ref={panelRef}
          className={classes.panel}
          onPointerDown={() => {
            captureKeysRef.current = true;
          }}
        >
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
          <Box className={classes.listShell}>
            <Box
              ref={listRef}
              tabIndex={0}
              className={`${classes.buttonsContainer} envy-scroll`}
              onMouseDown={(event) => {
                if (event.target === listRef.current) {
                  listRef.current?.focus({ preventScroll: true });
                }
              }}
            >
              <Stack className={classes.buttonsFlexWrapper}>
                {Object.entries(contextMenu.options).map((option, index) => (
                  <ContextButton option={option} key={`context-item-${index}`} />
                ))}
              </Stack>
            </Box>
            <Box className={cx(classes.fade, classes.fadeTop, canScrollUp && classes.fadeVisible)} />
            <Box className={cx(classes.fade, classes.fadeBottom, canScrollDown && classes.fadeVisible)} />
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default ContextMenu;
