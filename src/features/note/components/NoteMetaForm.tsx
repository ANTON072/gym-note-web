import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/shadcn/button";
import { DatePicker } from "@/components/shadcn/date-picker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import { TimePicker } from "@/components/shadcn/time-picker";
import { useNavigate } from "@tanstack/react-router";
import { NoteFormCard } from "./NoteFormCard";

const formSchema = z.object({
  date: z.date({
    message: "日にちを選択してください",
  }),
  start_time: z.string().optional(),
  end_time: z.string().optional(),
  place: z.string().optional(),
  memo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const NoteMetaForm = () => {
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      start_time: "",
      end_time: "",
      place: "",
      memo: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // TODO: フォームデータの送信処理
    navigate({ to: "/" });
  };

  return (
    <NoteFormCard title="場所・日時">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    日にち<span className="text-destructive">*</span>
                  </FormLabel>
                  <DatePicker
                    field={field}
                    disabled={(date) => date > new Date()}
                    startMonth={new Date(2020, 0)}
                    endMonth={new Date()}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>開始時刻</FormLabel>
                  <FormControl>
                    <TimePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>終了時刻</FormLabel>
                  <FormControl>
                    <TimePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="place"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>場所</FormLabel>
                  <FormControl>
                    <Input placeholder="ジム名など" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="memo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メモ</FormLabel>
                  <FormControl>
                    <Textarea placeholder="メモを入力" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-2">
              更新
            </Button>
          </div>
        </form>
      </Form>
    </NoteFormCard>
  );
};
