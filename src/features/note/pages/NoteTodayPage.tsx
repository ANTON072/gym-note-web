import { useState } from "react";

import { ConfirmDialog } from "@/components/ConfirmDialog";
import { Button } from "@/components/shadcn/button";
import { CheckCircle } from "lucide-react";
import { NoteDetail } from "../components/NoteDetail";

export const NoteTodayPage = () => {
  // TODO: 本番ではAPIから本日のノートの存在を確認
  const [hasNote, setHasNote] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // TODO: 本番ではAPIから本日のノートIDを取得
  const todayNoteId = "1";

  const handleStartWorkout = async () => {
    try {
      // TODO: 本番ではAPIにPOSTリクエストを送信してノートを作成
      console.log("本日のノートを作成中...");
      await new Promise((resolve) => setTimeout(resolve, 100)); // 仮のAPI呼び出し
      console.log("本日のノートを作成しました");
      setHasNote(true);
    } catch (error) {
      console.error("ノートの作成に失敗しました", error);
      // TODO: エラーハンドリング（toast通知など）
    }
  };

  const handleCompleteClick = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirm = () => {
    console.log("ワークアウト完了");
    // TODO: ワークアウト完了処理を実装
    setIsConfirmOpen(false);
  };

  const handleCancel = () => {
    setIsConfirmOpen(false);
  };

  // ノートが存在しない場合は開始ボタンを表示
  // TODO: 本番ではhasNoteの値に応じて表示を切り替え
  // if (!hasNote) {
  //   return <WorkoutStartScreen isCreating={isCreating} onStartWorkout={handleStartWorkout} />;
  // }

  // ノートが存在する場合は既存の表示
  return (
    <>
      <NoteDetail noteId={todayNoteId} title="本日のノート" status="active" />
      <Button
        onClick={handleCompleteClick}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        aria-label="ワークアウト完了"
      >
        <CheckCircle className="size-8 text-white" />
      </Button>
      <ConfirmDialog
        isOpen={isConfirmOpen}
        title="ワークアウト完了"
        message="本日のワークアウトを完了しますか？"
        confirmLabel="完了"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};
