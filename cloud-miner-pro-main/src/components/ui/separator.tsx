import * as React from "react";

import { cn } from "@/lib/utils";

// Component converted to use a standard div element, mimicking a simple separator 
// often found in social media application UIs, removing reliance on Radix Primitives 
// to simplify structure.
const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical', decorative?: boolean }
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <div
    ref={ref}
    role={decorative ? undefined : "separator"}
    aria-orientation={orientation === 'vertical' ? 'vertical' : 'horizontal'}
    className={cn(
      "shrink-0 bg-border", 
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", 
      className
    )}
    {...props}
  />
));
Separator.displayName = "FacebookUISeparator";

export { Separator };