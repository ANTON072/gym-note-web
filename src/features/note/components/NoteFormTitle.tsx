import { useRouter } from "@tanstack/react-router";
import { GoX } from "react-icons/go";
import styles from "./NoteFormTitle.module.css";

interface Props {
  title: string;
}

export const NoteFormTitle = ({ title }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.NoteFormTitle}>
      <span className={styles.NoteFormTitle__label}>{title}</span>
      <button
        type="button"
        className={styles.NoteFormTitle__closeButton}
        onClick={() => {
          router.history.back();
        }}
      >
        <span>
          <GoX size={20} />
        </span>
      </button>
    </div>
  );
};
