import { PageTitle } from "@/components";
import type { ComponentProps } from "react";
import type { NoteStatus } from "../constants/noteStatus";
import { NoteStatusBadge } from "./NoteStatusBadge";

type NoteTitleProps = ComponentProps<typeof PageTitle>;

interface Props {
  title: NoteTitleProps["title"];
  status: NoteStatus;
}

export const NoteTitle = ({ title, status }: Props) => {
  return (
    <div className="grid mb-4 justify-items-start gap-1">
      <NoteStatusBadge status={status} />
      <PageTitle title={title} />
    </div>
  );
};
