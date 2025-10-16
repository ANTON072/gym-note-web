import { Link } from "@tanstack/react-router";
import { GoPencil } from "react-icons/go";
import styles from "./NoteMeta.module.css";

export const NoteMeta = () => {
  return (
    <>
      <div className={styles.NoteMeta}>
        <Link to="/notes/today/meta" className={styles.NoteMeta__toggle}>
          <GoPencil className={styles.NoteMeta__icon} />
        </Link>
        <div>2025年10月6日(月)</div>
        <div>開始: 12:00</div>
        <div />
        <div className={styles.NoteMeta__place}>場所: クラブオーサム西国分寺</div>
      </div>
    </>
  );
};
