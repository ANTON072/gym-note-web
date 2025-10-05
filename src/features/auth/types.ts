import type { User } from "firebase/auth";

export type AuthState = {
  status: "loading" | "login" | "logout";
  user: User | null;
};
