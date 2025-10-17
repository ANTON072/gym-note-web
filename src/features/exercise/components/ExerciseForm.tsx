import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { MutateButton } from "@/components";
import { Button } from "@/components/ui/button";
import { handleFormError } from "@/lib/formError";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useCreateExercise, useUpdateExercise } from "../hooks/useExerciseApi";
import type { ExerciseFormData } from "../schema";
import { exerciseFormSchema } from "../schema";
import { DeleteExerciseButton } from "./DeleteExerciseButton";
import { ExerciseFormFields } from "./ExerciseFormFields";

interface Props {
  exerciseId?: number | null;
  defaultValues?: Partial<ExerciseFormData>;
}

export const ExerciseForm = ({ exerciseId, defaultValues }: Props) => {
  const query = useQueryClient();
  const navigate = useNavigate();

  const isEdit = typeof exerciseId === "number";

  const returnToList = () => {
    // 新規作成時はクエリパラメータなし、編集時は引き継ぐ
    navigate({ to: "/exercises", search: isEdit ? true : undefined });
  };

  const form = useForm<ExerciseFormData>({
    resolver: zodResolver(exerciseFormSchema),
    defaultValues,
  });

  const handleMutationSuccess = (message: string) => {
    query.invalidateQueries({ queryKey: [QUERY_KEY_EXERCISES] });
    toast.success(message);
    returnToList();
  };

  const handleMutationError = (error: Error, action: string) => {
    toast.error(`${action}に失敗しました: ${error.message}`);
  };

  const handleFormMutationError = (error: Error, action: string) => {
    handleFormError({
      error,
      setError: form.setError,
      onValidationError: () => {
        toast.error("入力内容を確認してください");
      },
      onOtherError: (error) => handleMutationError(error, action),
    });
  };

  const createMutation = useCreateExercise({
    onSuccess: () => handleMutationSuccess("種目を登録しました"),
    onError: (error: Error) => handleFormMutationError(error, "種目の登録"),
  });

  const updateMutation = useUpdateExercise({
    onSuccess: () => handleMutationSuccess("種目を更新しました"),
    onError: (error: Error) => handleFormMutationError(error, "種目の更新"),
  });

  const onSubmit = (values: ExerciseFormData) => {
    if (isEdit && exerciseId) {
      updateMutation.mutate({ id: exerciseId, data: values });
      return;
    }
    createMutation.mutate(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-4">
          <ExerciseFormFields />
        </div>
        {isEdit ? (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" asChild>
              <Link to="/exercises" search={true}>
                キャンセル
              </Link>
            </Button>
            <MutateButton type="submit">更新</MutateButton>
            <div />
            <div className="flex items-center justify-end p-4">
              <DeleteExerciseButton
                exerciseId={exerciseId}
                onDeleted={() => {
                  returnToList();
                }}
              />
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" asChild>
              <Link to="/exercises" search={true}>
                キャンセル
              </Link>
            </Button>
            <MutateButton type="submit">登録</MutateButton>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
