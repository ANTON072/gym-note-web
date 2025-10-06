import { NOTE_STATUS, type NoteStatus } from "../constants/noteStatus";
import styles from "./NoteStatusChip.module.css";

interface Props {
  status: NoteStatus;
}

export const NoteStatusChip = ({ status }: Props) => {
  const statusLabel = NOTE_STATUS.find((s) => s.value === status)?.label;

  return <div className={styles.NoteStatusChip}>{statusLabel}</div>;
};
