import { Button } from "@/components/shadcn/button";
import { Play } from "lucide-react";

const formatDate = (date: Date): string => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  return `${year}年${month}月${day}日（${weekday}）`;
};

interface WorkoutStartScreenProps {
  isCreating: boolean;
  onStartWorkout: () => void;
}

export const WorkoutStartScreen = ({ isCreating, onStartWorkout }: WorkoutStartScreenProps) => {
  const today = formatDate(new Date());
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
