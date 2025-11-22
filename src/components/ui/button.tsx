import { cn } from "@/lib/utils";
import { mergeProps, useRender } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center shrink-0 justify-center gap-2 whitespace-nowrap cursor-pointer disabled:pointer-events-none font-medium transition-all [&_svg]:shrink-0",
  {
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    variants: {
      size: {
        sm: "h-6 px-2.5 rounded-lg text-xs [&_svg]:size-3.5",
        default: "h-8 px-3 rounded-xl text-sm [&_svg]:size-4",
        lg: "h-10 px-4 rounded-2xl text-base [&_svg]:size-5",
        "icon-sm": "h-6 w-6 p-0 rounded-lg [&_svg]:size-4",
        icon: "h-8 w-8 p-0 rounded-xl [&_svg]:size-5",
        "icon-lg": "h-10 w-10 p-0 rounded-2xl [&_svg]:size-6",
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

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const defaultProps: ButtonProps = {
    className: cn(buttonVariants({ className, size, variant })),
  };

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
}

export { Button };
