import { create } from 'zustand'

type ContextPanelState = 'closed' | 'open'

type UiState = {
  contextPanelState: ContextPanelState
  contextPanelTab: string
  navRailOpen: boolean
  openContextPanel: (tab?: string) => void
  closeContextPanel: () => void
  toggleContextPanel: () => void
  setContextPanelTab: (tab: string) => void
  toggleNavRail: () => void
}

export const useUiStore = create<UiState>((set, get) => ({
  contextPanelState: 'open',
  contextPanelTab: 'details',
  navRailOpen: true,

  openContextPanel: (tab) =>
    set({ contextPanelState: 'open', ...(tab ? { contextPanelTab: tab } : {}) }),

  closeContextPanel: () => set({ contextPanelState: 'closed' }),

  toggleContextPanel: () =>
    set({ contextPanelState: get().contextPanelState === 'open' ? 'closed' : 'open' }),

  setContextPanelTab: (tab) => set({ contextPanelTab: tab }),

  toggleNavRail: () => set({ navRailOpen: !get().navRailOpen }),
}))
