import { Box, Button, Typography } from '@mui/material'
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined'
import { useContextPanel } from '@/hooks/useContextPanel'

export function DashboardPage() {
  const { open } = useContextPanel()

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Click the button to open the context panel
      </Typography>

      <Button
        variant="contained"
        size="large"
        startIcon={<TableRowsOutlinedIcon />}
        onClick={() => open()}
        sx={{
          background: 'linear-gradient(180deg, #4069fe 0%, #1c4ee4 100%)',
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: 15,
          px: 3,
          py: 1.25,
          boxShadow: '0px 4px 12px rgba(28,78,228,0.35)',
          '&:hover': {
            background: 'linear-gradient(180deg, #3558e0 0%, #1640c8 100%)',
            boxShadow: '0px 6px 16px rgba(28,78,228,0.45)',
          },
        }}
      >
        Open context panel
      </Button>
    </Box>
  )
}
