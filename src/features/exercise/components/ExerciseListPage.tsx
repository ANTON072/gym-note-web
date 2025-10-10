import { Button, PageTitle, Table } from "@/components";
import { InputField, Select } from "@/components/form";
import Skeleton from "react-loading-skeleton";

import { BODY_PART_OPTIONS } from "@/constants/bodyParts";
import { useIsMutating } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useGetExercises } from "../hooks/useExerciseApi";
import type { Exercise } from "../schema";
import { DeleteExerciseButton } from "./DeleteExerciseButton";
import styles from "./Exercises.module.css";

export function ExerciseListPage() {
  const { data, isLoading, isFetched } = useGetExercises();
  const exercises: Exercise[] = Array.isArray(data) ? data : [];
  const isMutating = useIsMutating() > 0;

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
              <Select name="body_part" disabled={isMutating}>
                {Array.isArray(BODY_PART_OPTIONS)
                  ? BODY_PART_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))
                  : null}
                <option value="">すべて</option>
              </Select>
            </InputField>
          </form>
          <Button to="/exercises/new">新規登録</Button>
        </div>
        {isLoading && !isFetched && <Skeleton count={5} height={40} style={{ marginBottom: 10 }} />}
        {isFetched && (
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
                width: "55%",
              },
              {
                key: "body_part",
                header: "部位",
                render: (exercise) => exercise.body_part,
              },
              {
                key: "edit",
                header: "",
                render: (exercise) => <DeleteExerciseButton exerciseId={exercise.id} />,
              },
            ]}
            keyExtractor={(exercise) => exercise.id}
          />
        )}
      </div>
    </>
  );
}
