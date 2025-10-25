import { useState } from "react";

import { DeleteConfirmDialog } from "@/components/DeleteConfirmDialog";
import { ActionMenuDrawer, type ActionMenuItem } from "@/components/shadcn/action-menu-drawer";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";
import { MoreVerticalIcon, PencilIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { SetFormDialog } from "./SetFormDialog";
import { SetItem } from "./SetItem";

export const ExerciseListItem = () => {
  // 仮のデータ（後でpropsから受け取るように変更）
  const sets = [
    { id: 1, weight: 100, reps: 10 },
    { id: 2, weight: 100, reps: 8 },
    { id: 3, weight: 90, reps: 10 },
  ];
  // TODO: propsから受け取るように変更
  const noteId = "1";
  const exerciseId = "1";

  const [editingSetId, setEditingSetId] = useState<number | null>(null);
  const [deletingSetId, setDeletingSetId] = useState<number | null>(null);
  const [isDeletingExercise, setIsDeletingExercise] = useState(false);

  const exerciseActions: ActionMenuItem[] = [
    {
      label: "編集",
      icon: <PencilIcon className="size-4 mr-2" />,
      to: "/notes/$noteId/exercise/$exerciseId",
      params: { noteId, exerciseId },
    },
    {
      label: "削除",
      icon: <Trash2Icon className="size-4 mr-2" />,
      onClick: () => setIsDeletingExercise(true),
      variant: "destructive",
    },
  ];

  const handleAddSet = (data: { weight: number; reps: number }) => {
    console.log("セットを追加:", data);
    // TODO: セット追加処理を実装
  };

  const handleEditSet = (id: number, data: { weight: number; reps: number }) => {
    console.log(`セット${id}を編集:`, data);
    // TODO: セット編集処理を実装
    setEditingSetId(null);
  };

  const handleDeleteSet = (id: number) => {
    console.log(`セット${id}を削除`);
    // TODO: セット削除処理を実装
    setDeletingSetId(null);
  };

  const handleDeleteExercise = () => {
    console.log("種目を削除");
    // TODO: 種目削除処理を実装
    setIsDeletingExercise(false);
  };

  return (
    <Card className="!border-stone-300 gap-1 pb-2 relative">
      <ActionMenuDrawer
        title="種目の編集・削除"
        trigger={
          <Button
            size="icon-sm"
            variant="ghost"
            className="absolute top-2 right-2"
            aria-label="メニューを開く"
          >
            <MoreVerticalIcon className="size-3.5 text-gray-500" />
          </Button>
        }
        actions={exerciseActions}
      />
      <CardHeader className="px-3">
        <CardTitle className="text-lg font-bold">1. ベンチプレス</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <div className="grid">
          {sets.map((set, index) => {
            const editingSet = editingSetId === set.id ? set : null;
            return (
              <div key={set.id} className="border-b border-stone-200 last:border-b-0">
                <SetItem
                  index={index + 1}
                  weight={set.weight}
                  reps={set.reps}
                  onEdit={() => setEditingSetId(set.id)}
                  onDelete={() => setDeletingSetId(set.id)}
                />
                {editingSet && (
                  <SetFormDialog
                    title="セットを編集"
                    submitLabel="更新"
                    initialValues={{ weight: editingSet.weight, reps: editingSet.reps }}
                    open={editingSetId === set.id}
                    onOpenChange={(open) => !open && setEditingSetId(null)}
                    onSubmit={(data) => handleEditSet(set.id, data)}
                  />
                )}
              </div>
            );
          })}
          <div className="flex justify-end items-center pt-3">
            <SetFormDialog
              trigger={
                <Button variant="secondary" size="sm">
                  セットの追加
                  <PlusCircleIcon />
                </Button>
              }
              onSubmit={handleAddSet}
            />
          </div>
        </div>
      </CardContent>
      <DeleteConfirmDialog
        open={deletingSetId !== null}
        onOpenChange={(open) => !open && setDeletingSetId(null)}
        onConfirm={() => deletingSetId && handleDeleteSet(deletingSetId)}
        title="セットを削除しますか？"
        description="この操作は取り消せません。本当にこのセットを削除しますか？"
      />
      <DeleteConfirmDialog
        open={isDeletingExercise}
        onOpenChange={(open) => !open && setIsDeletingExercise(false)}
        onConfirm={handleDeleteExercise}
        title="種目を削除しますか？"
        description="この操作は取り消せません。本当にこの種目とすべてのセットを削除しますか？"
      />
    </Card>
  );
};
