import { useRootStore } from "@/store/rootStore";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { toast } = useRootStore();

  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => {
          toast.add({
            message: `This is a toast message ${Date.now()}`,
            type: "normal",
          });
        }}
      >
        Click
      </button>
    </div>
  );
}
