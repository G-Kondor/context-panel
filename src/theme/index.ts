import { createTheme, alpha } from '@mui/material/styles'
import {
  concrete, storm, radius,
  actionPrimary, surfaceLight, surfaceDark,
} from './tokens'

// ─── Palette augmentation ─────────────────────────────────────────────────────
declare module '@mui/material/styles' {
  interface Palette {
    panel: {
      surface:     string
      subtleBg:    string
      subtleText:  string
      border:      string
      muted:       string
      scrollThumb: string
    }
  }
  interface PaletteOptions {
    panel?: Partial<Palette['panel']>
  }
}

const sharedComponents = (bgPaper: string, dividerColor: string) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: 'thin' as const,
        '&::-webkit-scrollbar': { width: 6 },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': { background: dividerColor, borderRadius: 3 },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: alpha(bgPaper, 0.85),
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${dividerColor}`,
        boxShadow: 'none',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: `1px solid ${dividerColor}`,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        border: `1px solid ${dividerColor}`,
        boxShadow: 'none',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: { textTransform: 'none' as const, fontWeight: 500 },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: { textTransform: 'none' as const, fontWeight: 500, minHeight: 40 },
    },
  },
  MuiChip: {
    styleOverrides: { root: { fontWeight: 500 } },
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:         actionPrimary.gradientStart,
      dark:         actionPrimary.gradientEnd,
      contrastText: actionPrimary.onPrimary,
    },
    background: {
      default: concrete[95],
      paper:   surfaceLight.default,
    },
    text: {
      primary:   concrete[15],
      secondary: concrete[40],
      disabled:  concrete[50],
    },
    divider: concrete[90],
    panel: {
      surface:     surfaceLight.default,   // #ffffff
      subtleBg:    concrete[95],           // #F0F0F3
      subtleText:  concrete[30],           // #454749
      border:      concrete[60],           // #8F9193
      muted:       concrete[50],           // #76777A
      scrollThumb: concrete[70],           // #AAABAE
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", -apple-system, sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body1: { fontSize: '0.9375rem' },
    body2: { fontSize: '0.875rem' },
  },
  shape: { borderRadius: radius.md },
  components: sharedComponents(surfaceLight.default, concrete[90]),
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:         actionPrimary.gradientStart,
      dark:         actionPrimary.gradientEnd,
      contrastText: actionPrimary.onPrimary,
    },
    background: {
      default: storm[10],
      paper:   surfaceDark.default,
    },
    text: {
      primary:   '#FFFFFF',
      secondary: storm[60],
      disabled:  storm[50],
    },
    divider: storm[30],
    panel: {
      surface:     surfaceDark.default,    // #242628
      subtleBg:    storm[25],              // #3A3C3E
      subtleText:  storm[70],              // #AAABAE
      border:      storm[50],              // #76777A
      muted:       storm[60],              // #8F9193
      scrollThumb: storm[40],              // #5D5E61
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", -apple-system, sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body1: { fontSize: '0.9375rem' },
    body2: { fontSize: '0.875rem' },
  },
  shape: { borderRadius: radius.md },
  components: sharedComponents(surfaceDark.default, storm[30]),
})
