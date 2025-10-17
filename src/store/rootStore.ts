import type { AuthState } from "@/features/auth/types";
import type { User } from "firebase/auth";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface RootStore {
  auth: AuthState & {
    setAuthState: (status: "loading" | "login" | "logout", user: User | null) => void;
  };
  drawer: {
    isOpen: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
  };
}

export const useRootStore = create<RootStore>()(
  immer((set) => ({
    auth: {
      status: "loading",
      user: null,
      setAuthState: (status, user) =>
        set((state) => {
          state.auth.status = status;
          state.auth.user = user;
        }),
    },
    drawer: {
      isOpen: false,
      toggleDrawer: () =>
        set((state) => {
          state.drawer.isOpen = !state.drawer.isOpen;
        }),
      closeDrawer: () =>
        set((state) => {
          state.drawer.isOpen = false;
        }),
    },
  })),
);
