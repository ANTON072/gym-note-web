import { useIsMutating } from "@tanstack/react-query";
import { Button, type ButtonComponentProps } from "./Button";

export const MutateButton = (props: ButtonComponentProps) => {
  const isMutating = useIsMutating() > 0;

  return (
    <Button {...props} data-loading={isMutating}>
      {props.children}
    </Button>
  );
};
