import { BodyPartSelect } from "@/components/BodyPartSelect";
import { Controller } from "react-hook-form";

export interface FormBodyPartSelectProps {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
  showAllOption?: boolean;
  allOptionLabel?: string;
  showUnsetOption?: boolean;
  unsetOptionLabel?: string;
  placeholder?: string;
}

/**
 * React Hook Form用の部位選択フィールドコンポーネント
 *
 * @param name - フォーム内でのフィールド名
 * @param label - フィールドのラベルテキスト
 * @param required - 入力必須かどうか
 * @param helperText - フィールドの補足説明テキスト
 * @param showAllOption - 「すべて」オプションを表示するかどうか
 * @param allOptionLabel - 「すべて」オプションのラベル
 * @param showUnsetOption - 「未設定」オプションを表示するかどうか
 * @param unsetOptionLabel - 「未設定」オプションのラベル
 * @param placeholder - プレースホルダーテキスト
 */
export const FormBodyPartSelect = ({
  name,
  label,
  required,
  helperText,
  showAllOption = false,
  allOptionLabel = "すべて",
  showUnsetOption = false,
  unsetOptionLabel = "未設定",
  placeholder = "選択してください",
}: FormBodyPartSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <BodyPartSelect
          name={field.name}
          label={label}
          value={field.value}
          onValueChange={field.onChange}
          disabled={field.disabled}
          required={required}
          helperText={helperText}
          showAllOption={showAllOption}
          allOptionLabel={allOptionLabel}
          showUnsetOption={showUnsetOption}
          unsetOptionLabel={unsetOptionLabel}
          placeholder={placeholder}
          error={fieldState.error}
          aria-invalid={fieldState.invalid}
        />
      )}
    />
  );
};
