import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Tooltip,
  Badge,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined'
import { useUiStore } from '@/store'

export const APPBAR_HEIGHT = 56

export function TopBar() {
  const toggleNavRail = useUiStore((s) => s.toggleNavRail)
  const toggleContextPanel = useUiStore((s) => s.toggleContextPanel)

  return (
    <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
      <Toolbar sx={{ minHeight: `${APPBAR_HEIGHT}px !important`, px: 1.5 }}>
        <IconButton onClick={toggleNavRail} size="small" sx={{ mr: 1 }}>
          <MenuIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: 1,
              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            }}
          />
          <Typography variant="subtitle1" fontWeight={700} letterSpacing="-0.3px">
            ContextPanel
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }} />

        <Tooltip title="Notifications">
          <IconButton size="small" sx={{ mr: 0.5 }}>
            <Badge badgeContent={3} color="primary" variant="dot">
              <NotificationsOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Toggle context panel">
          <IconButton size="small" onClick={toggleContextPanel} sx={{ mr: 1 }}>
            <ViewSidebarOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Avatar sx={{ width: 28, height: 28, fontSize: '0.75rem', bgcolor: 'primary.main' }}>
          GK
        </Avatar>
      </Toolbar>
    </AppBar>
  )
}
