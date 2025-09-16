import { useRootStore } from "@/store/rootStore";

/**
 * rootStoreから認証状態を取得するフック
 * Zustandベースの実装
 */
export function useAuthFromStore() {
  const auth = useRootStore((state) => state.auth);

  return {
    ...auth,
    isAuthenticated: auth.status === "login",
  };
}
