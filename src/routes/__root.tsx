import { Loading } from "@/components";
import { Toaster } from "@/components/Toaster";
import { LoginForm, useAuth } from "@/features/auth";
import { GlobalFooter, GlobalHeader } from "@/features/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import styles from "./__root.module.css";

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
  <div className={styles.RootLayout__loading}>
    <Loading />
  </div>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <div className={styles.RootLayout}>
      <GlobalHeader />
      <main className={styles.RootLayout__main}>{children}</main>
      <GlobalFooter />
      <Toaster />
    </div>
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
