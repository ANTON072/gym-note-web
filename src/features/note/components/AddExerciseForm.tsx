import { Button } from "@/components/ui/button";
import { ExerciseFormFields } from "@/features/exercise";
import { useNavigate } from "@tanstack/react-router";
import { NoteFormCard } from "./NoteFormCard";

export const AddExerciseForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォーム送信処理
    console.log("フォーム送信処理");
  };

  return (
    <NoteFormCard title="種目を追加">
      <form noValidate onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <ExerciseFormFields hideMemo />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Button type="button" variant="outline" onClick={() => navigate({ to: "/" })}>
              キャンセル
            </Button>
            <Button type="submit">追加</Button>
          </div>
        </div>
      </form>
    </NoteFormCard>
  );
};
