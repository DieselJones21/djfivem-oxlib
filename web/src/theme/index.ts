import { MantineThemeOverride, Tuple } from '@mantine/core';
import { envy, envyHeaderSurface, envyPalette } from './envy';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto, sans-serif',
  primaryColor: 'miami',
  primaryShade: 5,
  defaultRadius: 'md',
  globalStyles: () => ({
    'html, body, #root': {
      background: 'transparent !important',
      backgroundColor: 'transparent !important',
    },
  }),
  colors: {
    envy: [...envyPalette] as unknown as Tuple<string, 10>,
    rebel: [...envyPalette] as unknown as Tuple<string, 10>,
    miami: [...envyPalette] as unknown as Tuple<string, 10>,
  },
  shadows: {
    sm: envy.panelShadow,
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
          ...envyHeaderSurface,
          borderBottom: `1px solid ${envy.silverLine}`,
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
        inner: {
          background: 'transparent',
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
        icon: {
          color: envy.cyan,
        },
      },
    },
    InputWrapper: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600, letterSpacing: '0.04em' },
        description: { color: envy.muted },
        error: { color: envy.danger },
        required: { color: envy.cyan },
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
          boxShadow: envy.panelShadow,
        },
        item: {
          '&[data-selected]': {
            background: envy.itemActive,
            color: envy.cyan,
          },
          '&[data-hovered]': {
            background: envy.itemHover,
          },
        },
      },
    },
    MultiSelect: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
        dropdown: {
          background: envy.bgRaised,
          border: envy.border,
          boxShadow: envy.panelShadow,
        },
        value: {
          background: envy.itemActive,
          color: envy.cyan,
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
    ColorInput: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
        dropdown: {
          background: envy.bgRaised,
          border: envy.border,
          boxShadow: envy.panelShadow,
        },
      },
    },
    DatePicker: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
        dropdown: {
          background: envy.bgRaised,
          border: envy.border,
          boxShadow: envy.panelShadow,
        },
      },
    },
    DateRangePicker: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
        dropdown: {
          background: envy.bgRaised,
          border: envy.border,
          boxShadow: envy.panelShadow,
        },
      },
    },
    TimeInput: {
      styles: {
        label: { color: envy.chromeMid, fontWeight: 600 },
        description: { color: envy.muted },
      },
    },
    Calendar: {
      styles: {
        calendarHeaderLevel: { color: envy.text },
        calendarHeaderControl: {
          color: envy.cyan,
          border: envy.border,
          background: envy.item,
        },
        weekday: { color: envy.muted },
        day: {
          color: envy.text,
          '&[data-selected]': {
            backgroundColor: envy.cyan,
            color: '#061014',
          },
          '&:hover': {
            backgroundColor: envy.itemHover,
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
          background: envy.beachGradient,
          boxShadow: envy.glow,
        },
        thumb: {
          borderColor: envy.cyan,
          background: envy.chromeHi,
        },
        label: { color: envy.muted },
        markLabel: { color: envy.muted },
      },
    },
    Progress: {
      styles: {
        root: {
          background: 'rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
        },
        bar: {
          background: envy.beachGradient,
          boxShadow: envy.glowStrong,
        },
      },
    },
    RingProgress: {
      styles: {
        root: {
          filter: 'none',
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
    HoverCard: {
      styles: {
        dropdown: {
          background: envy.bgRaised,
          border: envy.border,
          boxShadow: envy.panelShadow,
          color: envy.text,
        },
      },
    },
    Drawer: {
      styles: {
        drawer: {
          background: envy.bgRaised,
          borderRight: envy.border,
          color: envy.text,
        },
        title: {
          color: envy.chromeHi,
          fontWeight: 800,
          letterSpacing: '0.18em',
          fontStyle: 'italic',
          textTransform: 'uppercase',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.62)',
        },
      },
    },
    ActionIcon: {
      styles: {
        root: {
          '&[data-variant="filled"]': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
};
