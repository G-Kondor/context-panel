import {
  Drawer,
  Box,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Divider,
  Stack,
  Chip,
  LinearProgress,
  Avatar,
} from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { useContextPanel } from '@/hooks/useContextPanel'
import { APPBAR_HEIGHT } from './TopBar'

export const PANEL_WIDTH = 300

function DetailsTab() {
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
          Status
        </Typography>
        <Stack direction="row" spacing={1} mt={0.75} flexWrap="wrap" gap={0.5}>
          <Chip label="Active" color="success" size="small" />
          <Chip label="v2.4.1" size="small" variant="outlined" />
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
          Completion
        </Typography>
        {[
          { label: 'Tasks', value: 72 },
          { label: 'Tests', value: 58 },
          { label: 'Docs', value: 35 },
        ].map(({ label, value }) => (
          <Box key={label} sx={{ mt: 1.5 }}>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2" color="text.secondary">{label}</Typography>
              <Typography variant="body2" fontWeight={600}>{value}%</Typography>
            </Stack>
            <LinearProgress variant="determinate" value={value} sx={{ height: 4, borderRadius: 2 }} />
          </Box>
        ))}
      </Box>

      <Divider />

      <Box>
        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
          Properties
        </Typography>
        {[
          { key: 'Owner', val: 'Gergo K.' },
          { key: 'Priority', val: 'High' },
          { key: 'Due date', val: 'Jun 1, 2026' },
          { key: 'Environment', val: 'Production' },
        ].map(({ key, val }) => (
          <Stack key={key} direction="row" justifyContent="space-between" mt={1}>
            <Typography variant="body2" color="text.secondary">{key}</Typography>
            <Typography variant="body2" fontWeight={500}>{val}</Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  )
}

function ActivityTab() {
  const events = [
    { user: 'GK', action: 'Deployed to production', time: '2m ago', color: '#6366f1' },
    { user: 'AS', action: 'Merged pull request #42', time: '18m ago', color: '#ec4899' },
    { user: 'GK', action: 'Created branch feature/context', time: '1h ago', color: '#6366f1' },
    { user: 'ML', action: 'Reviewed design specs', time: '3h ago', color: '#10b981' },
    { user: 'AS', action: 'Updated dependencies', time: '5h ago', color: '#ec4899' },
  ]

  return (
    <Stack spacing={0} sx={{ p: 2 }}>
      {events.map((e, i) => (
        <Stack key={i} direction="row" spacing={1.5} sx={{ pb: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 28, height: 28, fontSize: '0.7rem', bgcolor: e.color }}>
              {e.user}
            </Avatar>
            {i < events.length - 1 && (
              <Box sx={{ width: 1, flex: 1, bgcolor: 'divider', mt: 0.75 }} />
            )}
          </Box>
          <Box sx={{ pt: 0.25 }}>
            <Typography variant="body2" fontWeight={500}>{e.action}</Typography>
            <Typography variant="caption" color="text.secondary">{e.time}</Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  )
}

function TeamTab() {
  const members = [
    { initials: 'GK', name: 'Gergo Kondor', role: 'Owner', color: '#6366f1', online: true },
    { initials: 'AS', name: 'Anna Smith', role: 'Developer', color: '#ec4899', online: true },
    { initials: 'ML', name: 'Mike Lee', role: 'Designer', color: '#10b981', online: false },
    { initials: 'JD', name: 'Jane Doe', role: 'QA', color: '#f59e0b', online: false },
  ]

  return (
    <Stack spacing={1} sx={{ p: 2 }}>
      {members.map((m) => (
        <Stack
          key={m.name}
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ p: 1, borderRadius: 2, '&:hover': { bgcolor: 'action.hover' }, cursor: 'default' }}
        >
          <Box sx={{ position: 'relative' }}>
            <Avatar sx={{ width: 32, height: 32, fontSize: '0.75rem', bgcolor: m.color }}>
              {m.initials}
            </Avatar>
            <Box sx={{
              position: 'absolute', bottom: 0, right: 0,
              width: 9, height: 9, borderRadius: '50%',
              bgcolor: m.online ? '#22c55e' : '#475569',
              border: '1.5px solid',
              borderColor: 'background.paper',
            }} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={500} noWrap>{m.name}</Typography>
            <Typography variant="caption" color="text.secondary">{m.role}</Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  )
}

const TABS = [
  { id: 'details', label: 'Details', icon: <InfoOutlinedIcon sx={{ fontSize: 16 }} /> },
  { id: 'activity', label: 'Activity', icon: <TimelineOutlinedIcon sx={{ fontSize: 16 }} /> },
  { id: 'team', label: 'Team', icon: <PeopleOutlinedIcon sx={{ fontSize: 16 }} /> },
]

export function ContextPanel() {
  const { isOpen, activeTab, close, setTab } = useContextPanel()

  return (
    <Drawer
      anchor="right"
      variant="persistent"
      open={isOpen}
      sx={{
        width: isOpen ? PANEL_WIDTH : 0,
        flexShrink: 0,
        transition: 'width 0.2s ease',
        '& .MuiDrawer-paper': {
          width: PANEL_WIDTH,
          pt: `${APPBAR_HEIGHT}px`,
          borderLeft: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <Stack direction="row" alignItems="center" sx={{ px: 1.5, pt: 1, pb: 0 }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ flex: 1 }}>
          Context
        </Typography>
        <IconButton size="small" onClick={close}>
          <CloseOutlinedIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Stack>

      <Tabs
        value={activeTab}
        onChange={(_, v) => setTab(v)}
        variant="fullWidth"
        sx={{ px: 1, minHeight: 40, '& .MuiTabs-indicator': { height: 2 } }}
      >
        {TABS.map((t) => (
          <Tab
            key={t.id}
            value={t.id}
            label={t.label}
            icon={t.icon}
            iconPosition="start"
            sx={{ minHeight: 40, gap: 0.5, px: 1, fontSize: '0.8rem' }}
          />
        ))}
      </Tabs>

      <Divider />

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {activeTab === 'details' && <DetailsTab />}
        {activeTab === 'activity' && <ActivityTab />}
        {activeTab === 'team' && <TeamTab />}
      </Box>
    </Drawer>
  )
}
