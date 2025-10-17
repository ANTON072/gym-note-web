import { APP_NAME } from "@/constants/app";

export const GlobalFooter = () => {
  return (
    <footer className="grid place-items-center p-content-gap">
      <small>© 2025 {APP_NAME}</small>
    </footer>
  );
};
