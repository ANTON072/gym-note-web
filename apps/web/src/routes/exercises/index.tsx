import { ExerciseListPage } from "@/feature/exercise";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/exercises/")({
  component: ExerciseListPage,
});
