import { Button, PageTitle } from "@/components";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./exercises.module.css";

export const ExerciseNewPage = () => {
  return (
    <>
      <PageTitle title="種目登録" />
      <div className={styles.indexForm}>
        <div />
        <Button to="/exercises">種目一覧</Button>
      </div>
      <form action="hoge">
        <ExerciseForm />
        <div className={styles.formActions}>
          <Button type="button" variant="outlined">
            キャンセル
          </Button>
          <Button type="submit">登録</Button>
        </div>
      </form>
    </>
  );
};
