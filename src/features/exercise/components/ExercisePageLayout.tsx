import type { ReactNode } from "react";
import { BackToListButton } from "./BackToListButton";

interface ExercisePageLayoutProps {
  /** ページのメインコンテンツ */
  children: ReactNode;
}

/**
 * 種目ページの共通レイアウトコンポーネント
 * 新規作成ページと編集ページで共通のスタイルとヘッダーを提供します
 */
export const ExercisePageLayout = ({ children }: ExercisePageLayoutProps) => {
  return (
    <div className="mt-4 grid gap-4">
      <div className="flex items-center justify-between">
        <div />
        <BackToListButton />
      </div>
      {children}
    </div>
  );
};
