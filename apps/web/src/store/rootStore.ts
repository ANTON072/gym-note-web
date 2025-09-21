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
    add: (toast: Omit<ToastType, "id" | "type"> & { type?: ToastType["type"] }) => void;
    remove: (id: ToastType["id"]) => void;
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
      add: (toast) =>
        set((state) => {
          // 最大3件まで表示。古いものから削除する。
          // if (state.toast.toastList.length >= 3) {
          //   state.toast.toastList.shift();
          // }
          state.toast.toastList.push({
            id: Date.now().toString(),
            type: toast.type ?? "normal",
            ...toast,
          });
        }),
      remove: (id) =>
        set((state) => {
          state.toast.toastList = state.toast.toastList.filter((toast) => toast.id !== id);
        }),
    },
  })),
);
