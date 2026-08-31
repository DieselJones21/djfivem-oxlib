import React from 'react';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { Box, createStyles, Group } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import ScaleFade from '../../transitions/ScaleFade';
import remarkGfm from 'remark-gfm';
import type { TextUiPosition, TextUiProps } from '../../typings';
import MarkdownComponents from '../../config/MarkdownComponents';
import LibIcon from '../../components/LibIcon';
import { envy, envyItem } from '../../theme/envy';

const useStyles = createStyles((_theme, params: { position?: TextUiPosition }) => ({
  wrapper: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems:
      params.position === 'top-center' ? 'baseline' : params.position === 'bottom-center' ? 'flex-end' : 'center',
    justifyContent:
      params.position === 'right-center' ? 'flex-end' : params.position === 'left-center' ? 'flex-start' : 'center',
    pointerEvents: 'none',
  },
  container: {
    fontSize: 15,
    padding: '10px 14px',
    margin: 8,
    marginTop: params.position === 'top-center' ? 24 : 8,
    ...envyItem,
    background: envy.bgRaised,
    color: envy.text,
    fontFamily: 'Roboto',
    boxShadow: envy.panelShadow,
    maxWidth: 420,
    pointerEvents: 'auto',
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${envy.cyan}`,
    color: envy.cyan,
    background: 'rgba(0, 229, 255, 0.08)',
    boxShadow: envy.glow,
    flexShrink: 0,
  },
  body: {
    color: envy.text,
    lineHeight: 1.4,
  },
}));

const TextUI: React.FC = () => {
  const [data, setData] = React.useState<TextUiProps>({
    text: '',
    position: 'right-center',
  });
  const [visible, setVisible] = React.useState(false);
  const { classes } = useStyles({ position: data.position });

  useNuiEvent<TextUiProps>('textUi', (data) => {
    if (!data.position) data.position = 'right-center'; // Default right position
    setData(data);
    setVisible(true);
  });

  useNuiEvent('textUiHide', () => setVisible(false));

  return (
    <>
      <Box className={classes.wrapper}>
        <ScaleFade visible={visible}>
          <Box style={data.style} className={classes.container}>
            <Group spacing={12} noWrap>
              {data.icon && (
                <Box className={classes.iconWrap}>
                  <LibIcon
                    icon={data.icon}
                    fixedWidth
                    size="lg"
                    animation={data.iconAnimation}
                    style={{
                      color: data.iconColor || envy.cyan,
                      alignSelf: !data.alignIcon || data.alignIcon === 'center' ? 'center' : 'start',
                    }}
                  />
                </Box>
              )}
              <Box className={classes.body}>
                <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
                  {data.text}
                </ReactMarkdown>
              </Box>
            </Group>
          </Box>
        </ScaleFade>
      </Box>
    </>
  );
};

export default TextUI;
