import {
  InputField,
  RadioButton,
  RadioGroup,
  Select,
  TextArea,
  TextField,
  renderBodyPartOptions,
} from "@/components/form";

interface ExerciseFormFieldsProps {
  /** メモフィールドを非表示にするかどうか。デフォルトはfalse（表示する） */
  hideMemo?: boolean;
}

/**
 * 種目フォームの入力項目コンポーネント
 * 種目名、部位、動作パターン、メモの入力フィールドを提供します
 */
export const ExerciseFormFields = ({ hideMemo = false }: ExerciseFormFieldsProps) => {
  return (
    <>
      <InputField label="種目名" name="name" required>
        <TextField placeholder="ベンチプレス" />
      </InputField>
      <InputField label="部位" name="body_part">
        <Select>{renderBodyPartOptions({ placeholder: "選択してください" })}</Select>
      </InputField>
      <InputField label="動作パターン" name="laterality">
        <RadioGroup>
          <RadioButton value="bilateral">バイラテラル(両側同時)</RadioButton>
          <RadioButton value="unilateral">ユニラテラル(片側ずつ)</RadioButton>
        </RadioGroup>
      </InputField>
      {!hideMemo && (
        <InputField label="メモ" name="memo">
          <TextArea rows={4} />
        </InputField>
      )}
    </>
  );
};
