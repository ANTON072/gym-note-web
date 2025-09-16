import { useSyncExternalStore } from "react";
import type { AuthState } from "@/types/auth";
import { subscribeToAuth, getAuthSnapshot } from "@/lib/firebase/auth";

export function useAuthState(): AuthState {
  return useSyncExternalStore(
    subscribeToAuth,
    getAuthSnapshot,
    getAuthSnapshot
  );
}