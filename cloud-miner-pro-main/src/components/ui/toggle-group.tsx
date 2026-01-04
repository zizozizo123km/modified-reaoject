import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const FacebookSegmentControlContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const FacebookSegmentControl = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  // Adjusting styling to resemble a Facebook/Meta segmented control container (subtle background, padding)
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-0.5 rounded-lg bg-gray-100 p-0.5", className)} {...props}>
    <FacebookSegmentControlContext.Provider value={{ variant, size }}>{children}</FacebookSegmentControlContext.Provider>
  </ToggleGroupPrimitive.Root>
));

FacebookSegmentControl.displayName = ToggleGroupPrimitive.Root.displayName;

const FacebookSegmentControlItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(FacebookSegmentControlContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        // Applying Facebook primary color (blue) for the selected state
        "data-[state=on]:bg-blue-600 data-[state=on]:text-white data-[state=on]:shadow-sm transition-colors duration-200 data-[state=off]:text-gray-600 hover:data-[state=off]:bg-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

FacebookSegmentControlItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { FacebookSegmentControl, FacebookSegmentControlItem };