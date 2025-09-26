import { ExerciseNewPage } from "@/features/exercise";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises/new")({
  component: ExerciseNewPage,
});
