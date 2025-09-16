import { create } from "zustand";

interface RootStore {
  // Define your global state properties here
  isAuthenticated: boolean;
  toggleAuth: () => void;
}

export const useRootStore = create<RootStore>((set) => ({
  isAuthenticated: false,
  toggleAuth: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
}));
