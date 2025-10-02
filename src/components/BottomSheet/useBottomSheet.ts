import { useRef, useState } from "react";
import type { SheetRef } from "react-modal-sheet";

export const useBottomSheet = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef | null>(null);

  return {
    isOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    snapTo: (i: number) => ref.current?.snapTo(i),
    ref,
  };
};
