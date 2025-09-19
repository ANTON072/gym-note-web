import { GlobalFooter, GlobalHeader, LoginForm } from "@/components";
import { Toaster } from "@/components/Toaster";
import { useAuth } from "@/hooks";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Toaster as LibToaster } from "sonner";

import styles from "./root.module.css";

// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const LoadingSpinner = () => <div className={styles.loading}>読み込み中...</div>;

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>
    <GlobalHeader />
    <main className={styles.main}>{children}</main>
    <GlobalFooter />
    <Toaster />
    <LibToaster />
  </div>
);

const RootLayout = () => {
  const { status } = useAuth();

  const content = {
    loading: <LoadingSpinner />,
    logout: <LoginForm />,
    login: (
      <>
        <Outlet />
        {/* {import.meta.env.DEV && <TanStackRouterDevtools />} */}
      </>
    ),
  }[status];

  return <Layout>{content}</Layout>;
};

export const Route = createRootRoute({ component: RootLayout });
