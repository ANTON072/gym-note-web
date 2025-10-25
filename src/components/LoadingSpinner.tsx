import { Spinner } from "@/components/shadcn/spinner";

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner className="size-10 text-gray-300" />
  </div>
);
