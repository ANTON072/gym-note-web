import { GoPencil } from "react-icons/go";
import { useNoteContext } from "../contexts/NoteContext";
import styles from "./NoteMeta.module.css";

export const NoteMeta = () => {
  const { setDisplayComponentId } = useNoteContext();

  return (
    <>
      <div className={styles.NoteMeta}>
        <button
          type="button"
          className={styles.NoteMeta__toggle}
          onClick={() => {
            setDisplayComponentId("edit_meta");
          }}
        >
          <GoPencil className={styles.NoteMeta__icon} />
        </button>
        <div>2025年10月6日（月）</div>
        <div>開始: 12:00</div>
        <div />
        <div className={styles.NoteMeta__place}>場所: クラブオーサム西国分寺</div>
      </div>
    </>
  );
};
