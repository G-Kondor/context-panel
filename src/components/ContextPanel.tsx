import { Box, Stack, Typography, IconButton, Divider, Button } from '@mui/material'
import { AnimatePresence, motion } from 'motion/react'
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

const STEPS = [
  { n: 1, label: 'Step 1', active: true },
  { n: 2, label: 'Step 2', active: false },
  { n: 3, label: 'Step 3', active: false },
  { n: 4, label: 'Step 4', active: false },
  { n: 5, label: 'Step 5', active: false },
  { n: 6, label: 'Step 6', active: false },
]

// Spring config for the whimsical slide-in
const PANEL_SPRING = { type: 'spring', stiffness: 340, damping: 26 } as const

export function ContextPanel() {
  const { isOpen, activeTab, close, setTab } = useContextPanel()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible backdrop — closes panel on outside click */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              top: APPBAR_HEIGHT,
              zIndex: 1200,
            }}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: PANEL_WIDTH + 40, scale: 0.96 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: PANEL_WIDTH + 40, scale: 0.96 }}
            transition={PANEL_SPRING}
            style={{
              position: 'fixed',
              top: APPBAR_HEIGHT,
              right: 0,
              width: PANEL_WIDTH,
              height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
              zIndex: 1201,
              transformOrigin: 'top right',
              borderRadius: `${radius.lg}px 0 0 ${radius.lg}px`,
              background: '#ffffff',
              color: concrete[15],
              boxShadow: '0px 0px 2px rgba(15,17,19,0.1), 0px 8px 16px rgba(15,17,19,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
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
                          color: '#ffffff',
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
                    <Typography sx={{ fontSize: 20, fontWeight: 600, color: concrete[15], lineHeight: '24px', mb: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      Title
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 400, color: concrete[15], letterSpacing: '0.3px', lineHeight: '16px' }}>
                      {'Meta data 1   •   Metadata 2   •   Metadata 3'}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={close} sx={{ color: concrete[15], mt: -0.25 }}>
                    <CloseIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </Stack>
              </Box>

              {/* Divider */}
              <Box sx={{ pr: 3, flexShrink: 0 }}>
                <Divider sx={{ borderColor: concrete[90] }} />
              </Box>

              {/* Scrollable stepper content */}
              <Box sx={{
                flex: 1,
                overflowY: 'auto',
                pr: '8px',
                pt: 1.5,
                '&::-webkit-scrollbar': { width: 9 },
                '&::-webkit-scrollbar-track': { bgcolor: concrete[95], boxShadow: `inset 1px 0 0 ${concrete[90]}, inset -1px 0 0 ${concrete[95]}` },
                '&::-webkit-scrollbar-thumb': { bgcolor: concrete[70], borderRadius: 1 },
              }}>
                {STEPS.map((step, i) => {
                  const isLast = i === STEPS.length - 1
                  return (
                    <Stack
                      key={step.n}
                      direction="row"
                      alignItems="flex-start"
                      spacing={1}
                      sx={{ minHeight: 60, pb: isLast ? 1 : 0.5, pt: i === 0 ? 0 : 0.25 }}
                    >
                      {/* Step column: badge + connector */}
                      <Stack alignItems="center" sx={{ width: 34, flexShrink: 0, alignSelf: 'stretch' }}>
                        <Box sx={{
                          width: 32,
                          height: 32,
                          minHeight: 32,
                          borderRadius: '100px',
                          background: step.active
                            ? `linear-gradient(180deg, ${actionPrimary.activeGradientStart} 0%, ${actionPrimary.activeGradientEnd} 100%)`
                            : concrete[90],
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <Typography sx={{
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.3px',
                            lineHeight: '16px',
                            color: step.active ? '#ffffff' : concrete[15],
                          }}>
                            {step.n}
                          </Typography>
                        </Box>
                        {!isLast && (
                          <Box sx={{ flex: 1, width: '1px', bgcolor: concrete[90], mt: 1 }} />
                        )}
                      </Stack>

                      {/* Step label */}
                      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', pt: 1, pb: isLast ? 1 : 2.5 }}>
                        <Typography sx={{
                          fontSize: 12,
                          fontWeight: step.active ? 600 : 400,
                          color: concrete[15],
                          letterSpacing: '0.3px',
                          lineHeight: '16px',
                        }}>
                          {step.label}
                        </Typography>
                      </Box>
                    </Stack>
                  )
                })}
              </Box>
            </Box>

            {/* ── Footer ── */}
            <Box sx={{
              bgcolor: 'white',
              borderRadius: `0 0 0 ${radius.xxl}px`,
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
                  Secondary
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
                  Primary
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
