import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GoPencil, GoPlusCircle } from "react-icons/go";

export const ExerciseListItem = () => {
  // 仮のデータ（後でpropsから受け取るように変更）
  const sets = [
    { id: 1, weight: 100, reps: 10 },
    { id: 2, weight: 100, reps: 8 },
    { id: 3, weight: 90, reps: 10 },
  ];

  return (
    <Card className="!border-stone-300 gap-1 pb-2">
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
              <div className="text-stone-700 font-semibold dark:text-stone-400">
                {index + 1}セット
              </div>
              <div className="flex items-center gap-2">
                <div>{set.weight}kg</div>
                <div>×</div>
                <div>{set.reps}回</div>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center">
            <Button variant="ghost" className="gap-2 font-bold">
              セットの追加
              <GoPlusCircle />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
