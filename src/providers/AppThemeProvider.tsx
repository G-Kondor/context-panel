import { useMemo, type ReactNode } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useUiStore } from '@/store'
import { lightTheme, darkTheme } from '@/theme'

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const themeMode = useUiStore((s) => s.themeMode)
  const theme = useMemo(
    () => (themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode],
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
