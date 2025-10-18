import { AddExerciseForm } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/today/add-exercise")({
  component: AddExerciseForm,
});
