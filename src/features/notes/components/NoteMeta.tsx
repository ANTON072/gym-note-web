import { GoPencil } from "react-icons/go";
import styles from "./NoteMeta.module.css";

export const NoteMeta = () => {
  return (
    <div className={styles.NoteMeta}>
      <button type="button" className={styles.NoteMeta__editButtonArea}>
        <GoPencil className={styles.NoteMeta__editIcon} />
      </button>
      <div>2025年10月6日（月）</div>
      <div>開始: 12:00</div>
      <div />
      <div className={styles.NoteMeta__place}>場所: クラブオーサム西国分寺</div>
    </div>
  );
};
