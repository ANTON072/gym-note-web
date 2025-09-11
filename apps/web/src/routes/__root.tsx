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
    <main>
      <Outlet />
    </main>
    <GlobalFooter />
    {/* {import.meta.env.DEV && <TanStackRouterDevtools />} */}
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
