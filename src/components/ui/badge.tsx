import { cn } from "@/lib/utils";
import { mergeProps, useRender } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center shrink-0 justify-center gap-1.5 whitespace-nowrap cursor-pointer disabled:pointer-events-none font-medium transition-all [&_svg]:shrink-0",
  {
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    variants: {
      size: {
        sm: "h-6 px-2 rounded-lg text-xs [&_svg]:size-3",
        default: "h-8 px-3 rounded-xl text-sm [&_svg]:size-4",
        lg: "h-10 px-4 rounded-2xl text-base [&_svg]:size-5",
      },
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/85",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/85",
        outline:
          "bg-transparent text-primary border border-border shadow-sm hover:bg-primary/3",
        ghost: "bg-transparent text-primary hover:bg-primary/5",
        link: "bg-transparent text-primary hover:underline px-0 h-auto",
      },
    },
  },
);

interface badgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function badge({ className, variant, size, render, ...props }: badgeProps) {
  const defaultProps: badgeProps = {
    className: cn(badgeVariants({ className, size, variant })),
  };

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(defaultProps, props),
    render,
  });
}

export { badge };
