import type { NoteStatus } from "../constants/noteStatus";
import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";
import { NoteTitle } from "./NoteTitle";

type NoteDetailProps = {
  noteId: number;
  title: string;
  status: NoteStatus;
  // TODO: exercises配列を受け取るようにする
};

export const NoteDetail = ({ noteId, title, status }: NoteDetailProps) => {
  return (
    <>
      <NoteTitle title={title} status={status} />
      <NoteMeta noteId={noteId} />
      <NoteActionsBar noteId={noteId} />
      <div className="grid gap-3 my-3">
        {/* TODO: exercisesをmapで表示 */}
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
