import type { AuthState } from "@/types/auth";
import type { User } from "firebase/auth";
import { create } from "zustand";

interface RootStore {
  auth: AuthState & {
    setAuthState: (status: "loading" | "login" | "logout", user: User | null) => void;
  };
  drawer: {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
  };
}

export const useRootStore = create<RootStore>()((set) => ({
  auth: {
    status: "loading",
    user: null,
    setAuthState: (status, user) =>
      set((state) => ({
        auth: {
          ...state.auth,
          status,
          user,
        },
      })),
  },
  drawer: {
    isOpen: false,
    openDrawer: () =>
      set((state) => ({
        drawer: {
          ...state.drawer,
          isOpen: true,
        },
      })),
    closeDrawer: () =>
      set((state) => ({
        drawer: {
          ...state.drawer,
          isOpen: false,
        },
      })),
  },
}));
