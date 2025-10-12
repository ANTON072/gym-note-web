import { GoChevronDown } from "react-icons/go";
import styles from "./Select.module.css";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  name?: string;
}

export const Select = ({ children, name, ...props }: Props) => {
  return (
    <div className={styles.Select}>
      <select className={styles.Select__select} name={name} {...props}>
        {children}
      </select>
      <GoChevronDown className={styles.Select__icon} size={"1.5em"} />
    </div>
  );
};
