import { Button } from "@/components/ui/button";
import { History, PlusCircle } from "lucide-react";
import { ExerciseFormDialog } from "./ExerciseFormDialog";

export const NoteActionsBar = () => {
  const handleAddExercise = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("種目を追加:", e);
    // TODO: 種目追加処理を実装
  };

  return (
    <>
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[var(--size-2)] mb-[var(--container-padding)]">
        <ExerciseFormDialog
          trigger={
            <Button variant="secondary" className="justify-self-start" size="sm">
              <PlusCircle />
              種目を追加
            </Button>
          }
          onSubmit={handleAddExercise}
        />
        <Button variant="ghost" size="sm">
          <History />
          前回のノート
        </Button>
      </div>
    </>
  );
};
