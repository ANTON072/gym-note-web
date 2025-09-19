import type { ToastType } from "@/components";
import type { AuthState } from "@/types/auth";
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
  toast: {
    toastList: ToastType[];
    addToast: (toast: ToastType) => void;
    removeToast: (id: ToastType["id"]) => void;
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
    toast: {
      toastList: [],
      addToast: (toast) =>
        set((state) => {
          state.toast.toastList.push(toast);
        }),
      removeToast: (id) =>
        set((state) => {
          state.toast.toastList = state.toast.toastList.filter((toast) => toast.id !== id);
        }),
    },
  })),
);
