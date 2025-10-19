import type { NoteStatus } from "../constants/noteStatus";
import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";
import { NoteTitle } from "./NoteTitle";

type NoteDetailProps = {
  title: string;
  status: NoteStatus;
  // TODO: exercises配列を受け取るようにする
};

export const NoteDetail = ({ title, status }: NoteDetailProps) => {
  return (
    <>
      <NoteTitle title={title} status={status} />
      <NoteMeta />
      <NoteActionsBar />
      <div className="grid gap-3 my-content-gap">
        {/* TODO: exercisesをmapで表示 */}
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
