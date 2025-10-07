import { useRootStore } from "@/store/rootStore";
import type { User } from "firebase/auth";

/**
 * ログイン済みユーザーを取得するフック
 * __root.tsxでログイン状態をチェック済みのため、userは必ず存在する
 * @returns {User} ログイン済みユーザー
 * @throws {Error} ユーザーが存在しない場合（通常は発生しない）
 */
export const useAuthenticatedUser = (): User => {
  const user = useRootStore((state) => state.auth.user);

  if (!user) {
    throw new Error("User must be authenticated. This should not happen.");
  }

  return user;
};
