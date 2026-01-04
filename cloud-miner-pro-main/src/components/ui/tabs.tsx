import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    // Facebook style: Full width, centered items, white background, subtle bottom border
    className={cn(
      "flex w-full items-center justify-center bg-white border-b border-gray-200 text-gray-600",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    // Facebook style trigger: No rounding, blue indicator on active state, hover background
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors relative", // relative needed for potential future absolute indicator, though we use border-b here
      "text-gray-600 hover:bg-gray-100", // Default state and hover
      // Active state: Blue text, thick blue bottom border, no background change or shadow
      "data-[state=active]:text-blue-600 data-[state=active]:border-b-4 data-[state=active]:border-blue-600",
      // Focus/Disabled handling, adjust focus ring to blue
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    // Content styling remains neutral, focusing on visibility and accessibility
    className={cn(
      "mt-3 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };