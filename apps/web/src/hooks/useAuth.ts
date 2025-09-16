import { useRootStore } from "@/store/rootStore";

/**
 * 認証状態を取得するフック
 * rootStore（Zustand）ベースの実装
 */
export function useAuth() {
  const auth = useRootStore((state) => state.auth);

  return {
    ...auth,
    isAuthenticated: auth.status === "login",
  };
}
