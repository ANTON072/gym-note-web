import { Button } from "@/components";
import { ExerciseFormFields } from "@/features/exercise";
import styles from "./NoteFormCommon.module.css";
import { NoteFormTitle } from "./NoteFormTitle";

export const AddExerciseForm = () => {
  return (
    <form
      noValidate
      onSubmit={() => {
        console.log("フォーム送信処理");
      }}
      className={styles.NoteFormCommon}
    >
      <div className={styles.NoteFormCommon__fields}>
        <NoteFormTitle title="種目を追加" />
        <ExerciseFormFields hideMemo />
        <div className={styles.NoteFormCommon__2col}>
          <Button fullWidth variant="outlined">
            キャンセル
          </Button>
          <Button type="submit" fullWidth>
            追加
          </Button>
        </div>
      </div>
    </form>
  );
};
