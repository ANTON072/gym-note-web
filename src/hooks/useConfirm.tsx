import { useState } from "react";
import { ConfirmDialog } from "../components/ConfirmDialog";

interface ConfirmOptions {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions>({
    message: "",
  });
  const [onConfirmCallback, setOnConfirmCallback] = useState<() => void>(() => () => {});
  const [onCancelCallback, setOnCancelCallback] = useState<(() => void) | undefined>(undefined);

  const open = (opts: ConfirmOptions, onConfirm: () => void, onCancel?: () => void) => {
    setOptions(opts);
    setOnConfirmCallback(() => onConfirm);
    setOnCancelCallback(onCancel ? () => onCancel : undefined);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirmCallback();
    close();
  };

  const handleCancel = () => {
    onCancelCallback?.();
    close();
  };

  const Dialog = () => (
    <ConfirmDialog
      isOpen={isOpen}
      title={options.title}
      message={options.message}
      confirmLabel={options.confirmLabel}
      cancelLabel={options.cancelLabel}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return {
    isOpen,
    open,
    close,
    ConfirmDialog: Dialog,
  };
};
