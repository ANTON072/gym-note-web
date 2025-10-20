import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useId } from "react";
import { Controller } from "react-hook-form";

export interface RadioOption {
  value: string;
  label: string;
}

export interface FormRadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  required?: boolean;
  helperText?: string;
}

/**
 * React Hook Form用のラジオボタングループコンポーネント
 *
 * @param name - フォーム内でのフィールド名
 * @param label - フィールドのラベルテキスト
 * @param options - ラジオボタンの選択肢
 * @param required - 入力必須かどうか
 * @param helperText - フィールドの補足説明テキスト
 */
export const FormRadioGroup = ({
  name,
  label,
  options,
  required,
  helperText,
}: FormRadioGroupProps) => {
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
          <RadioGroup name={field.name} value={field.value} onValueChange={field.onChange}>
            {options.map((option) => {
              const optionId = `${id}-${option.value}`;
              return (
                <div key={option.value} className="flex items-center gap-2">
                  <RadioGroupItem value={option.value} id={optionId} />
                  <Label htmlFor={optionId} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
          {helperText && <FieldDescription>{helperText}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
