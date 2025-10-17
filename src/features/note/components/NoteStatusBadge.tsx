import { Badge } from "@/components/ui/badge";

import { NOTE_STATUS, type NoteStatus } from "../constants/noteStatus";

const STATUS_CLASS_NAME: Record<NoteStatus, string> = {
  active: "bg-blue-500 text-white",
  completed: "bg-green-500 text-white",
  archived: "bg-gray-500 text-white",
};

interface Props {
  status: NoteStatus;
}

export const NoteStatusBadge = ({ status }: Props) => {
  const statusLabel = NOTE_STATUS.find((s) => s.value === status)?.label;

  return <Badge className={STATUS_CLASS_NAME[status]}>{statusLabel}</Badge>;
};
