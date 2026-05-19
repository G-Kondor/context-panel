import { Box, Stack, Typography, IconButton, Divider, Button } from '@mui/material'
import { AnimatePresence, motion } from 'motion/react'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import { useContextPanel } from '@/hooks/useContextPanel'
import { APPBAR_HEIGHT } from './TopBar'
import { radius, concrete, actionPrimary } from '@/theme/tokens'

export const PANEL_WIDTH = 360

const TABS = [
  { id: 'cycle',    label: 'Cycle',    badge: '6' },
  { id: 'insights', label: 'Insights', badge: '3' },
]

const METATAGS = ['Status', 'Total', 'Taxes']

type StepStatus = 'done' | 'active' | 'pending'

interface Step {
  n: number
  label: string
  date: string
  status: StepStatus
}

const STEPS: Step[] = [
  { n: 1, label: 'Collect Employee Data', date: '2026 May 14', status: 'done' },
  { n: 2, label: 'Calculate Gross Pay',   date: '2026 May 16', status: 'done' },
  { n: 3, label: 'Process Deductions',    date: '2026 May 20', status: 'done' },
  { n: 4, label: 'Approve Payroll',       date: '2026 May 22', status: 'active' },
  { n: 5, label: 'Distribute Payments',   date: '2026 May 26', status: 'pending' },
  { n: 6, label: 'Record and Report Payroll', date: '2026 May 30', status: 'pending' },
]

const SUCCESS_BG   = '#c2ffd2'
const SUCCESS_ICON = '#1a7a3a'
const MUTED_TEXT   = '#6f7377'

const PANEL_SPRING = { type: 'spring', stiffness: 340, damping: 26 } as const

function StepBadge({ step }: { step: Step }) {
  if (step.status === 'done') {
    return (
      <Box sx={{
        width: 32, height: 32, minHeight: 32,
        borderRadius: '100px',
        bgcolor: SUCCESS_BG,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <CheckIcon sx={{ fontSize: 16, color: SUCCESS_ICON }} />
      </Box>
    )
  }
  if (step.status === 'active') {
    return (
      <Box sx={{
        width: 32, height: 32, minHeight: 32,
        borderRadius: '100px',
        background: `linear-gradient(180deg, ${actionPrimary.activeGradientStart} 0%, ${actionPrimary.activeGradientEnd} 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#fff', letterSpacing: '0.3px', lineHeight: '16px' }}>
          {step.n}
        </Typography>
      </Box>
    )
  }
  return (
    <Box sx={{
      width: 32, height: 32, minHeight: 32,
      borderRadius: '100px',
      bgcolor: concrete[90],
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <Typography sx={{ fontSize: 12, fontWeight: 600, color: concrete[15], letterSpacing: '0.3px', lineHeight: '16px' }}>
        {step.n}
      </Typography>
    </Box>
  )
}

export function ContextPanel() {
  const { isOpen, activeTab, close, setTab } = useContextPanel()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={close}
            style={{ position: 'fixed', inset: 0, top: APPBAR_HEIGHT, zIndex: 1200 }}
          />

          <motion.div
            key="panel"
            initial={{ x: PANEL_WIDTH + 40 }}
            animate={{ x: 0 }}
            exit={{ x: PANEL_WIDTH + 40 }}
            transition={PANEL_SPRING}
            style={{
              position: 'fixed',
              top: APPBAR_HEIGHT,
              right: 0,
              width: PANEL_WIDTH,
              height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
              zIndex: 1201,
              borderRadius: `${radius.lg}px 0 0 ${radius.lg}px`,
              background: '#ffffff',
              color: concrete[15],
              boxShadow: '0px 0px 2px rgba(15,17,19,0.1), 0px 8px 16px rgba(15,17,19,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* ── Tabs ── */}
            <Box sx={{ px: 2.5, pt: 2.5, pb: 0, flexShrink: 0 }}>
              <Stack direction="row" spacing={1}>
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
                        px: 1.5, py: 0.5,
                        borderRadius: `${radius.lg}px`,
                        border: isActive ? `1px solid ${concrete[60]}` : '1px solid transparent',
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
                      }}
                    >
                      <Typography sx={{ fontSize: 12, fontWeight: 600, color: concrete[15], letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>
                        {tab.label}
                      </Typography>
                      <Box sx={{
                        bgcolor: actionPrimary.gradientEnd,
                        color: '#fff',
                        fontSize: 12, fontWeight: 600,
                        height: 16, minWidth: 16,
                        px: 0.5,
                        borderRadius: `${radius.lg}px`,
                        border: '1px solid white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        letterSpacing: '0.3px',
                      }}>
                        {tab.badge}
                      </Box>
                    </Stack>
                  )
                })}
              </Stack>
            </Box>

            {/* ── Body ── */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', pt: 2.5, pl: 2.5, pr: 0 }}>

              {/* Section header */}
              <Box sx={{ pr: 3, mb: 1.5, flexShrink: 0 }}>
                <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: 24, fontWeight: 600, color: concrete[15], lineHeight: '30px', mb: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      Overview
                    </Typography>
                    {/* Metatags */}
                    <Stack direction="row" spacing={0.5} sx={{ mt: 0.25 }}>
                      {METATAGS.map((tag) => (
                        <Box key={tag} sx={{
                          bgcolor: concrete[95],
                          color: concrete[30],
                          fontSize: 12, fontWeight: 500,
                          height: 24,
                          px: 0.5,
                          borderRadius: `${radius.sm}px`,
                          display: 'flex', alignItems: 'center',
                          letterSpacing: '0.3px',
                          whiteSpace: 'nowrap',
                        }}>
                          {tag}
                        </Box>
                      ))}
                    </Stack>
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

              {/* Scrollable stepper */}
              <Box sx={{
                flex: 1, overflowY: 'auto', pr: '8px', pt: 1.5,
                '&::-webkit-scrollbar': { width: 9 },
                '&::-webkit-scrollbar-track': { bgcolor: concrete[95], boxShadow: `inset 1px 0 0 ${concrete[90]}, inset -1px 0 0 ${concrete[95]}` },
                '&::-webkit-scrollbar-thumb': { bgcolor: concrete[70], borderRadius: 1 },
              }}>
                {STEPS.map((step, i) => {
                  const isLast = i === STEPS.length - 1
                  const isMuted = step.status === 'pending'
                  return (
                    <Stack
                      key={step.n}
                      direction="row"
                      alignItems="flex-start"
                      spacing={1}
                      sx={{ pb: isLast ? 1 : 0.5, pt: i === 0 ? 0 : 0 }}
                    >
                      {/* Badge + connector */}
                      <Stack alignItems="center" sx={{ width: 34, flexShrink: 0, alignSelf: 'stretch' }}>
                        <StepBadge step={step} />
                        {!isLast && <Box sx={{ flex: 1, width: '1px', bgcolor: concrete[90], mt: 1 }} />}
                      </Stack>

                      {/* Step content */}
                      <Box sx={{ flex: 1, pt: 0.5, pb: isLast ? 1 : 2.5 }}>
                        <Typography sx={{
                          fontSize: 14, fontWeight: 600,
                          color: isMuted ? MUTED_TEXT : concrete[15],
                          letterSpacing: '0.2px', lineHeight: '20px',
                        }}>
                          {step.label}
                        </Typography>
                        <Typography sx={{
                          fontSize: 12, fontWeight: 400,
                          color: isMuted ? MUTED_TEXT : concrete[15],
                          letterSpacing: '0.3px', lineHeight: '16px', mt: 0.5,
                        }}>
                          {step.date}
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
                  onClick={close}
                  sx={{
                    borderColor: concrete[60], color: concrete[15],
                    borderRadius: `${radius.lg}px`,
                    textTransform: 'none', fontWeight: 500, fontSize: 14,
                    letterSpacing: '0.2px', px: 1.5, py: 1, lineHeight: '20px',
                    '&:hover': { borderColor: concrete[15], bgcolor: 'transparent' },
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: `linear-gradient(180deg, ${actionPrimary.gradientStart} 0%, ${actionPrimary.gradientEnd} 100%)`,
                    borderRadius: `${radius.lg}px`,
                    textTransform: 'none', fontWeight: 500, fontSize: 14,
                    letterSpacing: '0.2px', px: 1.5, py: 1, lineHeight: '20px',
                    color: actionPrimary.onPrimary,
                    '&:hover': { background: `linear-gradient(180deg, ${actionPrimary.gradientStartHover} 0%, ${actionPrimary.gradientEndHover} 100%)` },
                  }}
                >
                  Run payroll
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
