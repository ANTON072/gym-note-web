import styles from "./TextArea.module.css";

interface Props {
  name?: string;
  rows?: number;
}

export const TextArea = ({
  name,
  rows = 3,
  ...props
}: Props & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, keyof Props>) => {
  return <textarea name={name} rows={rows} className={styles.TextArea} {...props} />;
};
