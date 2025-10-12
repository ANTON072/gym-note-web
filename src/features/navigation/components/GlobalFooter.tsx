import { APP_NAME } from "@/constants/app";
import styles from "./GlobalFooter.module.css";

export const GlobalFooter = () => {
  return (
    <footer className={styles.GlobalFooter}>
      <small>© 2025 {APP_NAME}</small>
    </footer>
  );
};
