import { PageTitle } from "@/components";
import { Card } from "@/components/ui/card";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { SimplePagination } from "../components/SimplePagination";

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

  return (
    <>
      <PageTitle title="ノート一覧" />
      <div className="space-y-3 mb-8 mt-4">
        {notes.map((note) => (
          <Card key={note.id} className="p-4 hover:bg-accent transition-colors cursor-pointer">
            <Link to="/notes/$noteId" params={{ noteId: String(note.id) }}>
              {note.title}
            </Link>
          </Card>
        ))}
      </div>

      <SimplePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
