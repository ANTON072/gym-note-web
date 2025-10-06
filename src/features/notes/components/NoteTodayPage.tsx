import { PageTitle } from "@/components";

import { ExerciseListItem } from "./ExerciseListItem";
import { NoteMeta } from "./NoteMeta";

import styles from "./NoteTodayPage.module.css";

export const NoteTodayPage = () => {
  return (
    <>
      <PageTitle title="本日のノート" />
      <NoteMeta />
      <div className={styles.ExerciseList}>
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
      <div>種目の追加</div>
    </>
  );
};
