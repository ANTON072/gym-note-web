import { useParams } from "@tanstack/react-router";
import { NoteDetail } from "../components/NoteDetail";

export const NoteEditPage = () => {
  const { noteId } = useParams({ from: "/notes/$noteId" });
  return <NoteDetail noteId={noteId} title="2025年10月19日（日）" status="completed" />;
};
