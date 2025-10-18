import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { XIcon } from "lucide-react";
import type { ReactNode } from "react";

interface NoteFormCardProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
}

export const NoteFormCard = ({ title, children, onClose }: NoteFormCardProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate({ to: "/" });
    }
  };

  return (
    <Card className="relative">
      <Button variant="ghost" size="icon" className="absolute top-3 right-3" onClick={handleClose}>
        <XIcon className="text-gray-500" />
      </Button>
      <CardHeader className="px-3">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-3">{children}</CardContent>
    </Card>
  );
};
