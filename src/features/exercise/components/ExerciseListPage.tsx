import { Button, PageTitle, Table } from "@/components";
import { InputField, Select } from "@/components/form";
import { Link } from "@tanstack/react-router";

import { BottomSheet, useBottomSheet } from "@/components/BottomSheet";
import { BODY_PART_OPTIONS } from "@/constants/bodyParts";
import { useGetExercises } from "../hooks/useExerciseApi";
import type { Exercise } from "../schema";
import { ExerciseForm } from "./ExerciseForm";
import styles from "./exercises.module.css";

export function ExerciseListPage() {
  const { data } = useGetExercises();
  const { ref, isOpen, onOpen, onClose: onCloseBottomSheet } = useBottomSheet();
  const exercises: Exercise[] = Array.isArray(data) ? data : [];

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
                {Array.isArray(BODY_PART_OPTIONS) ? BODY_PART_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                )) : null}
                <option value="">すべて</option>
              </Select>
            </InputField>
          </form>
          <Button type="button" onClick={onOpen}>
            新規登録
          </Button>
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
      {/* フォーム */}
      <BottomSheet ref={ref} isOpen={isOpen} closeOnBackdropTap={false} disableDismiss disableDrag>
        <ExerciseForm isEdit={false} onClose={onCloseBottomSheet} />
      </BottomSheet>
    </>
  );
}
