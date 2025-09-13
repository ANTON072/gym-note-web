import { APP_NAME } from "@packages/config";
import { HamburgerMenu } from "./HamburgerMenu";
import styles from "./styles.module.css";

export const GlobalHeader = () => {
  return (
    <header className={styles.root}>
      <div />
      <h1 className={styles.title}>{APP_NAME}</h1>
      <HamburgerMenu />
    </header>
  );
};
