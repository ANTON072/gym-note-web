import styles from "./form.module.css";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  name: string;
}

export const Select = ({ children, name, ...props }: Props) => {
  return (
    <select className={styles.select} name={name} {...props}>
      {children}
    </select>
  );
};
