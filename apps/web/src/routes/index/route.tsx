import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { logout } from "../../lib/firebase/auth";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("ログアウトしました");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "ログアウトに失敗しました";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={handleLogout}>
        ログアウト
      </button>
    </div>
  );
}
