import { useAuthState } from "./useAuthState";
import { useRootStore } from "@/store/rootStore";
import { useEffect } from "react";

/**
 * 認証状態を取得するフック
 * - useSyncExternalStoreベースのuseAuthStateを使用
 * - rootStoreとの同期も行う（オプション）
 * 
 * @param syncWithStore - rootStoreと同期するかどうか（デフォルト: false）
 */
export function useAuth(syncWithStore = false) {
  const authState = useAuthState();
  const auth = useRootStore((state) => state.auth);

  // rootStoreと同期する場合
  useEffect(() => {
    if (syncWithStore && authState.status !== auth.status) {
      auth.setAuthState(authState.status, authState.user ?? null);
    }
  }, [syncWithStore, authState, auth]);

  return authState;
}