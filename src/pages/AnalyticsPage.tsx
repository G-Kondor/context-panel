import { Box, Typography, Card, Stack } from '@mui/material'

export function AnalyticsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={0.5}>Analytics</Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Detailed metrics and reports
      </Typography>
      <Card sx={{ p: 4 }}>
        <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 300 }}>
          <Typography variant="h6" color="text.secondary">Analytics content coming soon</Typography>
          <Typography variant="body2" color="text.disabled" mt={1}>
            Connect your data sources to see insights here
          </Typography>
        </Stack>
      </Card>
    </Box>
  )
}
