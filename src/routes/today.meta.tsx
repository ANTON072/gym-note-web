import { NoteMetaForm } from "@/features/note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/today/meta")({
  component: NoteMetaForm,
});
