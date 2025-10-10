import { Button, PageTitle } from "@/components";

import { useParams } from "@tanstack/react-router";
import { GoChevronLeft } from "react-icons/go";

import { NotFound } from "@/components/NotFound";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./Exercises.module.css";

export const ExerciseEditPage = () => {
  const { exerciseId } = useParams({ from: "/exercises/$exerciseId" });

  const exerciseIdNumber = Number(exerciseId);
  if (Number.isNaN(exerciseIdNumber)) {
    return <NotFound />;
  }

  return (
    <>
      <PageTitle title="種目の編集" />
      <div className={styles.wrapper}>
        <div className={styles.indexForm}>
          <div />
          <Button to="/exercises" startIcon={<GoChevronLeft />}>
            一覧に戻る
          </Button>
        </div>
        <ExerciseForm exerciseId={exerciseIdNumber} />
      </div>
    </>
  );
};
