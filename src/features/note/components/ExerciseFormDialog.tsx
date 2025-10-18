import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExerciseFormFields } from "@/features/exercise";
import type { ReactNode } from "react";

interface ExerciseFormDialogProps {
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ExerciseFormDialog = ({
  trigger,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  onSubmit,
}: ExerciseFormDialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledOnOpenChange ?? setInternalOpen;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>種目を追加</DialogTitle>
        </DialogHeader>
        <form noValidate onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <ExerciseFormFields hideMemo />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                キャンセル
              </Button>
              <Button type="submit">追加</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
