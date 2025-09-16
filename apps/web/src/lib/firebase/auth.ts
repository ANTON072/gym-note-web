import type { AuthState } from "@/types/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app);

let currentAuthState: AuthState = {
  status: "loading",
  user: null,
};

const listeners = new Set<() => void>();

export function subscribeToAuth(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getAuthSnapshot(): AuthState {
  return currentAuthState;
}

function notifyListeners() {
  for (const listener of listeners) {
    listener();
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentAuthState = {
      status: "login",
      user,
    };
  } else {
    currentAuthState = {
      status: "logout",
      user: null,
    };
  }
  notifyListeners();
});
