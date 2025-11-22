import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/theming")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Theming - snp.ui" }],
  }),
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Theming</h2>
      <h3 className="text-muted mb-6 text-sm">
        Using CSS Variables and color utilities for theming.
      </h3>
    </div>
  );
}
