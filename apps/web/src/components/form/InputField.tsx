import { cloneElement, isValidElement, useId } from "react";
import styles from "./form.module.css";

interface InputProps {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  required?: boolean;
}

interface Props {
  label?: string;
  children?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

export const InputField = ({
  label,
  children,
  error,
  helperText,
  fullWidth,
  required = false,
  style,
}: Props) => {
  const fieldId = useId();
  const helperTextId = useId();

  // childrenが単一のReact要素の場合、idを付与
  const enhancedChildren = isValidElement(children)
    ? cloneElement(children as React.ReactElement<InputProps>, {
        id: fieldId,
        "aria-invalid": error,
        "aria-describedby": helperText ? helperTextId : undefined,
        required,
      })
    : children;

  return (
    <div className={`${styles.inputField} ${fullWidth ? styles.fullWidth : ""}`} style={style}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {enhancedChildren}
      {helperText && (
        <p id={helperTextId} className={styles.helperText}>
          {helperText}
        </p>
      )}
    </div>
  );
};
