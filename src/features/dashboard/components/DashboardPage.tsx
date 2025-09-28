import { useRootStore } from "@/store/rootStore";

export function DashboardPage() {
  const { toast } = useRootStore();

  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        onClick={() => {
          toast.add({
            message: `This is a toast message ${Date.now()}`,
          });
        }}
      >
        Click
      </button>
    </div>
  );
}
