import { LoginButton } from "./LoginButton";

import styles from "./styles.module.css";

export const LoginForm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2>Welcome to Gym Note</h2>
        <p>Record your daily training in GYM NOTE.</p>
        <p>Let's get started now‼️</p>
        <div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
