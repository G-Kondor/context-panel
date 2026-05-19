import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { TopBar, APPBAR_HEIGHT } from '@/components/TopBar'
import { NavRail, NAV_RAIL_WIDTH, NAV_EXPANDED_WIDTH } from '@/components/NavRail'
import { ContextPanel } from '@/components/ContextPanel'
import { useUiStore } from '@/store'

export function AppShell() {
  const navRailOpen = useUiStore((s) => s.navRailOpen)
  const navWidth = navRailOpen ? NAV_EXPANDED_WIDTH : NAV_RAIL_WIDTH

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <TopBar />
      <NavRail />

      <Box
        component="main"
        sx={{
          flex: 1,
          pt: `${APPBAR_HEIGHT}px`,
          ml: `${navWidth}px`,
          transition: 'margin 0.2s ease',
          minHeight: `calc(100vh - ${APPBAR_HEIGHT}px)`,
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>

      <ContextPanel />
    </Box>
  )
}
