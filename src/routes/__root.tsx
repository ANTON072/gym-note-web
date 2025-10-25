import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Toaster } from "@/components/shadcn/sonner";
import { LoginForm, useAuth } from "@/features/auth";
import { GlobalFooter, GlobalHeader } from "@/features/navigation";
import { queryClient } from "@/lib/queryClient";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface RouterContext {
  queryClient: QueryClient;
}

const Layout = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <div className="grid grid-rows-[auto_1fr_auto] h-svh">
      <GlobalHeader />
      <main className="w-full max-w-max-content-width px-content-gap mt-4 mx-auto">{children}</main>
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

export const Route = createRootRouteWithContext<RouterContext>()({ component: RootLayout });
