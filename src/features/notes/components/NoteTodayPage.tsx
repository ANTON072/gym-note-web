import { Button, PageTitle } from "@/components";
import { GoPlusCircle } from "react-icons/go";

import { ExerciseListItem } from "./ExerciseListItem";
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--container-padding)",
        }}
      >
        <Button variant="text" startIcon={<GoPlusCircle />}>
          種目を追加
        </Button>
        <Button variant="outlined" size="small">
          並び変え
        </Button>
      </div>
      <div className={styles.ExerciseList}>
        <ExerciseListItem />
        <ExerciseListItem />
      </div>
    </>
  );
};
