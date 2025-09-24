import { Button, PageTitle, Table } from "@/components";
import { InputField, Select } from "@/components/form";
import { Link, createFileRoute } from "@tanstack/react-router";
import styles from "./exercises.module.css";

export const Route = createFileRoute("/exercises")({
  component: RouteComponent,
});

interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
}

const exercises: Exercise[] = [
  { id: 1, name: "ベンチプレス", bodyPart: "胸" },
  { id: 2, name: "スクワット", bodyPart: "脚" },
  { id: 3, name: "デッドリフト", bodyPart: "背中" },
  { id: 4, name: "懸垂", bodyPart: "背中" },
  { id: 5, name: "腕立て伏せ", bodyPart: "胸" },
  { id: 6, name: "ショルダープレス", bodyPart: "肩" },
  { id: 7, name: "レッグプレス", bodyPart: "脚" },
  { id: 8, name: "レッグエクステンション", bodyPart: "脚" },
  { id: 9, name: "レッグカール", bodyPart: "脚" },
  { id: 10, name: "ラットプルダウン", bodyPart: "背中" },
  { id: 11, name: "ローイング", bodyPart: "背中" },
  { id: 12, name: "バイセップカール", bodyPart: "上腕" },
  { id: 13, name: "トライセップエクステンション", bodyPart: "上腕" },
  { id: 14, name: "サイドレイズ", bodyPart: "肩" },
  { id: 15, name: "クランチ", bodyPart: "腹" },
  { id: 16, name: "プランク", bodyPart: "腹" },
  { id: 17, name: "ケーブルフライ", bodyPart: "胸" },
  { id: 18, name: "インクラインベンチプレス", bodyPart: "胸" },
  { id: 19, name: "ディップス", bodyPart: "胸" },
  { id: 20, name: "ハックスクワット", bodyPart: "脚" },
];

function RouteComponent() {
  return (
    <div className={styles.wrapper}>
      <PageTitle title="種目一覧" />
      <div className={styles.index_form}>
        <form>
          <InputField label="種目名で絞り込み" error>
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
            render: (exercise) => <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>,
            width: "75%",
          },
          {
            key: "bodyPart",
            header: "部位",
            render: (exercise) => exercise.bodyPart,
          },
        ]}
        keyExtractor={(exercise) => exercise.id}
      />
    </div>
  );
}
