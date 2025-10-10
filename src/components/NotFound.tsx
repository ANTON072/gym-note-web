import { Link } from "@tanstack/react-router";
import { Button } from "./Button";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>お探しのページが見つかりませんでした</p>
        <p className={styles.description}>
          URLが間違っているか、ページが削除された可能性があります
        </p>
        <div className={styles.actions}>
          <Link to="/">
            <Button>ホームに戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
