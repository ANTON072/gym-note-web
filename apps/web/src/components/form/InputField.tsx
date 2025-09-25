import { cloneElement, isValidElement, useId } from "react";
import styles from "./form.module.css";

interface InputProps {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}

interface Props {
  label?: string;
  children?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

export const InputField = ({ label, children, error, helperText, fullWidth }: Props) => {
  const fieldId = useId();
  const helperTextId = useId();

  // childrenが単一のReact要素の場合、idを付与
  const enhancedChildren = isValidElement(children)
    ? cloneElement(children as React.ReactElement<InputProps>, {
        id: fieldId,
        "aria-invalid": error,
        "aria-describedby": helperText ? helperTextId : undefined,
      })
    : children;

  return (
    <div className={`${styles.inputField} ${fullWidth ? styles.fullWidth : ""}`}>
      {label && (
        <label htmlFor={fieldId} className={styles.label}>
          {label}
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
