import type { AuthState } from "@/types/auth";
import type { User } from "firebase/auth";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface RootStore {
  auth: AuthState & {
    setAuthState: (status: "loading" | "login" | "logout", user: User | null) => void;
  };
}

export const useRootStore = create<RootStore>()(
  devtools(
    (set) => ({
      auth: {
        status: "loading",
        user: null,
        setAuthState: (status, user) =>
          set(
            (state) => ({
              auth: {
                ...state.auth,
                status,
                user,
              },
            }),
            false,
            "auth/setAuthState",
          ),
      },
    }),
    {
      name: "root-store",
    },
  ),
);
