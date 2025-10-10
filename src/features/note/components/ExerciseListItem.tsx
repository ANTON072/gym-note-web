import { GoPencil } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import styles from "./Note.module.css";

export const ExerciseListItem = () => {
  // 仮のデータ（後でpropsから受け取るように変更）
  const sets = [
    { id: 1, weight: 100, reps: 10 },
    { id: 2, weight: 100, reps: 8 },
    { id: 3, weight: 90, reps: 10 },
  ];

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
      <div className={styles.ExerciseListItem__body}>
        <div className={styles.ExerciseListItem__sets}>
          {sets.map((set, index) => (
            <div key={set.id} className={styles.ExerciseListItem__set}>
              <div className={styles.ExerciseListItem__setNumber}>{index + 1}セット</div>
              <div className={styles.ExerciseListItem__setDetail}>
                <div>{set.weight}kg</div>
                <div>×</div>
                <div>{set.reps}回</div>
              </div>
            </div>
          ))}
          <div className={styles.ExerciseListItem__addSet}>
            <button className={styles.ExerciseListItem__addSetButton} type="button">
              セットの追加
              <GoPlusCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
