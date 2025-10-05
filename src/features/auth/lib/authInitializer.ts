import { app } from "@/configs/firebase";
import { useRootStore } from "@/store/rootStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { Unsubscribe } from "firebase/auth";

let unsubscribe: Unsubscribe | null = null;

/**
 * Firebase Authの状態監視を開始する
 * アプリケーション起動時に一度だけ呼び出す
 */
export function initializeAuthListener(): Unsubscribe {
  // 既存のリスナーがある場合は解除
  if (unsubscribe) {
    unsubscribe();
  }

  const auth = getAuth(app);

  // Firebase Authの状態変更を購読
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      useRootStore.getState().auth.setAuthState("login", user);
    } else {
      useRootStore.getState().auth.setAuthState("logout", null);
    }
  });

  return unsubscribe;
}

/**
 * Firebase Authの状態監視を停止する
 * アプリケーション終了時やテストのクリーンアップで使用
 */
export function cleanupAuthListener(): void {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
}
