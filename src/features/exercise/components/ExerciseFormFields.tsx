import {
  FormBodyPartSelect,
  FormRadioGroup,
  FormTextField,
  FormTextarea,
} from "@/components/hook-form";

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
      <FormTextField name="name" label="種目名" placeholder="種目名を入力してください" required />
      <FormBodyPartSelect name="body_part" label="部位" showUnsetOption />
      <FormRadioGroup
        name="laterality"
        label="動作パターン"
        options={[
          { value: "bilateral", label: "バイラテラル(両側同時)" },
          { value: "unilateral", label: "ユニラテラル(片側ずつ)" },
        ]}
      />
      {!hideMemo && <FormTextarea name="memo" label="メモ" rows={4} />}
    </>
  );
};
