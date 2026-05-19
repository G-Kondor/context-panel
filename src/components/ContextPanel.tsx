import {
  Drawer,
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
  Button,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useContextPanel } from '@/hooks/useContextPanel'
import { APPBAR_HEIGHT } from './TopBar'
import { radius, concrete, actionPrimary } from '@/theme/tokens'

export const PANEL_WIDTH = 360

const TABS = [
  { id: 'active', label: 'Active tab', badge: null },
  { id: 'inactive', label: 'Inactive + badge', badge: '99+' },
  { id: 'tab3', label: 'Tab button', badge: null },
]

export function ContextPanel() {
  const { isOpen, activeTab, close, setTab } = useContextPanel()

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={isOpen}
      onClose={close}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          width: PANEL_WIDTH,
          top: `${APPBAR_HEIGHT}px`,
          height: `calc(100% - ${APPBAR_HEIGHT}px)`,
          bgcolor: '#ffffff',
          color: concrete[15],
          border: 'none',
          borderRadius: `${radius.lg}px 0 0 ${radius.lg}px`,
          boxShadow: '0px 0px 2px rgba(15,17,19,0.1), 0px 8px 16px rgba(15,17,19,0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '& .MuiBackdrop-root': {
          top: `${APPBAR_HEIGHT}px`,
          bgcolor: 'transparent',
        },
      }}
    >
      {/* ── Tabs header ── */}
      <Box sx={{ px: 2.5, pt: 2.5, pb: 0, flexShrink: 0 }}>
        <Stack direction="row" alignItems="center" sx={{ gap: 1, overflow: 'hidden', position: 'relative' }}>
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <Stack
                key={tab.id}
                direction="row"
                alignItems="center"
                spacing={0.75}
                onClick={() => setTab(tab.id)}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  borderRadius: `${radius.lg}px`,
                  border: isActive ? `1px solid ${concrete[60]}` : '1px solid transparent',
                  cursor: 'pointer',
                  flexShrink: 0,
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 600, color: concrete[15], letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>
                  {tab.label}
                </Typography>
                {tab.badge && (
                  <Box sx={{
                    bgcolor: actionPrimary.gradientEnd,
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 600,
                    height: 16,
                    minWidth: 16,
                    px: 0.5,
                    borderRadius: `${radius.lg}px`,
                    border: '1px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '0.3px',
                  }}>
                    {tab.badge}
                  </Box>
                )}
              </Stack>
            )
          })}

          {/* Overflow gradient + chevron */}
          <Box sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 64,
            background: 'linear-gradient(to right, rgba(255,255,255,0), white 50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
            <IconButton size="small" sx={{ color: concrete[15] }}>
              <ChevronRightIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      {/* ── Body ── */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', pt: 2.5, pl: 2.5, pr: 0 }}>

        {/* Section header */}
        <Box sx={{ pr: 3, mb: 1.5, flexShrink: 0 }}>
          <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 20, fontWeight: 600, color: concrete[15], lineHeight: '24px', mb: 0.25, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Title
              </Typography>
              <Typography sx={{ fontSize: 12, color: concrete[15], letterSpacing: '0.3px', lineHeight: '16px' }}>
                {'Meta data 1   •   Metadata 2   •   Metadata 3'}
              </Typography>
            </Box>
            <IconButton size="small" onClick={close} sx={{ color: concrete[15], mt: -0.25 }}>
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Content placeholder (header area) */}
        <Box sx={{ pr: 3, mb: 1.5, flexShrink: 0 }}>
          <Box sx={{ bgcolor: '#ffdad7', py: 0.5, display: 'flex', justifyContent: 'center', borderRadius: 0.5 }}>
            <Typography sx={{ color: '#930012', fontSize: 10, fontWeight: 600, letterSpacing: '0.3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Replace me
            </Typography>
          </Box>
        </Box>

        <Box sx={{ pr: 3, mb: 0.5, flexShrink: 0 }}>
          <Divider sx={{ borderColor: concrete[90] }} />
        </Box>

        {/* Scrollable content */}
        <Box sx={{ flex: 1, overflowY: 'auto', pr: '8px', display: 'flex', flexDirection: 'column',
          '&::-webkit-scrollbar': { width: 9 },
          '&::-webkit-scrollbar-track': { bgcolor: concrete[95], boxShadow: `inset 1px 0 0 ${concrete[90]}, inset -1px 0 0 ${concrete[95]}` },
          '&::-webkit-scrollbar-thumb': { bgcolor: concrete[70], borderRadius: 1 },
        }}>
          <Stack spacing={1.5} sx={{ py: 0.5 }}>
            <Box sx={{ bgcolor: '#ffdad7', py: 0.5, display: 'flex', justifyContent: 'center', borderRadius: 0.5 }}>
              <Typography sx={{ color: '#930012', fontSize: 10, fontWeight: 600 }}>Replace me</Typography>
            </Box>
            <Box sx={{ bgcolor: '#ffdad7', py: 0.5, display: 'flex', justifyContent: 'center', borderRadius: 0.5 }}>
              <Typography sx={{ color: '#930012', fontSize: 10, fontWeight: 600 }}>Replace me</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* ── Footer ── */}
      <Box sx={{
        bgcolor: 'white',
        borderRadius: `0 0 0 ${radius.lg}px`,
        flexShrink: 0,
        boxShadow: '0px -20px 20px white',
      }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ minHeight: 40, px: 2.5, py: 1 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: concrete[60],
              color: concrete[15],
              borderRadius: `${radius.lg}px`,
              textTransform: 'none',
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.2px',
              px: 1.5,
              py: 1,
              lineHeight: '20px',
              '&:hover': { borderColor: concrete[15], bgcolor: 'transparent' },
            }}
          >
            {'Secondary'}
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              background: `linear-gradient(180deg, ${actionPrimary.gradientStart} 0%, ${actionPrimary.gradientEnd} 100%)`,
              borderRadius: `${radius.lg}px`,
              textTransform: 'none',
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.2px',
              px: 1.5,
              py: 1,
              lineHeight: '20px',
              color: actionPrimary.onPrimary,
              '&:hover': {
                background: `linear-gradient(180deg, ${actionPrimary.gradientStartHover} 0%, ${actionPrimary.gradientEndHover} 100%)`,
              },
            }}
          >
            {'Primary'}
          </Button>
        </Stack>
      </Box>
    </Drawer>
  )
}
