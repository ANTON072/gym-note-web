import { useState } from "react";

import { ConfirmDialog } from "@/components/ConfirmDialog";
import { Button } from "@/components/shadcn/button";
import { useLoaderData } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { NoteDetail } from "../components/NoteDetail";
import { useGetNote } from "../hooks/useNoteApi";

export const NoteTodayPage = () => {
  const loaderData = useLoaderData({ from: "/" });
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const todayNoteId = loaderData.id;

  const { data: note } = useGetNote(todayNoteId, {
    enabled: !!todayNoteId,
  });

  console.log("Today's Note:", note);

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
