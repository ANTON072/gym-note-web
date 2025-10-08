import { ExerciseListItem } from "./ExerciseListItem";
import { NoteActionsBar } from "./NoteActionsBar";
import { NoteMeta } from "./NoteMeta";

import { NoteTitle } from "./NoteTitle";
import styles from "./NoteTodayPage.module.css";

export const NoteTodayPage = () => {
  return (
    <>
      <div
        style={{
          marginBottom: "calc(var(--container-padding) * 2)",
        }}
      >
        <NoteTitle title="本日のノート" status="active" />
      </div>
      <NoteMeta />
      <NoteActionsBar />
      <div className={styles.ExerciseList}>
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
