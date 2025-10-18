import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlusCircleIcon } from "lucide-react";

const formSchema = z.object({
  weight: z
    .string()
    .min(1, "重量を入力してください")
    .refine((val) => !Number.isNaN(Number(val)) && Number(val) > 0, {
      message: "正の数値を入力してください",
    }),
  reps: z
    .string()
    .min(1, "回数を入力してください")
    .refine(
      (val) => !Number.isNaN(Number(val)) && Number(val) > 0 && Number.isInteger(Number(val)),
      {
        message: "正の整数を入力してください",
      },
    ),
});

type FormValues = z.infer<typeof formSchema>;

interface AddSetDialogProps {
  onSubmit: (data: { weight: number; reps: number }) => void;
}

export const AddSetDialog = ({ onSubmit }: AddSetDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
      reps: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit({
      weight: Number(values.weight),
      reps: Number(values.reps),
    });
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          セットの追加
          <PlusCircleIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>セットを追加</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      重量 (kg)<span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" step="0.5" placeholder="例: 12.5" {...field} />
                    </FormControl>
                    <FormDescription>
                      ダンベル種目の場合は片手の重量を入力してください
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      回数<span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" step="1" placeholder="例: 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4 mt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setOpen(false);
                  }}
                >
                  キャンセル
                </Button>
                <Button type="submit">追加</Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
