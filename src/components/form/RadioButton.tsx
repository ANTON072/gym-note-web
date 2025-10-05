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
    <label className={styles.RadioButton}>
      <input type="radio" value={value} className={styles.RadioButton__input} {...props} />
      <span className={styles.RadioButton__label}>{children}</span>
    </label>
  );
};
