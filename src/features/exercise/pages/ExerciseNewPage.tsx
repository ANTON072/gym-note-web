import { PageTitle } from "@/components";
import { ExerciseForm } from "../components/ExerciseForm";
import { ExercisePageLayout } from "../components/ExercisePageLayout";

export const ExerciseNewPage = () => {
  return (
    <>
      <PageTitle title="種目の新規作成" />
      <ExercisePageLayout>
        <ExerciseForm
          defaultValues={{
            laterality: "bilateral" as const,
          }}
        />
      </ExercisePageLayout>
    </>
  );
};
