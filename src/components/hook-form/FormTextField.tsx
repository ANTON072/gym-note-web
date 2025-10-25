import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/shadcn/field";
import { Input } from "@/components/shadcn/input";
import { useId } from "react";
import { Controller } from "react-hook-form";

export interface FormTextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
}

/**
 * React Hook Form用のテキスト入力フィールドコンポーネント
 *
 * @param name - フォーム内でのフィールド名
 * @param label - フィールドのラベルテキスト
 * @param placeholder - 入力欄のプレースホルダーテキスト
 * @param helperText - フィールドの補足説明テキスト
 * @param required - 入力必須かどうか
 */

export const FormTextField = ({
  name,
  label,
  placeholder,
  required,
  helperText,
}: FormTextFieldProps) => {
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
          <Input id={id} placeholder={placeholder} required {...field} />
          {helperText && <FieldDescription>{helperText}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
