import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  IconButton,
} from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { useContextPanel } from '@/hooks/useContextPanel'

const metrics = [
  { label: 'Deployments', value: '148', delta: 12, unit: 'this month' },
  { label: 'Uptime', value: '99.97%', delta: 0.04, unit: 'last 30d' },
  { label: 'Avg response', value: '142ms', delta: -8, unit: 'p95' },
  { label: 'Active users', value: '2,841', delta: 23, unit: 'today' },
]

const recentActivity = [
  { icon: <RocketLaunchOutlinedIcon fontSize="small" />, label: 'Deployed v2.4.1 to production', time: '2m ago', color: '#6366f1' },
  { icon: <BugReportOutlinedIcon fontSize="small" />, label: 'Fixed auth redirect loop', time: '18m ago', color: '#f59e0b' },
  { icon: <CheckCircleOutlinedIcon fontSize="small" />, label: 'All 142 tests passing', time: '1h ago', color: '#22c55e' },
  { icon: <RocketLaunchOutlinedIcon fontSize="small" />, label: 'Deployed v2.4.0 to staging', time: '3h ago', color: '#6366f1' },
]

type MetricCardProps = (typeof metrics)[0]

function MetricCard({ label, value, delta, unit }: MetricCardProps) {
  const positive = delta >= 0
  return (
    <Card>
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 0.8 }}>
            {label}
          </Typography>
          <IconButton size="small" sx={{ mt: -0.5, mr: -0.5 }}>
            <MoreHorizIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Stack>
        <Typography variant="h4" fontWeight={700} sx={{ mt: 1, mb: 0.5 }}>
          {value}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          {positive
            ? <TrendingUpIcon sx={{ fontSize: 14, color: '#22c55e' }} />
            : <TrendingDownIcon sx={{ fontSize: 14, color: '#ef4444' }} />
          }
          <Typography variant="caption" sx={{ color: positive ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
            {positive ? '+' : ''}{delta}
          </Typography>
          <Typography variant="caption" color="text.secondary">{unit}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

function PlaceholderChart({ height = 160 }: { height?: number }) {
  return (
    <Box sx={{
      height,
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(236,72,153,0.05))',
      border: '1px dashed',
      borderColor: 'divider',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Typography variant="caption" color="text.disabled">Chart placeholder</Typography>
    </Box>
  )
}

export function DashboardPage() {
  const { open: openPanel } = useContextPanel()

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5" fontWeight={700}>Dashboard</Typography>
          <Typography variant="body2" color="text.secondary">Welcome back, Gergo</Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <Chip label="Production" color="success" size="small" />
          <Chip label="Last updated: just now" size="small" variant="outlined" />
        </Stack>
      </Stack>

      <Grid container spacing={2} mb={3}>
        {metrics.map((m) => (
          <Grid key={m.label} item xs={12} sm={6} lg={3}>
            <MetricCard {...m} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2.5 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="subtitle1" fontWeight={600}>Request volume</Typography>
              <Stack direction="row" spacing={1}>
                {['1h', '24h', '7d', '30d'].map((r) => (
                  <Chip
                    key={r}
                    label={r}
                    size="small"
                    variant={r === '24h' ? 'filled' : 'outlined'}
                    color={r === '24h' ? 'primary' : 'default'}
                    sx={{ cursor: 'pointer', fontSize: '0.75rem' }}
                  />
                ))}
              </Stack>
            </Stack>
            <PlaceholderChart height={180} />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2.5, height: '100%' }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>Traffic sources</Typography>
            <PlaceholderChart height={180} />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>Recent activity</Typography>
            <Stack spacing={1.5}>
              {recentActivity.map((item, i) => (
                <Stack
                  key={i}
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  onClick={() => openPanel('activity')}
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Box sx={{ color: item.color, display: 'flex' }}>{item.icon}</Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body2" noWrap>{item.label}</Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: 'nowrap' }}>
                    {item.time}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>Services</Typography>
            <Stack spacing={1}>
              {[
                { name: 'API Gateway', status: 'Healthy', latency: '12ms' },
                { name: 'Auth Service', status: 'Healthy', latency: '8ms' },
                { name: 'Database', status: 'Healthy', latency: '3ms' },
                { name: 'CDN', status: 'Degraded', latency: '320ms' },
              ].map((s) => (
                <Stack
                  key={s.name}
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  sx={{ p: 1.25, borderRadius: 2, bgcolor: 'action.hover' }}
                >
                  <Box sx={{
                    width: 7, height: 7, borderRadius: '50%',
                    bgcolor: s.status === 'Healthy' ? '#22c55e' : '#f59e0b',
                    flexShrink: 0,
                  }} />
                  <Typography variant="body2" fontWeight={500} sx={{ flex: 1 }}>{s.name}</Typography>
                  <Chip
                    label={s.status}
                    size="small"
                    color={s.status === 'Healthy' ? 'success' : 'warning'}
                    variant="outlined"
                    sx={{ fontSize: '0.7rem', height: 20 }}
                  />
                  <Typography variant="caption" color="text.secondary">{s.latency}</Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
