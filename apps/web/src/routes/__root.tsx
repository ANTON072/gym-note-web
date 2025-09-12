import { GlobalFooter, GlobalHeader } from "@/components/layout";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <div
    style={{
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      height: "100svh",
    }}
  >
    <GlobalHeader />
    <main
      style={{
        maxWidth: "var(--max-content-width)",
        margin: "0 auto",
        width: "100%",
        padding: "var(--size-2)",
      }}
    >
      <Outlet />
    </main>
    <GlobalFooter />
    {/* {import.meta.env.DEV && <TanStackRouterDevtools />} */}
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
