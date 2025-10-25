import { LoadingSpinner } from "@/components/LoadingSpinner";
import { NoteTodayPage } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async () => {
    const response = await fetch("http://localhost:3001/v1/notes/today", {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to create today's note");
    }
    return response.json();
  },
  component: NoteTodayPage,
  pendingComponent: LoadingSpinner,
});
