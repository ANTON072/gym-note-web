import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import { XIcon } from "lucide-react";

export const NoteMetaForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォームデータの送信処理
    navigate({ to: "/notes/today" });
  };

  return (
    <Card className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3"
        onClick={() => navigate({ to: "/notes/today" })}
      >
        <XIcon className="text-gray-500" />
      </Button>
      <CardHeader className="px-3">
        <CardTitle>場所・日時</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <Field>
              <FieldLabel htmlFor="date">
                日にち<span className="text-destructive">*</span>
              </FieldLabel>
              <Input id="date" name="date" type="date" required />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="start_time">開始時刻</FieldLabel>
                <Input id="start_time" name="start_time" type="time" />
              </Field>
              <Field>
                <FieldLabel htmlFor="end_time">終了時刻</FieldLabel>
                <Input id="end_time" name="end_time" type="time" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="place">場所</FieldLabel>
              <Input id="place" name="place" placeholder="ジム名など" />
            </Field>
            <Field>
              <FieldLabel htmlFor="memo">メモ</FieldLabel>
              <Textarea id="memo" name="memo" placeholder="メモを入力" />
            </Field>
            <Button type="submit" className="w-full mt-2">
              更新
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
