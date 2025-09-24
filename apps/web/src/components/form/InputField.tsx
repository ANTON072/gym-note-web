import { cloneElement, isValidElement, useId } from "react";
import styles from "./form.module.css";

interface InputProps {
  id?: string;
  name?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

interface Props {
  label?: string;
  name: string;
  children?: React.ReactNode;
  error?: boolean;
  helperText?: string;
}

export const InputField = ({ label, children, name, error, helperText }: Props) => {
  const fieldId = useId();
  const helperTextId = useId();

  // childrenが単一のReact要素の場合、idとnameを付与
  const enhancedChildren = isValidElement(children)
    ? cloneElement(children as React.ReactElement<InputProps>, {
        id: fieldId,
        name: name,
        "aria-invalid": error,
        "aria-describedby": helperText ? helperTextId : undefined,
      })
    : children;

  return (
    <div className={styles.input_field}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
        </label>
      )}
      {enhancedChildren}
      {helperText && (
        <p id={helperTextId} className={styles.helper_text}>
          {helperText}
        </p>
      )}
    </div>
  );
};
