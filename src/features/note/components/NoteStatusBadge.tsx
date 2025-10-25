import { Badge } from "@/components/shadcn/badge";

import { NOTE_STATUS, type NoteStatus } from "../constants/noteStatus";

const STATUS_CLASS_NAME: Record<NoteStatus, string> = {
  active: "bg-blue-500",
  completed: "bg-green-500",
  archived: "bg-gray-500",
};

interface Props {
  status: NoteStatus;
}

export const NoteStatusBadge = ({ status }: Props) => {
  const statusLabel = NOTE_STATUS.find((s) => s.value === status)?.label;

  return <Badge className={STATUS_CLASS_NAME[status]}>{statusLabel}</Badge>;
};
