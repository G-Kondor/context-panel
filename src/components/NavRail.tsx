import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Box,
  Collapse,
} from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useUiStore } from '@/store'
import { APPBAR_HEIGHT } from './TopBar'

export const NAV_RAIL_WIDTH = 56
export const NAV_EXPANDED_WIDTH = 200

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardOutlinedIcon fontSize="small" /> },
  { label: 'Analytics', path: '/analytics', icon: <BarChartOutlinedIcon fontSize="small" /> },
  { label: 'Settings', path: '/settings', icon: <SettingsOutlinedIcon fontSize="small" /> },
]

export function NavRail() {
  const navigate = useNavigate()
  const location = useLocation()
  const navRailOpen = useUiStore((s) => s.navRailOpen)

  const width = navRailOpen ? NAV_EXPANDED_WIDTH : NAV_RAIL_WIDTH

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        transition: 'width 0.2s ease',
        '& .MuiDrawer-paper': {
          width,
          overflow: 'hidden',
          transition: 'width 0.2s ease',
          pt: `${APPBAR_HEIGHT}px`,
        },
      }}
    >
      <List sx={{ pt: 1 }}>
        {navItems.map(({ label, path, icon }) => {
          const active = location.pathname.startsWith(path)
          return (
            <Tooltip key={path} title={navRailOpen ? '' : label} placement="right">
              <ListItemButton
                onClick={() => navigate(path)}
                selected={active}
                sx={{
                  mx: 0.75,
                  mb: 0.25,
                  borderRadius: 2,
                  minHeight: 40,
                  px: 1.25,
                  justifyContent: navRailOpen ? 'initial' : 'center',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': { bgcolor: 'primary.dark' },
                    '& .MuiListItemIcon-root': { color: 'white' },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: navRailOpen ? 1.5 : 0,
                    color: active ? 'inherit' : 'text.secondary',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <Collapse in={navRailOpen} orientation="horizontal" unmountOnExit>
                  <Box sx={{ whiteSpace: 'nowrap', fontSize: '0.875rem', fontWeight: 500 }}>
                    {label}
                  </Box>
                </Collapse>
              </ListItemButton>
            </Tooltip>
          )
        })}
      </List>
    </Drawer>
  )
}
