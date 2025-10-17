import { APP_NAME } from "@/constants/app";
import { useState } from "react";
import { toast } from "sonner";
import { signInWithGoogle } from "../lib/auth";
import { GoogleLoginButton } from "./GoogleLoginButton";
import styles from "./LoginForm.module.css";

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
    <div className={styles.LoginForm}>
      <div className={styles.LoginForm__content}>
        <h2>Welcome to {APP_NAME}</h2>
        <p>毎日のトレーニングを記録しましょう💪</p>
        <div>
          <GoogleLoginButton onClick={handleGoogleLogin} disabled={isLoading} />
        </div>
      </div>
    </div>
  );
};
