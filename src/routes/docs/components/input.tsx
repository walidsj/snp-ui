import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/components/input")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Input - snp.ui" }],
  }),
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Input</h2>
      <h3 className="text-muted mb-6 text-sm">
        A form input field or a component that looks like an input field.
      </h3>
    </div>
  );
}
