import { NoteMetaForm } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/today/_form/meta")({
  component: NoteMetaForm,
});
