import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";

import { NoteTitle } from "./NoteTitle";

export const NoteTodayPage = () => {
  return (
    <>
      <NoteTitle title="本日のノート" status="active" />
      <NoteMeta />
      <NoteActionsBar />
      <div className="grid gap-3 my-content-gap">
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
