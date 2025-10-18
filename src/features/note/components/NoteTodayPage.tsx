import { useState } from "react";

import { ConfirmDialog } from "@/components/ConfirmDialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";

import { NoteTitle } from "./NoteTitle";

const formatDate = (date: Date): string => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  return `${year}年${month}月${day}日（${weekday}）`;
};

export const NoteTodayPage = () => {
  // TODO: 本番ではAPIから本日のノートの存在を確認
  const [hasNote, setHasNote] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const today = formatDate(new Date());

  const handleStartWorkout = async () => {
    try {
      setIsCreating(true);
      // TODO: 本番ではAPIにPOSTリクエストを送信してノートを作成
      console.log("本日のノートを作成中...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 仮のAPI呼び出し
      console.log("本日のノートを作成しました");
      setHasNote(true);
    } catch (error) {
      console.error("ノートの作成に失敗しました", error);
      // TODO: エラーハンドリング（toast通知など）
    } finally {
      setIsCreating(false);
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
  if (!hasNote) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">{today}</p>
          <h2 className="text-2xl font-bold mb-2">本日のワークアウト</h2>
          <p className="text-muted-foreground">
            ワークアウトを開始して記録を始めましょう
          </p>
        </div>
        <Button
          onClick={handleStartWorkout}
          disabled={isCreating}
          size="lg"
          className="gap-2"
        >
          <Play className="size-5" />
          {isCreating ? "開始中..." : "本日のワークアウトを開始する"}
        </Button>
      </div>
    );
  }

  // ノートが存在する場合は既存の表示
  return (
    <>
      <NoteTitle title="本日のノート" status="active" />
      <NoteMeta />
      <NoteActionsBar />
      <div className="grid gap-3 my-content-gap">
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
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
