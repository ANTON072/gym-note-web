import { type JSX, type ReactNode, useRef, useState } from "react";
import { Sheet, type SheetProps, type SheetRef } from "react-modal-sheet";

interface BottomSheetProps extends Omit<SheetProps, "children" | "isOpen" | "onClose"> {
  closeOnBackdropTap?: boolean;
  onBackdropTap?: () => void;
  onOpenEnd?: () => void;
}

export const useBottomSheet = (defaultProps?: BottomSheetProps) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef | null>(null);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const BottomSheet = ({
    children,
    ...props
  }: { children: ReactNode } & BottomSheetProps): JSX.Element => {
    const mergedProps = { ...defaultProps, ...props };
    const { closeOnBackdropTap, onBackdropTap, onOpenEnd, ...sheetProps } = mergedProps;

    // onBackdropTapが指定されている場合はcloseOnBackdropTapのデフォルトをfalseにする
    const shouldCloseOnTap = closeOnBackdropTap ?? !onBackdropTap;

    const handleBackdropTap = () => {
      if (onBackdropTap) {
        onBackdropTap();
      }
      if (shouldCloseOnTap) {
        onClose();
      }
    };

    return (
      <Sheet ref={ref} isOpen={isOpen} onClose={onClose} onOpenEnd={onOpenEnd} {...sheetProps}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content
            style={{
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              style={{
                padding: "0 var(--form-padding-horizontal)",
              }}
            >
              {children}
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={handleBackdropTap} />
      </Sheet>
    );
  };

  return {
    BottomSheet,
    onOpen,
    onClose,
    isOpen,
    snapTo: (i: number) => ref.current?.snapTo(i),
  };
};
