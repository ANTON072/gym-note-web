import { type ReactNode, useState } from "react";

import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export interface ActionMenuItem {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  to?: string;
  params?: Record<string, string>;
  variant?: "default" | "destructive";
}

interface ActionMenuDrawerProps {
  title: string;
  trigger: ReactNode;
  actions: ActionMenuItem[];
}

export const ActionMenuDrawer = ({ title, trigger, actions }: ActionMenuDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleActionClick = (action: ActionMenuItem) => {
    setIsOpen(false);
    action.onClick?.();
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-2">
          {actions.map((action) => {
            const buttonContent = (
              <>
                {action.icon}
                {action.label}
              </>
            );

            const buttonClassName = `w-full justify-start ${
              action.variant === "destructive" ? "text-destructive hover:text-destructive" : ""
            }`;

            if (action.to) {
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  className={buttonClassName}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={action.to} params={action.params}>
                    {buttonContent}
                  </Link>
                </Button>
              );
            }

            return (
              <Button
                key={action.label}
                variant="outline"
                className={buttonClassName}
                onClick={() => handleActionClick(action)}
              >
                {buttonContent}
              </Button>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
