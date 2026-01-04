import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Variants tailored to resemble Facebook's standard UI label styling (soft gray text)
const labelVariants = cva(
  "text-sm font-normal leading-normal text-[#606770] dark:text-[#B0B3B8] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
// Renamed display name to reflect the application theme change
Label.displayName = "FacebookUILabel";

export { Label };