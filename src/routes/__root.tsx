import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner";
import { LoginForm, useAuth } from "@/features/auth";
import { GlobalFooter, GlobalHeader } from "@/features/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24時間
      refetchOnWindowFocus: false, // window.focus時に再取得しない
    },
  },
});

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner className="size-10 text-gray-300" />
  </div>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <div className="grid grid-rows-[auto_1fr_auto] h-svh">
      <GlobalHeader />
      <main className="w-full max-w-max-content-width p-content-gap mt-2 mx-auto">{children}</main>
      <GlobalFooter />
    </div>
    <Toaster />
  </QueryClientProvider>
);

const RootLayout = () => {
  const { status } = useAuth();

  const content = {
    loading: <LoadingSpinner />,
    logout: <LoginForm />,
    login: <Outlet />,
  }[status];

  return <Layout>{content}</Layout>;
};

export const Route = createRootRoute({ component: RootLayout });
