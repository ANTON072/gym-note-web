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
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { MoreHorizontalIcon, PencilIcon, PlusCircleIcon, Trash2Icon, XIcon } from "lucide-react";
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
  const [isDeletingExercise, setIsDeletingExercise] = useState(false);
  const [openMenuSetId, setOpenMenuSetId] = useState<number | null>(null);

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
      <Button
        size="icon-sm"
        variant="ghost"
        className="absolute top-2 right-2"
        aria-label="種目を削除"
        onClick={() => setIsDeletingExercise(true)}
      >
        <XIcon className="size-3.5 text-gray-500" />
      </Button>
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
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="メニューを開く"
                  onClick={() => setOpenMenuSetId(set.id)}
                >
                  <MoreHorizontalIcon className="size-4 text-gray-500" />
                </Button>
                <Drawer
                  open={openMenuSetId === set.id}
                  onOpenChange={(open) => !open && setOpenMenuSetId(null)}
                >
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>セットの編集・削除</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => {
                          setEditingSetId(set.id);
                          setOpenMenuSetId(null);
                        }}
                      >
                        <PencilIcon className="size-4 mr-2" />
                        編集
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => {
                          setDeletingSetId(set.id);
                          setOpenMenuSetId(null);
                        }}
                      >
                        <Trash2Icon className="size-4 mr-2" />
                        削除
                      </Button>
                    </div>
                  </DrawerContent>
                </Drawer>
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
      <AlertDialog
        open={isDeletingExercise}
        onOpenChange={(open) => !open && setIsDeletingExercise(false)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>種目を削除しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              この操作は取り消せません。本当にこの種目とすべてのセットを削除しますか？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteExercise}
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
