import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        tech: [
          // base
          "gap-1.5 px-3 py-1 font-medium tracking-wide",
          "border-primary/20 bg-card/40 backdrop-blur-sm text-foreground/85",
          // leading dot
          "before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full",
          "before:bg-gradient-to-br before:from-primary before:to-accent",
          "before:shadow-[0_0_6px_rgba(64,156,255,0.6)]",
          // hover
          "hover:border-primary/50 hover:bg-primary/10 hover:text-foreground",
          "hover:shadow-[0_0_14px_-2px_rgba(64,156,255,0.35)]",
          "hover:before:shadow-[0_0_10px_rgba(64,156,255,0.9)]",
          "cursor-default",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
