import { PageTitle } from "@/components";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Link, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

import { NotFound } from "@/components/NotFound";
import { useGetExercise } from "../hooks/useExerciseApi";
import { ExerciseForm } from "./ExerciseForm";

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
      <div className="mt-6 grid gap-4">
        <div className="flex items-center justify-between">
          <div />
          <Button variant="outline" asChild>
            <Link to="/exercises" search={true}>
              <ChevronLeft />
              一覧に戻る
            </Link>
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
