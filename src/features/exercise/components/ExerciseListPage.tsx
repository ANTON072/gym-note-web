import { Button, PageTitle, Table } from "@/components";
import { InputField, Select } from "@/components/form";
import { Link } from "@tanstack/react-router";

import { useGetExercises } from "../hooks/useExerciseApi";
import type { Exercise } from "../schema";
import styles from "./exercises.module.css";

export function ExerciseListPage() {
  const { data } = useGetExercises();
  const exercises: Exercise[] = data ?? [];

  return (
    <>
      <PageTitle title="種目一覧" />
      <div className={styles.wrapper}>
        <div className={styles.indexForm}>
          <form>
            <InputField
              label="種目名で絞り込み"
              style={{
                position: "relative",
                top: " calc(-1 * var(--form-font-size))",
              }}
            >
              <Select name="body_part">
                <option value="legs">脚</option>
                <option value="back">背中</option>
                <option value="shoulders">肩</option>
                <option value="arms">腕</option>
                <option value="chest">胸</option>
                <option value="cardio">有酸素</option>
                <option value="">すべて</option>
              </Select>
            </InputField>
          </form>
          <Button to="/exercises/new">新規登録</Button>
        </div>
        <Table
          data={exercises}
          columns={[
            {
              key: "name",
              header: "種目名",
              render: (exercise) => (
                <Link to="/exercises/$exerciseId" params={{ exerciseId: exercise.id.toString() }}>
                  {exercise.name}
                </Link>
              ),
              width: "75%",
            },
            {
              key: "body_part",
              header: "部位",
              render: (exercise) => exercise.body_part,
            },
          ]}
          keyExtractor={(exercise) => exercise.id}
        />
      </div>
    </>
  );
}
