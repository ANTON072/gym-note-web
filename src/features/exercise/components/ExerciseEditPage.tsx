import { Button, PageTitle } from "@/components";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./exercises.module.css";

export const ExerciseEditPage = () => {
  return (
    <>
      <PageTitle title="種目更新" />
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
          <Button type="submit">更新</Button>
        </div>
      </form>
    </>
  );
};
