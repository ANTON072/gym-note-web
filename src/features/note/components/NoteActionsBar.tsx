import { Button } from "@/components/ui/button";
import { History, PlusCircle } from "lucide-react";
import { useNoteContext } from "../contexts/NoteContext";

export const NoteActionsBar = () => {
  const { setDisplayComponentId } = useNoteContext();

  return (
    <>
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[var(--size-2)] mb-[var(--container-padding)]">
        <Button
          variant="secondary"
          className="justify-self-start"
          size="sm"
          onClick={() => setDisplayComponentId("add_exercise")}
        >
          <PlusCircle />
          種目を追加
        </Button>
        <Button variant="ghost" size="sm">
          <History />
          前回のノート
        </Button>
      </div>
    </>
  );
};
