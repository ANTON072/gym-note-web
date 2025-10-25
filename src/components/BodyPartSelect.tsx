import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/shadcn/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import { BODY_PART_OPTIONS } from "@/constants/bodyParts";
import { useId } from "react";
import type { FieldError as RHFFieldError } from "react-hook-form";

interface BodyPartSelectProps {
  id?: string;
  name?: string;
  label: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  showAllOption?: boolean;
  allOptionLabel?: string;
  showUnsetOption?: boolean;
  unsetOptionLabel?: string;
  placeholder?: string;
  error?: RHFFieldError;
  "aria-invalid"?: boolean;
}

/**
 * 部位選択フィールドのUIコンポーネント
 * React Hook Formに依存せず、直接値とコールバックを渡して使用できます
 *
 * @param id - フィールドのID（指定しない場合は自動生成）
 * @param name - フィールドのname属性
 * @param label - フィールドのラベルテキスト
 * @param value - 選択された値
 * @param onValueChange - 値が変更されたときのコールバック
 * @param disabled - 無効化フラグ
 * @param required - 入力必須かどうか
 * @param helperText - フィールドの補足説明テキスト
 * @param showAllOption - 「すべて」オプションを表示するかどうか
 * @param allOptionLabel - 「すべて」オプションのラベル
 * @param showUnsetOption - 「未設定」オプションを表示するかどうか
 * @param unsetOptionLabel - 「未設定」オプションのラベル
 * @param placeholder - プレースホルダーテキスト
 * @param error - エラーオブジェクト
 * @param aria-invalid - aria-invalid属性
 */
export const BodyPartSelect = ({
  id: providedId,
  name,
  label,
  value,
  onValueChange,
  disabled = false,
  required,
  helperText,
  showAllOption = false,
  allOptionLabel = "すべて",
  showUnsetOption = false,
  unsetOptionLabel = "未設定",
  placeholder = "選択してください",
  error,
  "aria-invalid": ariaInvalid,
}: BodyPartSelectProps) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  // 空文字列を"all"に変換し、undefinedの場合も"all"にする
  const selectValue = value || "all";

  const handleValueChange = (newValue: string) => {
    // "all"と"unset"を適切な値に変換
    if (newValue === "all") {
      onValueChange?.("");
    } else if (newValue === "unset") {
      onValueChange?.("unset");
    } else {
      onValueChange?.(newValue);
    }
  };

  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {label}
        {required && <span className="text-destructive">*</span>}
      </FieldLabel>
      <Select name={name} value={selectValue} onValueChange={handleValueChange} disabled={disabled}>
        <SelectTrigger id={id} aria-invalid={ariaInvalid}>
          <SelectValue placeholder={showAllOption ? allOptionLabel : placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          {showAllOption && (
            <>
              <SelectItem value="all">{allOptionLabel}</SelectItem>
              <SelectSeparator />
            </>
          )}
          {showUnsetOption && (
            <>
              <SelectItem value="unset">{unsetOptionLabel}</SelectItem>
              <SelectSeparator />
            </>
          )}
          {BODY_PART_OPTIONS.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {helperText && <FieldDescription>{helperText}</FieldDescription>}
      {error && <FieldError errors={[error]} />}
    </Field>
  );
};
