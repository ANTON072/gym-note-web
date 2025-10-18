import { NotesListPage } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const notesSearchSchema = z.object({
  page: z.number().optional().catch(1),
});

export const Route = createFileRoute("/notes/")({
  component: NotesListPage,
  validateSearch: notesSearchSchema,
});
