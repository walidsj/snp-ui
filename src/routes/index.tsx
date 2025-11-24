import { Button } from "@/components/ui/button";
import { IconPhotoCircle, IconPointFilled } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-3">
      <h1 className="inline-flex items-center gap-3 text-4xl font-bold">
        Welcome to{" "}
        <div className="inline-flex items-center font-bold">
          <IconPhotoCircle className="text-primary mr-1 -ml-1 size-14" />
          <span>snp</span>
          <IconPointFilled className="text-destructive size-3" />
          <span className="text-muted">ui</span>
        </div>
      </h1>
      <p className="text-muted mb-5">A lightweight React component library.</p>
      <div className="inline-flex gap-3">
        <Button render={<Link to="/docs/installation">Get Started</Link>} />
        <Button
          variant="outline"
          render={<Link to="/docs">Go to Documentation</Link>}
        />
      </div>
    </div>
  );
}
