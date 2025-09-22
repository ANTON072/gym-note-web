import { initializeAuthListener } from "@/lib/firebase/authInitializer";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./global.css";

// Firebase Authの状態監視を開始
initializeAuthListener();

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
