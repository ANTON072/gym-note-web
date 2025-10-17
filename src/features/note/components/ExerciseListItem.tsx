import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PencilIcon, PlusCircleIcon } from "lucide-react";

export const ExerciseListItem = () => {
  // 仮のデータ（後でpropsから受け取るように変更）
  const sets = [
    { id: 1, weight: 100, reps: 10 },
    { id: 2, weight: 100, reps: 8 },
    { id: 3, weight: 90, reps: 10 },
  ];

  return (
    <Card className="!border-stone-300 gap-1 pb-2 relative">
      <Button size="icon-sm" variant="ghost" className="absolute top-2 right-2">
        <PencilIcon className="size-3.5 text-gray-500" />
      </Button>
      <CardHeader className="px-3">
        <CardTitle className="text-lg font-bold">1. ベンチプレス</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <div className="grid">
          {sets.map((set, index) => (
            <div
              key={set.id}
              className="grid grid-cols-[minmax(3rem,auto)_1fr] py-2 gap-2 border-b border-stone-200 last:border-b-0"
            >
              <div className="text-stone-500">{index + 1}セット</div>
              <div className="flex items-center gap-2">
                <div>{set.weight}kg</div>
                <div>×</div>
                <div>{set.reps}回</div>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center pt-3">
            <Button variant="secondary" size="sm">
              セットの追加
              <PlusCircleIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
