import { app } from "@/lib/firebase/config";
import type { AuthState } from "@/types/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { create } from "zustand";

interface RootStore {
  auth: AuthState & {
    setAuthState: (status: "loading" | "login" | "logout", user: User | null) => void;
  };
}

export const useRootStore = create<RootStore>((set) => ({
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
}));

// Firebase Auth の状態変更を購読してrootStoreに反映
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    useRootStore.getState().auth.setAuthState("login", user);
  } else {
    useRootStore.getState().auth.setAuthState("logout", null);
  }
});
