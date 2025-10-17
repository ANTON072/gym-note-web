import { PageTitle } from "@/components";
import { ExerciseForm } from "./ExerciseForm";
import { ExercisePageLayout } from "./ExercisePageLayout";

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
