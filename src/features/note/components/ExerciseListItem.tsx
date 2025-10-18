import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon, PencilIcon, PlusCircleIcon, Trash2Icon } from "lucide-react";
import { SetFormDialog } from "./SetFormDialog";

export const ExerciseListItem = () => {
  // 仮のデータ（後でpropsから受け取るように変更）
  const sets = [
    { id: 1, weight: 100, reps: 10 },
    { id: 2, weight: 100, reps: 8 },
    { id: 3, weight: 90, reps: 10 },
  ];

  const [editingSetId, setEditingSetId] = useState<number | null>(null);
  const [deletingSetId, setDeletingSetId] = useState<number | null>(null);

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

  return (
    <Card className="!border-stone-300 gap-1 pb-2 relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon-sm"
            variant="ghost"
            className="absolute top-2 right-2"
            aria-label="More Options"
          >
            <MoreHorizontalIcon className="size-3.5 text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Trash2Icon className="size-4 mr-2" />
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CardHeader className="px-3">
        <CardTitle className="text-lg font-bold">1. ベンチプレス</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <div className="grid">
          {sets.map((set, index) => {
            const editingSet = editingSetId === set.id ? set : null;
            return (
              <div
                key={set.id}
                className="grid grid-cols-[minmax(3rem,auto)_1fr_auto] py-2 gap-2 border-b border-stone-200 last:border-b-0 items-center"
              >
                <div className="text-stone-500">{index + 1}セット</div>
                <div className="flex items-center gap-2">
                  <div>{set.weight}kg</div>
                  <div>×</div>
                  <div>{set.reps}回</div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm" aria-label="メニューを開く">
                      <MoreHorizontalIcon className="size-4 text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setEditingSetId(set.id)}>
                      <PencilIcon className="size-4 mr-2" />
                      編集
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onSelect={() => setDeletingSetId(set.id)}
                    >
                      <Trash2Icon className="size-4 mr-2" />
                      削除
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
      <AlertDialog
        open={deletingSetId !== null}
        onOpenChange={(open) => !open && setDeletingSetId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>セットを削除しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              この操作は取り消せません。本当にこのセットを削除しますか？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingSetId && handleDeleteSet(deletingSetId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              削除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};
