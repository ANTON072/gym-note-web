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
import styles from "./exercises.module.css";

import { Button } from "@/components";
import { useToast } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import { useCreateExercise } from "../hooks/useExerciseApi";
import type { ExerciseFormData } from "../schema";
import { exerciseFormSchema } from "../schema";

interface Props {
  isEdit?: boolean;
  onClose: () => void;
}

export const ExerciseForm = ({ isEdit = false, onClose }: Props) => {
  const toast = useToast();
  const query = useQueryClient();

  const createMutation = useCreateExercise({
    onSuccess: () => {
      query.invalidateQueries({ queryKey: [QUERY_KEY_EXERCISES] });
      toast.add({
        message: "種目を登録しました",
      });
      onClose();
    },
    onError: (error) => {
      toast.add({
        message: `種目の登録に失敗しました: ${error.message}`,
        type: "error",
      });
    },
  });

  const defaultValues = {
    laterality: "bilateral" as const,
  };

  const form = useForm<ExerciseFormData>({
    resolver: zodResolver(exerciseFormSchema),
    defaultValues,
  });

  const onSubmit = (values: ExerciseFormData) => {
    createMutation.mutate(values);
  };

  return (
    <FormProvider {...form}>
      <form id="exercise-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className={styles.formGrid}>
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
        <div className={styles.formActions}>
          <Button type="button" variant="outlined" onClick={onClose}>
            キャンセル
          </Button>
          <Button type="submit" form="exercise-form">
            登録
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
