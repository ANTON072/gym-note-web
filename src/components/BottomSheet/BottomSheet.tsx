import React from "react";
import { Sheet, type SheetProps, type SheetRef } from "react-modal-sheet";

interface Props extends Omit<SheetProps, "children"> {
  children: React.ReactNode;
  closeOnBackdropTap?: boolean;
  onBackdropTap?: () => void;
}

export const BottomSheet = React.forwardRef<SheetRef, Props>(
  ({ children, closeOnBackdropTap, onBackdropTap, onClose, ...sheetProps }, ref) => {
    // onBackdropTapが指定されている場合はcloseOnBackdropTapのデフォルトをfalseにする
    const shouldCloseOnTap = closeOnBackdropTap ?? !onBackdropTap;

    const handleBackdropTap = () => {
      if (onBackdropTap) {
        onBackdropTap();
      }
      if (shouldCloseOnTap && onClose) {
        onClose();
      }
    };

    return (
      <Sheet ref={ref} onClose={onClose} {...sheetProps}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{children}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={handleBackdropTap} />
      </Sheet>
    );
  },
);

BottomSheet.displayName = "BottomSheet";
