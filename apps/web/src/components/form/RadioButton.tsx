import styles from "./form.module.css";

interface Props {
  value: string;
  children?: React.ReactNode;
}

export const RadioButton = ({
  value,
  children,
  ...props
}: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>) => {
  return (
    <label className={styles.radioButton}>
      <input
        type="radio"
        value={value}
        className={styles.radioInput}
        {...props}
      />
      <span className={styles.radioLabel}>{children}</span>
    </label>
  );
};