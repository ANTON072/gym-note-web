import { PageTitle, Table } from "@/components";
import { BodyPartSelect } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMutating } from "@tanstack/react-query";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useGetExercises } from "../hooks/useExerciseApi";
import type { Exercise } from "../schema";
import { DeleteExerciseButton } from "./DeleteExerciseButton";

export function ExerciseListPage() {
  const { data, isLoading, isFetched } = useGetExercises();
  const exercises: Exercise[] = Array.isArray(data) ? data : [];
  const isMutating = useIsMutating() > 0;

  const navigate = useNavigate({ from: "/exercises" });
  const { bodyPart: filteredBodyPart } = useSearch({ from: "/exercises/" });

  const filteredExercises = exercises.filter((exercise) => {
    if (!filteredBodyPart) {
      return true;
    }
    if (filteredBodyPart === "unset") {
      return !exercise.body_part || exercise.body_part === "";
    }
    return exercise.body_part === filteredBodyPart;
  });

  return (
    <>
      <PageTitle title="種目一覧" />
      <div className="mt-6 grid gap-1">
        <div className="flex items-end justify-between mb-3">
          <Field className="w-40">
            <FieldLabel>部位でフィルタ</FieldLabel>
            <BodyPartSelect
              disabled={isMutating}
              onValueChange={(value) => {
                navigate({
                  search: { bodyPart: value || undefined },
                });
              }}
              value={filteredBodyPart ?? ""}
              showAllOption
              showUnsetOption
            />
          </Field>
          <Button asChild>
            <Link to="/exercises/new">新規登録</Link>
          </Button>
        </div>
        {isLoading && !isFetched && (
          <div className="space-y-2">
            {Array.from({ length: 5 }, (_, i) => `skeleton-${i}`).map((id) => (
              <Skeleton key={id} className="h-10 w-full" />
            ))}
          </div>
        )}
        {isFetched && (
          <Table
            data={filteredExercises}
            columns={[
              {
                key: "name",
                header: "種目名",
                render: (exercise) => (
                  <Link
                    to="/exercises/$exerciseId"
                    params={{ exerciseId: exercise.id.toString() }}
                    search={true}
                  >
                    {exercise.name}
                  </Link>
                ),
                width: "55%",
              },
              {
                key: "body_part",
                header: "部位",
                render: (exercise) => exercise.body_part,
              },
              {
                key: "edit",
                header: "",
                render: (exercise) => <DeleteExerciseButton exerciseId={exercise.id} />,
              },
            ]}
            keyExtractor={(exercise) => exercise.id}
          />
        )}
      </div>
    </>
  );
}
