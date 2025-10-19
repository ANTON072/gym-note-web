import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XIcon } from "lucide-react";
import type { ReactNode } from "react";

interface NoteFormCardProps {
  title: string;
  children: ReactNode;
}

export const NoteFormCard = ({ title, children }: NoteFormCardProps) => {
  const handleClose = () => {
    window.history.back();
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
