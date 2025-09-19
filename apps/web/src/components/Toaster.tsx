import styles from "./Toaster.module.css";

export const Toaster = () => {
  return (
    <section>
      <ol className={styles.toaster}>
        <li className={styles.toaster_list}>ログインしました</li>
        <li data-type="error" className={styles.toaster_list}>
          ログインしました
        </li>
        <li className={styles.toaster_list}>ログインしました</li>
      </ol>
    </section>
  );
};
