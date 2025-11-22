import { Button } from "@/components/ui/button";
import { IconGitBranch } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/components/button")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Button - snp.ui" }],
  }),
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Button</h2>
      <h3 className="text-muted mb-6 text-sm">
        A button or a component that looks like a button.
      </h3>
      <div className="space-y-4">
        <section className="space-y-2">
          <h4 className="font-semibold">Variants</h4>
          <div className="space-y-2 space-x-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">Sizes</h4>
          <div className="space-y-2 space-x-2">
            <Button size="lg">Large</Button>
            <Button>Default</Button>
            <Button size="sm">Small</Button>
          </div>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">Icon</h4>
          <div className="space-y-2 space-x-2">
            <Button size="icon-lg">
              <IconGitBranch />
            </Button>
            <Button size="icon">
              <IconGitBranch />
            </Button>
            <Button size="icon-sm">
              <IconGitBranch />
            </Button>
          </div>
        </section>
        <section className="space-y-2">
          <h4 className="font-semibold">With Icon</h4>
          <div className="space-y-2 space-x-2">
            <Button size="lg">
              <IconGitBranch />
              Large
            </Button>
            <Button>
              <IconGitBranch />
              Default
            </Button>
            <Button size="sm">
              <IconGitBranch />
              Small
            </Button>
            <Button variant="outline">
              <IconGitBranch />
              Outline
            </Button>
            <Button variant="destructive">
              <IconGitBranch />
              Destructive
            </Button>
            <Button variant="ghost">
              <IconGitBranch />
              Ghost
            </Button>
            <Button variant="link">
              <IconGitBranch />
              Link
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
