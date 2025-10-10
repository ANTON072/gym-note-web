import { ExerciseListPage } from "@/features/exercise";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const exercisesSearchSchema = z.object({
  bodyPart: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/exercises/")({
  component: ExerciseListPage,
  validateSearch: exercisesSearchSchema,
});
