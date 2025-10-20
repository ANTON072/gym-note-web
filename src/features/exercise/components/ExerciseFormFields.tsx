import { FormBodyPartSelect, FormTextField } from "@/components/hook-form";
import { Field, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

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

      <Field>
        <FieldLabel htmlFor="laterality">動作パターン</FieldLabel>
        <RadioGroup name="laterality">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="bilateral" id="bilateral" />
            <Label htmlFor="bilateral" className="font-normal cursor-pointer">
              バイラテラル(両側同時)
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="unilateral" id="unilateral" />
            <Label htmlFor="unilateral" className="font-normal cursor-pointer">
              ユニラテラル(片側ずつ)
            </Label>
          </div>
        </RadioGroup>
      </Field>

      {!hideMemo && (
        <Field>
          <FieldLabel htmlFor="memo">メモ</FieldLabel>
          <Textarea id="memo" name="memo" rows={4} />
        </Field>
      )}
    </>
  );
};
