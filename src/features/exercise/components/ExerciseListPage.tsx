import { PageTitle } from "@/components";
import { BodyPartSelect } from "@/components";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
      <div className="mt-4 grid gap-1">
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
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[55%] min-w-[200px]">種目名</TableHead>
                  <TableHead className="min-w-[100px]">部位</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExercises.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                      データがありません
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredExercises.map((exercise) => (
                    <TableRow key={exercise.id}>
                      <TableCell className="font-medium">
                        <Link
                          to="/exercises/$exerciseId"
                          params={{ exerciseId: exercise.id.toString() }}
                          search={true}
                          className="inline-flex items-center gap-2 text-primary"
                        >
                          <span className="truncate">{exercise.name}</span>
                        </Link>
                      </TableCell>
                      <TableCell>{exercise.body_part}</TableCell>
                      <TableCell>
                        <DeleteExerciseButton exerciseId={exercise.id} />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}
