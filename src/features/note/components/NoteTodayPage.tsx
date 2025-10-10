import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";

import styles from "./Note.module.css";
import { NoteTitle } from "./NoteTitle";

export const NoteTodayPage = () => {
  return (
    <>
      <NoteTitle title="本日のノート" status="active" />
      <NoteMeta />
      <NoteActionsBar />
      <div className={styles.ExerciseList}>
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
