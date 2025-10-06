import { Button, PageTitle } from "@/components";
import { GoPlusCircle } from "react-icons/go";

import { ExerciseListItem } from "./ExerciseListItem";
import { NoteMeta } from "./NoteMeta";

import styles from "./NoteTodayPage.module.css";

export const NoteTodayPage = () => {
  return (
    <>
      <PageTitle title="本日のノート" />
      <NoteMeta />
      <Button variant="text" startIcon={<GoPlusCircle />}>
        種目を追加
      </Button>
      <div className={styles.ExerciseList}>
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
