import { Button, PageTitle } from "@/components";

import { GoChevronLeft } from "react-icons/go";

import { ExerciseForm } from "./ExerciseForm";
import styles from "./Exercises.module.css";

export const ExerciseNewPage = () => {
  return (
    <>
      <PageTitle title="種目の新規作成" />
      <div className={styles.wrapper}>
        <div className={styles.indexForm}>
          <div />
          <Button to="/exercises" startIcon={<GoChevronLeft />}>
            一覧に戻る
          </Button>
        </div>
        <ExerciseForm />
      </div>
    </>
  );
};
