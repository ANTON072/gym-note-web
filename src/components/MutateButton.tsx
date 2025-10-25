import { useIsMutating } from "@tanstack/react-query";
import type { ComponentProps } from "react";
import { Button } from "./shadcn/button";
import { Spinner } from "./shadcn/spinner";

export const MutateButton = ({ children, disabled, ...props }: ComponentProps<typeof Button>) => {
  const isMutating = useIsMutating() > 0;

  return (
    <Button {...props} disabled={disabled || isMutating}>
      {isMutating && <Spinner />}
      {children}
    </Button>
  );
};
