import { APP_NAME } from "@packages/config";
import styles from "./styles.module.css";

export const GlobalFooter = () => {
  return (
    <footer className={styles.root}>
      <small>© 2025 {APP_NAME}</small>
    </footer>
  );
};
