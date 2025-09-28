import {
  InputField,
  RadioButton,
  RadioGroup,
  Select,
  TextArea,
  TextField,
} from "@/components/form";
import { BODY_PART_OPTIONS } from "@/constants/bodyParts";
import styles from "./exercises.module.css";

import type { FormState } from "@/types";
import type { Exercise } from "../schema";

interface Props {
  defaultValues?: Partial<Exercise>;
  state?: FormState;
}

export const ExerciseForm = ({ defaultValues = {}, state }: Props) => {
  return (
    <>
      <div className={styles.formGrid}>
        {/* {state?.message && (
          <div className={state.success ? styles.successMessage : styles.errorMessage}>
            {state.message}
          </div>
        )} */}
        <InputField label="部位" required error={state?.errors?.bodyPart}>
          <Select name="bodyPart" defaultValue={defaultValues.bodyPart || ""}>
            <option value="">選択してください</option>
            {BODY_PART_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </InputField>
        <InputField label="種目名" required error={state?.errors?.name}>
          <TextField
            name="name"
            placeholder="ベンチプレス"
            defaultValue={defaultValues.name || ""}
          />
        </InputField>
        <InputField label="動作パターン" required error={state?.errors?.laterality}>
          <RadioGroup name="laterality" defaultValue={defaultValues.laterality}>
            <RadioButton value="bilateral">バイラテラル(両側同時)</RadioButton>
            <RadioButton value="unilateral">ユニラテラル(片側ずつ)</RadioButton>
          </RadioGroup>
        </InputField>
        <InputField label="メモ">
          <TextArea name="memo" rows={4} defaultValue={defaultValues.memo || ""} />
        </InputField>
      </div>
    </>
  );
};
