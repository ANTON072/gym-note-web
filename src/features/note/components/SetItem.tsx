import { ActionMenuDrawer, type ActionMenuItem } from "@/components/ui/action-menu-drawer";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react";

interface SetItemProps {
  index: number;
  weight: number;
  reps: number;
  onEdit: () => void;
  onDelete: () => void;
}

export const SetItem = ({ index, weight, reps, onEdit, onDelete }: SetItemProps) => {
  const actions: ActionMenuItem[] = [
    {
      label: "編集",
      icon: <PencilIcon className="size-4 mr-2" />,
      onClick: onEdit,
    },
    {
      label: "削除",
      icon: <Trash2Icon className="size-4 mr-2" />,
      onClick: onDelete,
      variant: "destructive",
    },
  ];

  return (
    <div className="grid grid-cols-[minmax(3rem,auto)_1fr_auto] py-2 gap-2 items-center">
      <div className="text-stone-500">{index}セット</div>
      <div className="flex items-center gap-2">
        <div>{weight}kg</div>
        <div>×</div>
        <div>{reps}回</div>
      </div>
      <ActionMenuDrawer
        title="セットの編集・削除"
        trigger={
          <Button variant="ghost" size="icon-sm" aria-label="メニューを開く">
            <MoreHorizontalIcon className="size-4 text-gray-500" />
          </Button>
        }
        actions={actions}
      />
    </div>
  );
};
