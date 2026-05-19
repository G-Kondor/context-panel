import type { ReactNode } from 'react'

export type NavItem = {
  label: string
  path: string
  icon: ReactNode
}

export type ContextPanelTab = {
  id: string
  label: string
  content: ReactNode
}

export type MetricCard = {
  id: string
  label: string
  value: string | number
  delta?: number
  unit?: string
}
