import { ChevronDownIcon, CloseIcon } from "../icons";
import styles from "./form.module.css";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  name: string;
}

export const Select = ({ children, name, ...props }: Props) => {
  return (
    <div className={styles.selectWrapper}>
      <select className={styles.select} name={name} {...props}>
        {children}
      </select>
      <ChevronDownIcon size={16} className={styles.selectIcon} />
    </div>
  );
};
