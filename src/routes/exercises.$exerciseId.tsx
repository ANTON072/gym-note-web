import { ExerciseEditPage } from "@/features/exercise";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises/$exerciseId")({
  component: ExerciseEditPage,
});
