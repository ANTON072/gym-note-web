import { GoX } from "react-icons/go";
import { useNoteContext } from "../contexts/NoteContext";
import styles from "./Note.module.css";

interface Props {
  title: string;
}

export const NoteFormTitle = ({ title }: Props) => {
  const { setDisplayComponentId } = useNoteContext();

  return (
    <div className={styles.NoteFormTitle}>
      <span>{title}</span>
      <button type="button" onClick={() => setDisplayComponentId(null)}>
        <GoX size={20} />
      </button>
    </div>
  );
};
