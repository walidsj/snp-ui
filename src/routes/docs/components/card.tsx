import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/components/card")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Card - snp.ui" }],
  }),
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Card</h2>
      <h3 className="text-muted mb-6 text-sm">
        A content container for grouping related information.
      </h3>
    </div>
  );
}
