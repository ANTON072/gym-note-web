import { APP_NAME } from "@packages/config";
import { LoginButton } from "./LoginButton";

import styles from "./styles.module.css";

export const LoginForm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2>Welcome to {APP_NAME}</h2>
        <p>Record your daily training in {APP_NAME}.</p>
        <p>Let's get started now‼️</p>
        <div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
