import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles adjusted for Facebook aesthetic (rounded-md, font-semibold, standard blue focus ring)
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Facebook Primary Blue Button
        default:
          "bg-[#1877F2] text-white shadow-sm hover:bg-[#166FE5]",
        // Destructive (Red)
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",
        // Outline (Blue border, white background)
        outline:
          "border border-[#1877F2] text-[#1877F2] bg-white shadow-sm hover:bg-blue-50",
        // Secondary (Light Gray background, used for tertiary/secondary actions)
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300",
        // Ghost (Transparent, Blue text)
        ghost: "text-[#1877F2] hover:bg-gray-100",
        // Link style
        link: "text-[#1877F2] underline-offset-4 hover:underline hover:bg-transparent",
        // Re-styled existing variants to fit a generic web app (removing specific 'miner' styles)
        gold: "bg-yellow-400 text-black font-bold hover:bg-yellow-500",
        success: "bg-green-500 text-white shadow-sm hover:bg-green-600", 
        glass: "bg-white/90 text-gray-900 border border-gray-200 hover:bg-gray-50/90 shadow-sm",
      },
      size: {
        // Standard Facebook-like height
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded px-3",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };