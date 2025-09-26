import { Toaster } from "@/components/Toaster";
import { LoginForm, useAuth } from "@/features/auth";
import { GlobalFooter, GlobalHeader } from "@/features/navigation";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

const LoadingSpinner = () => <div className="root-loading">読み込み中...</div>;

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="root-container">
    <GlobalHeader />
    <main className="root-main">{children}</main>
    <GlobalFooter />
    <Toaster />
  </div>
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
