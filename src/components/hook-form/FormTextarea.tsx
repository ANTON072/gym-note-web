import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/shadcn/field";
import { Textarea } from "@/components/shadcn/textarea";
import { useId } from "react";
import { Controller } from "react-hook-form";

export interface FormTextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  rows?: number;
}

/**
 * React Hook Form用のテキストエリアコンポーネント
 *
 * @param name - フォーム内でのフィールド名
 * @param label - フィールドのラベルテキスト
 * @param placeholder - 入力欄のプレースホルダーテキスト
 * @param helperText - フィールドの補足説明テキスト
 * @param required - 入力必須かどうか
 * @param rows - テキストエリアの行数
 */
export const FormTextarea = ({
  name,
  label,
  placeholder,
  required,
  helperText,
  rows = 4,
}: FormTextareaProps) => {
  const id = useId();

  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Field>
          <FieldLabel htmlFor={id}>
            {label}
            {required && <span className="text-destructive">*</span>}
          </FieldLabel>
          <Textarea id={id} placeholder={placeholder} rows={rows} {...field} />
          {helperText && <FieldDescription>{helperText}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
