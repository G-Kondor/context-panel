import { create } from 'zustand'

type ContextPanelState = 'closed' | 'open'
type ThemeMode = 'light' | 'dark'

type UiState = {
  contextPanelState: ContextPanelState
  contextPanelTab: string
  navRailOpen: boolean
  themeMode: ThemeMode
  openContextPanel: (tab?: string) => void
  closeContextPanel: () => void
  toggleContextPanel: () => void
  setContextPanelTab: (tab: string) => void
  toggleNavRail: () => void
  toggleTheme: () => void
}

export const useUiStore = create<UiState>((set, get) => ({
  contextPanelState: 'closed',
  contextPanelTab: 'details',
  navRailOpen: true,
  themeMode: 'dark',

  openContextPanel: (tab) =>
    set({ contextPanelState: 'open', ...(tab ? { contextPanelTab: tab } : {}) }),

  closeContextPanel: () => set({ contextPanelState: 'closed' }),

  toggleContextPanel: () =>
    set({ contextPanelState: get().contextPanelState === 'open' ? 'closed' : 'open' }),

  setContextPanelTab: (tab) => set({ contextPanelTab: tab }),

  toggleNavRail: () => set({ navRailOpen: !get().navRailOpen }),

  toggleTheme: () =>
    set({ themeMode: get().themeMode === 'dark' ? 'light' : 'dark' }),
}))
