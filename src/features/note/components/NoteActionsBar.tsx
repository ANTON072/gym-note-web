import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { History, PlusCircle } from "lucide-react";

export const NoteActionsBar = () => {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[var(--size-2)] mb-[var(--container-padding)]">
        <Button asChild variant="secondary" className="justify-self-start" size="sm">
          <Link to="/notes/today/add-exercise">
            <PlusCircle />
            種目を追加
          </Link>
        </Button>
        <Button variant="ghost" size="sm">
          <History />
          前回のノート
        </Button>
      </div>
    </>
  );
};
