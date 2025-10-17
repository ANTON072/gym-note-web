import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

/**
 * 種目一覧に戻るボタンコンポーネント
 */
export const BackToListButton = () => {
  return (
    <Button variant="outline" asChild>
      <Link to="/exercises" search={true}>
        <ChevronLeft />
        一覧に戻る
      </Link>
    </Button>
  );
};
