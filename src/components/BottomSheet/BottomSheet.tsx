import React from "react";
import { Sheet, type SheetProps, type SheetRef } from "react-modal-sheet";

interface Props extends Omit<SheetProps, "children"> {
  children: React.ReactNode;
}

export const BottomSheet = React.forwardRef<SheetRef, Props>(({ children, ...sheetProps }, ref) => {
  return (
    <Sheet ref={ref} {...sheetProps}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
});

BottomSheet.displayName = "BottomSheet";
