import { LoadingSpinner } from "@/components/LoadingSpinner";
import { NoteTodayPage } from "@/features/note";
import { QUERY_KEY_NOTES } from "@/features/note/constants/queryKeys";
import type { NoteResponse } from "@/features/note/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: async ({ context }): Promise<NoteResponse> => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/notes/today`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to create today's note");
    }
    const data = await response.json();

    // TanStack QueryのキャッシュにデータをセットしてuseGetNoteが最初からキャッシュを使えるようにする
    context.queryClient.setQueryData([QUERY_KEY_NOTES, data.id], data);

    return data;
  },
  component: NoteTodayPage,
  pendingComponent: LoadingSpinner,
});
