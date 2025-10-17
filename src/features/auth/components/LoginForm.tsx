import { APP_NAME } from "@/constants/app";
import { GoogleLoginButton } from "./GoogleLoginButton";

export const LoginForm = () => {
  return (
    <div className="grid h-full place-items-center">
      <div className="text-center">
        <h2>Welcome to {APP_NAME}</h2>
        <p className="my-2">毎日のトレーニングを記録しましょう💪</p>
        <div>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};
