import { GoIssueDraft, GoIssueOpened, GoIssueReopened } from "react-icons/go";

import { NOTE_STATUS, type NoteStatus } from "../constants/noteStatus";
import styles from "./NoteStatusChip.module.css";

interface Props {
  status: NoteStatus;
}

export const NoteStatusChip = ({ status }: Props) => {
  const statusLabel = NOTE_STATUS.find((s) => s.value === status)?.label;

  const showIcon = () => {
    switch (status) {
      case "active":
        return <GoIssueOpened />;
      case "completed":
        return <GoIssueReopened />;
      case "archived":
        return <GoIssueDraft />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.NoteStatusChip} ${styles[status]}`}>
      {showIcon()}
      {statusLabel}
    </div>
  );
};
