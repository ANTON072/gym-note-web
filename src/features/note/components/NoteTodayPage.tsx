import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";

import { NoteProvider, useNoteContext } from "../contexts/NoteContext";
import { NoteMetaForm } from "./NoteMetaForm";
import { NoteTitle } from "./NoteTitle";
import styles from "./NoteTodayPage.module.css";

const Contents = () => {
  const { displayComponentId } = useNoteContext();

  if (displayComponentId !== null) return null;

  return (
    <div>
      <NoteMeta />
      <NoteActionsBar />
      <div className={styles.NoteTodayPage__exerciseList}>
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
      <NoteMetaForm />
    </NoteProvider>
  );
};
