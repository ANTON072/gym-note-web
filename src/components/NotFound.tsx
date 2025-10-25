import { Button } from "@/components/shadcn/button";
import { Link } from "@tanstack/react-router";
import { Home, SearchX } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="flex justify-center">
          <SearchX className="h-24 w-24 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
          <p className="text-xl font-semibold text-foreground">
            お探しのページが見つかりませんでした
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            URLが間違っているか、ページが削除された可能性があります
          </p>
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
