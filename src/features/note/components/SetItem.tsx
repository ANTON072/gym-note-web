import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react";

interface SetItemProps {
  index: number;
  weight: number;
  reps: number;
  onEdit: () => void;
  onDelete: () => void;
}

export const SetItem = ({ index, weight, reps, onEdit, onDelete }: SetItemProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEdit = () => {
    setIsMenuOpen(false);
    onEdit();
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
    onDelete();
  };

  return (
    <div className="grid grid-cols-[minmax(3rem,auto)_1fr_auto] py-2 gap-2 items-center">
      <div className="text-stone-500">{index}セット</div>
      <div className="flex items-center gap-2">
        <div>{weight}kg</div>
        <div>×</div>
        <div>{reps}回</div>
      </div>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="メニューを開く"
        onClick={() => setIsMenuOpen(true)}
      >
        <MoreHorizontalIcon className="size-4 text-gray-500" />
      </Button>
      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>セットの編集・削除</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2">
            <Button variant="outline" className="w-full justify-start" onClick={handleEdit}>
              <PencilIcon className="size-4 mr-2" />
              編集
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleDelete}
            >
              <Trash2Icon className="size-4 mr-2" />
              削除
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
