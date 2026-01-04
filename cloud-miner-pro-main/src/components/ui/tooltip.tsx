import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      // Modified styling to resemble a simplified Facebook UI card/panel
      "z-50 overflow-hidden rounded-lg border-2 border-[#4267B2] bg-[#F0F2F5] p-3 text-base text-[#1c1e21] shadow-xl animate-in fade-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = "FacebookUIPanel"; // Renamed display name to reflect transformation

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };