import { APP_NAME } from "@packages/config";
import { useState } from "react";
import { toast } from "sonner";
import { signInWithGoogle } from "../../lib/firebase/auth";
import { GoogleLoginButton } from "./GoogleLoginButton";

import styles from "./styles.module.css";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);

    try {
      await signInWithGoogle();
      toast.success("ログインに成功しました");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "ログインに失敗しました";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2>Welcome to {APP_NAME}</h2>
        <p>Record your daily training in {APP_NAME}.</p>
        <p>Let's get started now‼️</p>
        <div>
          <GoogleLoginButton onClick={handleGoogleLogin} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
};
