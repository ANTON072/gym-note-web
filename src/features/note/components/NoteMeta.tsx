import { Link } from "@tanstack/react-router";
import { Pencil } from "lucide-react";

type NoteMetaProps = {
  noteId: string;
};

export const NoteMeta = ({ noteId }: NoteMetaProps) => {
  return (
    <>
      <div className="relative grid grid-cols-[auto_auto_auto] gap-content-gap p-content-gap mb-3 bg-blue-100 rounded-sm text-sm border-blue-200 border">
        <Link
          to="/notes/$noteId/meta"
          params={{ noteId }}
          className="absolute right-4 top-3 border-0 bg-transparent cursor-pointer"
        >
          <Pencil className="size-3.5 text-gray-500" />
        </Link>
        <div>2025年10月6日(月)</div>
        <div>開始: 12:00</div>
        <div />
        <div className="col-span-3">場所: クラブオーサム西国分寺</div>
      </div>
    </>
  );
};
