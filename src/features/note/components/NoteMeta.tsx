import { useState } from "react";

import { Pencil } from "lucide-react";
import { NoteMetaFormDialog } from "./NoteMetaFormDialog";

export const NoteMeta = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (values: {
    date: Date;
    start_time?: string;
    end_time?: string;
    place?: string;
    memo?: string;
  }) => {
    console.log("メタ情報を更新:", values);
    // TODO: メタ情報更新処理を実装
  };

  return (
    <>
      <div className="relative grid grid-cols-[auto_auto_auto] gap-content-gap p-content-gap mb-3 bg-blue-100 rounded-sm text-sm border-blue-200 border">
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="absolute inset-0 border-0 bg-transparent cursor-pointer"
        >
          <Pencil className="absolute right-4 top-3 size-3.5 text-gray-500" />
        </button>
        <div>2025年10月6日(月)</div>
        <div>開始: 12:00</div>
        <div />
        <div className="col-span-3">場所: クラブオーサム西国分寺</div>
      </div>
      <NoteMetaFormDialog open={isEditing} onOpenChange={setIsEditing} onSubmit={handleSubmit} />
    </>
  );
};
