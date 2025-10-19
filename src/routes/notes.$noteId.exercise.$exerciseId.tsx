import { EditExercisePage } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/$noteId/exercise/$exerciseId")({
  component: EditExercisePage,
});
