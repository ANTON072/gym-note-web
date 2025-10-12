import { GoX } from "react-icons/go";
import { useNoteContext } from "../contexts/NoteContext";
import styles from "./NoteFormTitle.module.css";

interface Props {
  title: string;
}

export const NoteFormTitle = ({ title }: Props) => {
  const { setDisplayComponentId } = useNoteContext();

  return (
    <div className={styles.NoteFormTitle}>
      <span className={styles.NoteFormTitle__label}>{title}</span>
      <button
        type="button"
        className={styles.NoteFormTitle__closeButton}
        onClick={() => setDisplayComponentId(null)}
      >
        <GoX size={20} />
      </button>
    </div>
  );
};
