import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";

import { NoteProvider, useNoteContext } from "../contexts/NoteContext";
import { AddExerciseForm } from "./AddExerciseForm";
import { NoteTitle } from "./NoteTitle";

const Contents = () => {
  const { displayComponentId } = useNoteContext();

  if (displayComponentId !== null) return null;

  return (
    <div>
      <NoteMeta />
      <NoteActionsBar />
      <div className="grid gap-3 my-content-gap">
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </div>
  );
};

export const NoteTodayPage = () => {
  return (
    <NoteProvider>
      <NoteTitle title="本日のノート" status="active" />
      <Contents />
      <AddExerciseForm />
    </NoteProvider>
  );
};
