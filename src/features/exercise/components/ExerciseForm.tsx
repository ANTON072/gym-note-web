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
import { useForm } from "react-hook-form";
import styles from "./exercises.module.css";

import { Button } from "@/components";
import type { ExerciseFormData } from "../schema";
import { exerciseFormSchema } from "../schema";

interface Props {
  isEdit?: boolean;
  onClose: () => void;
}

export const ExerciseForm = ({ isEdit = false, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExerciseFormData>({
    resolver: zodResolver(exerciseFormSchema),
    defaultValues: {},
  });

  const onSubmit = () => {
    //
  };

  return (
    <form id="exercise-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.formGrid}>
        <InputField label="部位" required error={errors.body_part?.message}>
          <Select {...register("body_part")}>
            <option value="">選択してください</option>
            {BODY_PART_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </InputField>
        <InputField label="種目名" required error={errors.name?.message}>
          <TextField {...register("name")} placeholder="ベンチプレス" />
        </InputField>
        <InputField label="動作パターン" required error={errors.laterality?.message}>
          <RadioGroup {...register("laterality")}>
            <RadioButton value="bilateral">バイラテラル(両側同時)</RadioButton>
            <RadioButton value="unilateral">ユニラテラル(片側ずつ)</RadioButton>
          </RadioGroup>
        </InputField>
        <InputField label="メモ" error={errors.memo?.message}>
          <TextArea {...register("memo")} rows={4} />
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
  );
};
