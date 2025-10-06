import { GoPencil } from "react-icons/go";
import styles from "./ExerciseListItem.module.css";

export const ExerciseListItem = () => {
  return (
    <div className={styles.ExerciseListItem}>
      <div className={styles.ExerciseListItem__head}>
        <div className={styles.ExerciseListItem__name}>1. ベンチプレス</div>
        <button type="button" className={styles.ExerciseListItem__editButton}>
          <div>
            <GoPencil />
          </div>
        </button>
      </div>
      <div>
        <div>1Set</div>
        <div>100kg x 10</div>
      </div>
    </div>
  );
};
