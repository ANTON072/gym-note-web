import {
  InputField,
  RadioButton,
  RadioGroup,
  Select,
  TextArea,
  TextField,
} from "@/components/form";
import { BODY_PART_OPTIONS } from "@/constants/bodyParts";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./Exercises.module.css";

import { Button, MutateButton } from "@/components";
import { useToast } from "@/hooks";
import { handleFormError } from "@/lib/formError";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useCreateExercise, useUpdateExercise } from "../hooks/useExerciseApi";
import type { ExerciseFormData } from "../schema";
import { exerciseFormSchema } from "../schema";
import { DeleteExerciseButton } from "./DeleteExerciseButton";

interface Props {
  exerciseId?: number | null;
  defaultValues?: Partial<ExerciseFormData>;
}

export const ExerciseForm = ({ exerciseId, defaultValues }: Props) => {
  const toast = useToast();
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
    toast.add({ message });
    returnToList();
  };

  const handleMutationError = (error: Error, action: string) => {
    toast.add({
      message: `${action}に失敗しました: ${error.message}`,
      type: "error",
    });
  };

  const handleFormMutationError = (error: Error, action: string) => {
    handleFormError({
      error,
      setError: form.setError,
      onValidationError: () => {
        toast.add({
          message: "入力内容を確認してください",
          type: "error",
        });
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
        <div className={styles.Exercises__formGrid}>
          <InputField label="部位" name="body_part" required>
            <Select>
              <option value="">選択してください</option>
              {BODY_PART_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </InputField>
          <InputField label="種目名" name="name" required>
            <TextField placeholder="ベンチプレス" />
          </InputField>
          <InputField label="動作パターン" name="laterality" required>
            <RadioGroup>
              <RadioButton value="bilateral">バイラテラル(両側同時)</RadioButton>
              <RadioButton value="unilateral">ユニラテラル(片側ずつ)</RadioButton>
            </RadioGroup>
          </InputField>
          <InputField label="メモ" name="memo">
            <TextArea rows={4} />
          </InputField>
        </div>
        {isEdit ? (
          <div className={styles.Exercises__actions}>
            <Button to="/exercises" search={true} variant="outlined">
              キャンセル
            </Button>
            <MutateButton type="submit">更新</MutateButton>
            <div />
            <div className={styles.Exercises__deleteAction}>
              <DeleteExerciseButton
                exerciseId={exerciseId}
                onDeleted={() => {
                  returnToList();
                }}
              />
            </div>
          </div>
        ) : (
          <div className={styles.Exercises__actions}>
            <Button to="/exercises" search={true} variant="outlined">
              キャンセル
            </Button>
            <MutateButton type="submit">登録</MutateButton>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
