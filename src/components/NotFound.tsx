import { Link } from "@tanstack/react-router";
import { Button } from "./Button";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.NotFound__content}>
        <h1 className={styles.NotFound__title}>404</h1>
        <p className={styles.NotFound__message}>お探しのページが見つかりませんでした</p>
        <p className={styles.NotFound__description}>
          URLが間違っているか、ページが削除された可能性があります
        </p>
        <div className={styles.NotFound__actions}>
          <Link to="/">
            <Button>ホームに戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
