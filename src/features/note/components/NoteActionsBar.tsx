import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";

type NoteActionsBarProps = {
  noteId: string;
};

export const NoteActionsBar = ({ noteId }: NoteActionsBarProps) => {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto_auto] items-center gap-[var(--size-2)] mb-[var(--container-padding)]">
        <Button asChild variant="secondary" className="justify-self-start" size="sm">
          <Link to="/notes/$noteId/add-exercise" params={{ noteId }}>
            <PlusCircle />
            種目を追加
          </Link>
        </Button>
        {/* MEMO: MVPでは実装しない */}
        {/* <Button variant="ghost" size="sm">
          <History />
          前回のノート
        </Button> */}
      </div>
    </>
  );
};
