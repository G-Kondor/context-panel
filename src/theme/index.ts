import { createTheme, alpha } from '@mui/material/styles'
import {
  concrete, storm, radius,
  actionPrimary, surfaceLight, surfaceDark,
} from './tokens'

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
      default: concrete[95],    // subtle gray page background
      paper:   surfaceLight.default,  // white surfaces / drawers / cards
    },
    text: {
      primary:   concrete[15],  // #242628
      secondary: concrete[40],  // #5D5E61
      disabled:  concrete[50],  // #76777A
    },
    divider: concrete[90],      // #E2E2E5
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
      default: storm[10],             // #1A1C1E — page canvas
      paper:   surfaceDark.default,   // #242628 — drawers / cards
    },
    text: {
      primary:   '#FFFFFF',
      secondary: storm[60],   // #8F9193
      disabled:  storm[50],   // #76777A
    },
    divider: storm[30],       // #454749
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
