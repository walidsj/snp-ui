import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/installation")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Installation - snp.ui" }],
  }),
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Installation</h2>
      <h3 className="text-muted mb-6 text-sm">
        How to install dependencies and structure your app.
      </h3>
    </div>
  );
}
