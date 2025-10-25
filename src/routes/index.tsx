import { LoadingSpinner } from "@/components/LoadingSpinner";
import { NoteTodayPage } from "@/features/note";
import type { NoteResponse } from "@/features/note/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async (): Promise<NoteResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/notes/today`, {
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
