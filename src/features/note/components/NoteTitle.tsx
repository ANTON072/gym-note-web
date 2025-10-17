import { PageTitle } from "@/components";
import type { ComponentProps } from "react";
import { NoteStatusBadge } from "./NoteStatusBadge";

type NoteTitleProps = ComponentProps<typeof PageTitle>;
type NoteStatusBadgeProps = ComponentProps<typeof NoteStatusBadge>;

interface Props {
  title: NoteTitleProps["title"];
  status: NoteStatusBadgeProps["status"];
}

export const NoteTitle = ({ title, status }: Props) => {
  return (
    <div className="grid mb-4 justify-items-start gap-1">
      <NoteStatusBadge status={status} />
      <PageTitle title={title} />
    </div>
  );
};
