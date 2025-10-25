import { PageTitle } from "@/components";
import { NotFound } from "@/components/NotFound";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useParams } from "@tanstack/react-router";
import { ExerciseForm } from "../components/ExerciseForm";
import { ExercisePageLayout } from "../components/ExercisePageLayout";
import { useGetExercise } from "../hooks/useExerciseApi";

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
      <ExercisePageLayout>
        {isPending ? (
          <div className="space-y-2.5">
            {Array.from({ length: 5 }, (_, i) => `skeleton-${i}`).map((id) => (
              <Skeleton key={id} className="h-10 w-full" />
            ))}
          </div>
        ) : (
          <ExerciseForm defaultValues={exercise} exerciseId={exerciseIdNumber} />
        )}
      </ExercisePageLayout>
    </>
  );
};
