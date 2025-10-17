import { Button, PageTitle } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";

import { useParams } from "@tanstack/react-router";
import { GoChevronLeft } from "react-icons/go";

import { NotFound } from "@/components/NotFound";
import { useGetExercise } from "../hooks/useExerciseApi";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./Exercises.module.css";

export const ExerciseEditPage = () => {
  const { exerciseId } = useParams({ from: "/exercises/$exerciseId" });

  const exerciseIdNumber = Number(exerciseId);

  const { data: exercise, isPending, isError } = useGetExercise(exerciseIdNumber);

  if (Number.isNaN(exerciseIdNumber) || isError) {
    return <NotFound />;
  }

  return (
    <>
      <PageTitle title="種目の編集" />
      <div className={styles.Exercises}>
        <div className={styles.Exercises__filter}>
          <div />
          <Button to="/exercises" search={true} startIcon={<GoChevronLeft />}>
            一覧に戻る
          </Button>
        </div>
        {isPending ? (
          <div className="space-y-2.5">
            {Array.from({ length: 5 }, (_, i) => `skeleton-${i}`).map((id) => (
              <Skeleton key={id} className="h-10 w-full" />
            ))}
          </div>
        ) : (
          <ExerciseForm defaultValues={exercise} exerciseId={exerciseIdNumber} />
        )}
      </div>
    </>
  );
};
