import { AddExercisePage } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/$noteId/exercise/new")({
  component: AddExercisePage,
});
