import { InputField, Select, TextArea, TextField } from "@/components/form";
import styles from "./exercises.module.css";

export const ExerciseForm = () => {
  return (
    <div className={styles.formGrid}>
      <InputField label="種目名" required>
        <TextField name="name" placeholder="ベンチプレス" />
      </InputField>
      <InputField label="部位" required>
        <Select name="bodyPart">
          <option value="legs">脚</option>
          <option value="back">背中</option>
          <option value="shoulders">肩</option>
          <option value="arms">腕</option>
          <option value="chest">胸</option>
          <option value="cardio">有酸素</option>
        </Select>
      </InputField>
      <InputField label="動作パターン" required>
        <Select name="laterality">
          <option value="bilateral">バイラテラル(両側同時)</option>
          <option value="unilateral">ユニラテラル(片側ずつ)</option>
        </Select>
      </InputField>
      <InputField label="メモ">
        <TextArea name="memo" rows={4} />
      </InputField>
    </div>
  );
};
