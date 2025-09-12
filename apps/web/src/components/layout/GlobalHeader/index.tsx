import { HamburgerMenu } from "@/components/ui";
import styles from "./styles.module.css";

export const GlobalHeader = () => {
  return (
    <header className={styles.root}>
      <div />
      <h1 className={styles.title}>GYM NOTE</h1>
      <HamburgerMenu />
    </header>
  );
};
