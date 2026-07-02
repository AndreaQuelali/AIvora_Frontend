import { create } from 'zustand';

// ---------------------------------------------------------------------------
// UI state — sidebar visibility, modals, panels
// ---------------------------------------------------------------------------

interface UIState {
  // Sidebar
  isSidebarOpen: boolean;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebarCollapsed: () => void;

  // Command palette
  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Sidebar
  isSidebarOpen: true,
  isSidebarCollapsed: false,
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  toggleSidebarCollapsed: () => set((s) => ({ isSidebarCollapsed: !s.isSidebarCollapsed })),

  // Command palette
  isCommandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open }),
}));
