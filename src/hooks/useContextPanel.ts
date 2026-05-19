import { useUiStore } from '@/store'

export function useContextPanel() {
  const {
    contextPanelState,
    contextPanelTab,
    openContextPanel,
    closeContextPanel,
    toggleContextPanel,
    setContextPanelTab,
  } = useUiStore()

  return {
    isOpen: contextPanelState === 'open',
    activeTab: contextPanelTab,
    open: openContextPanel,
    close: closeContextPanel,
    toggle: toggleContextPanel,
    setTab: setContextPanelTab,
  }
}
