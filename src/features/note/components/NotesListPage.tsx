import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate, useSearch } from "@tanstack/react-router";

const formatDate = (date: Date): string => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];
  return `${year}年${month}月${day}日（${weekday}）`;
};

// ダミーデータ生成
const generateDummyNotes = (page: number, perPage = 10) => {
  const notes = [];
  const startIndex = (page - 1) * perPage;
  const today = new Date();

  for (let i = 0; i < perPage; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - (startIndex + i));
    notes.push({
      id: startIndex + i + 1,
      date: date,
      title: `${formatDate(date)}のノート`,
    });
  }

  return notes;
};

export const NotesListPage = () => {
  const navigate = useNavigate();
  const search = useSearch({ from: "/notes/" });
  const currentPage = search.page ?? 1;
  const totalPages = 10; // ダミーの総ページ数

  const notes = generateDummyNotes(currentPage);

  const handlePageChange = (page: number) => {
    navigate({
      to: "/notes",
      search: { page },
    });
  };

  const handleNoteClick = (noteId: number) => {
    // TODO: 個別ノートページへの遷移
    console.log("ノートID:", noteId);
  };

  // ページネーションの表示範囲を計算
  type PageItem = { type: "page"; value: number } | { type: "ellipsis"; position: "start" | "end" };

  const getPageNumbers = (): PageItem[] => {
    const pages: PageItem[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // ページ数が少ない場合はすべて表示
      for (let i = 1; i <= totalPages; i++) {
        pages.push({ type: "page", value: i });
      }
    } else {
      // 1ページ目は常に表示
      pages.push({ type: "page", value: 1 });

      if (currentPage > 3) {
        pages.push({ type: "ellipsis", position: "start" });
      }

      // 現在のページ周辺を表示
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push({ type: "page", value: i });
      }

      if (currentPage < totalPages - 2) {
        pages.push({ type: "ellipsis", position: "end" });
      }

      // 最後のページは常に表示
      pages.push({ type: "page", value: totalPages });
    }

    return pages;
  };

  return (
    <div className="container mx-auto py-6 px-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">ノート一覧</h1>

      <div className="space-y-3 mb-8">
        {notes.map((note) => (
          <Card key={note.id} className="p-4 hover:bg-accent transition-colors cursor-pointer">
            <Button
              variant="ghost"
              className="w-full justify-start p-0 h-auto font-normal hover:bg-transparent"
              onClick={() => handleNoteClick(note.id)}
            >
              <p className="text-base">{note.title}</p>
            </Button>
          </Card>
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>

          {getPageNumbers().map((item) =>
            item.type === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${item.position}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={item.value}>
                <PaginationLink
                  onClick={() => handlePageChange(item.value)}
                  isActive={currentPage === item.value}
                  className="cursor-pointer"
                >
                  {item.value}
                </PaginationLink>
              </PaginationItem>
            ),
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              className={
                currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
