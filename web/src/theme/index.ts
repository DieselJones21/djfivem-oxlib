import { MantineThemeOverride, Tuple } from '@mantine/core';
import { envy, envyPalette } from './envy';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'envy',
  primaryShade: 5,
  defaultRadius: 'md',
  colors: {
    envy: [...envyPalette] as unknown as Tuple<string, 10>,
  },
  shadows: {
    sm: '0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px rgba(0, 229, 255, 0.12)',
    md: envy.panelShadow,
  },
  components: {
    Button: {
      styles: (_theme, params: { variant?: string }) => ({
        root: {
          fontWeight: 700,
          letterSpacing: '0.04em',
          transition: 'box-shadow 120ms ease, border-color 120ms ease, background 120ms ease',
          ...(params.variant === 'default'
            ? {
                border: envy.border,
                background: envy.item,
                color: envy.text,
                '&:hover': {
                  background: envy.itemHover,
                  borderColor: envy.cyan,
                  boxShadow: envy.glow,
                },
              }
            : {
                '&:hover': {
                  boxShadow: envy.glow,
                },
              }),
        },
      }),
    },
    Modal: {
      styles: {
        modal: {
          background: envy.bgRaised,
          border: envy.border,
          borderRadius: envy.radius,
          boxShadow: envy.panelShadow,
          color: envy.text,
        },
        header: {
          background: envy.headerGradient,
          borderBottom: `1px solid rgba(0, 229, 255, 0.28)`,
          marginBottom: 12,
          padding: '14px 16px',
        },
        title: {
          color: envy.text,
          fontWeight: 800,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          width: '100%',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.62)',
        },
      },
    },
    Input: {
      styles: {
        input: {
          backgroundColor: 'rgba(6, 8, 12, 0.9)',
          border: envy.border,
          color: envy.text,
          '&:focus': {
            borderColor: envy.cyan,
            boxShadow: envy.glow,
          },
        },
      },
    },
    TextInput: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600, letterSpacing: '0.04em' },
        description: { color: envy.muted },
      },
    },
    PasswordInput: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
      },
    },
    NumberInput: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
      },
    },
    Select: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
        dropdown: {
          background: envy.bgRaised,
          border: envy.border,
        },
        item: {
          '&[data-selected]': {
            background: envy.itemActive,
            color: envy.cyan,
          },
        },
      },
    },
    Checkbox: {
      styles: {
        input: {
          backgroundColor: 'rgba(6, 8, 12, 0.9)',
          border: `2px solid ${envy.cyan}`,
          '&:checked': {
            backgroundColor: envy.cyan,
            borderColor: envy.cyan,
          },
        },
        icon: {
          color: '#061014',
        },
        label: { color: envy.text },
      },
    },
    Slider: {
      styles: {
        track: { background: 'rgba(255, 255, 255, 0.08)' },
        bar: {
          background: `linear-gradient(90deg, ${envy.cyanDeep}, ${envy.cyan})`,
          boxShadow: envy.glow,
        },
        thumb: {
          borderColor: envy.cyan,
          background: envy.chromeHi,
        },
        label: { color: envy.muted },
      },
    },
    Progress: {
      styles: {
        root: {
          background: 'rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
        },
        bar: {
          background: `linear-gradient(90deg, ${envy.cyanDeep}, ${envy.cyanSoft})`,
          boxShadow: '0 0 12px rgba(0, 229, 255, 0.55)',
        },
      },
    },
    Tooltip: {
      styles: {
        tooltip: {
          background: envy.bgRaised,
          color: envy.text,
          border: envy.border,
          boxShadow: envy.glow,
        },
      },
    },
    Textarea: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
      },
    },
  },
};
