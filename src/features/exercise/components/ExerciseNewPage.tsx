import { PageTitle } from "@/components";
import { BackToListButton } from "./BackToListButton";
import { ExerciseForm } from "./ExerciseForm";

export const ExerciseNewPage = () => {
  return (
    <>
      <PageTitle title="種目の新規作成" />
      <div className="mt-6 grid gap-4">
        <div className="flex items-center justify-between">
          <div />
          <BackToListButton />
        </div>
        <ExerciseForm
          defaultValues={{
            laterality: "bilateral" as const,
          }}
        />
      </div>
    </>
  );
};
