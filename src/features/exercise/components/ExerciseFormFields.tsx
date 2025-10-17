import { BodyPartSelect } from "@/components";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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
      <Field>
        <FieldLabel htmlFor="name">
          種目名<span className="text-destructive">*</span>
        </FieldLabel>
        <Input id="name" name="name" placeholder="ベンチプレス" required />
      </Field>

      <Field>
        <FieldLabel htmlFor="body_part">部位</FieldLabel>
        <BodyPartSelect
          showUnsetOption
          id="body_part"
          name="body_part"
          placeholder="選択してください"
        />
      </Field>

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
