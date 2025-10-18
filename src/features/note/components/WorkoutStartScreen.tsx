import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface WorkoutStartScreenProps {
  today: string;
  isCreating: boolean;
  onStartWorkout: () => void;
}

export const WorkoutStartScreen = ({
  today,
  isCreating,
  onStartWorkout,
}: WorkoutStartScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="text-center">
        <p className="text-muted-foreground mb-2">{today}</p>
        <h2 className="text-2xl font-bold mb-2">本日のワークアウト</h2>
        <p className="text-muted-foreground">ワークアウトを開始して記録を始めましょう</p>
      </div>
      <Button
        onClick={onStartWorkout}
        disabled={isCreating}
        size="lg"
        className="gap-3 px-8 py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="size-6" fill="currentColor" />
        {isCreating ? "開始中..." : "本日のワークアウトを開始する"}
      </Button>
    </div>
  );
};
