import { Button } from "@/components/ui/button";
import {
  IconAlignBoxCenterMiddle,
  IconCreditCard,
  IconForms,
  IconPackageImport,
  IconPalette,
  IconPhotoCircle,
  IconPointFilled,
  IconRocket,
} from "@tabler/icons-react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-background flex min-h-dvh flex-row">
      <aside className="w-xs border-r border-dashed p-3">
        <div className="mb-5 p-3">
          <h1 className="inline-flex items-center text-2xl font-bold">
            <IconPhotoCircle className="text-primary mr-1 -ml-1 size-8" />
            <span>snp</span>
            <IconPointFilled className="text-destructive size-3" />
            <span className="text-muted">ui</span>
          </h1>
          <p className="text-muted text-sm">
            A lightweight React component library.
          </p>
        </div>
        <nav>
          <h5 className="text-muted mb-2 px-3 text-xs font-semibold">
            Overview
          </h5>
          <ul className="mb-5 space-y-1">
            <li>
              <Button
                className="[&_svg]:text-muted data-[status=active]:bg-primary/5 w-full justify-start"
                variant="ghost"
                render={
                  <Link to="/docs" activeOptions={{ exact: true }}>
                    <IconRocket />
                    Get Started
                  </Link>
                }
              />
            </li>
            <li>
              <Button
                className="[&_svg]:text-muted data-[status=active]:bg-primary/5 w-full justify-start"
                variant="ghost"
                render={
                  <Link to="/docs/installation">
                    <IconPackageImport />
                    Installation
                  </Link>
                }
              />
            </li>
            <li>
              <Button
                className="[&_svg]:text-muted data-[status=active]:bg-primary/5 w-full justify-start"
                variant="ghost"
                render={
                  <Link to="/docs/theming">
                    <IconPalette />
                    Theming
                  </Link>
                }
              />
            </li>
          </ul>
          <h5 className="text-muted mb-2 px-3 text-xs font-semibold">
            Components
          </h5>
          <ul className="mb-5 space-y-1">
            <li>
              <Button
                className="[&_svg]:text-muted data-[status=active]:bg-primary/5 w-full justify-start"
                variant="ghost"
                render={
                  <Link to="/docs/components/button">
                    <IconAlignBoxCenterMiddle />
                    Button
                  </Link>
                }
              />
            </li>
            <li>
              <Button
                className="[&_svg]:text-muted data-[status=active]:bg-primary/5 w-full justify-start"
                variant="ghost"
                render={
                  <Link to="/docs/components/card">
                    <IconCreditCard />
                    Card
                  </Link>
                }
              />
            </li>
            <li>
              <Button
                className="[&_svg]:text-muted data-[status=active]:bg-primary/5 w-full justify-start"
                variant="ghost"
                render={
                  <Link to="/docs/components/input">
                    <IconForms />
                    Input
                  </Link>
                }
              />
            </li>
          </ul>
        </nav>
      </aside>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
