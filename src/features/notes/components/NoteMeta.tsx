import { GoPencil } from "react-icons/go";
import styles from "./NoteMeta.module.css";

export const NoteMeta = () => {
  return (
    <div className={styles.Note__meta}>
      <div className={styles.Note_meta__body}>
        <div>2025年10月6日（月）</div>
        <div>開始時間: 12:00</div>
        <div>終了時間: 13:00</div>
        <div className={styles.Note__meta__place}>場所: クラブオーサム西国分寺</div>
      </div>
      <div className={styles.Note__meta__editButton}>
        <button type="button" className={styles.NoteEditButton}>
          <GoPencil />
          編集
        </button>
      </div>
    </div>
  );
};
