import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Introduction - snp.ui" }],
  }),
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Introduction</h2>
      <h3 className="text-muted mb-6 text-sm">
        A shadcn-like component library built with Base UI and Tailwind CSS.
      </h3>
    </div>
  );
}
