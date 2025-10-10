import { forwardRef } from "react";
import styles from "./form.module.css";

interface Props {
  name?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

export const TextField = forwardRef<
  HTMLInputElement,
  Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>
>(({ name, type = "text", ...props }, ref) => {
  return <input ref={ref} type={type} name={name} className={styles.TextField} {...props} />;
});

TextField.displayName = "TextField";
