import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  // Styling adjusted to mimic a Facebook feed post block (white background, rounded corners, shadow)
  <div ref={ref} className={cn("bg-white shadow-lg rounded-xl overflow-hidden", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    // Flex layout for Avatar, Name, and Options menu (typical FB header structure)
    <div ref={ref} className={cn("flex items-center justify-between p-3", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    // Used for the user's name (bold and standard text size)
    <h3 ref={ref} className={cn("text-base font-bold text-gray-900", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    // Used for time stamp or location (small, muted text)
    <p ref={ref} className={cn("text-xs text-gray-500", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    // Main content body (text, media, etc.)
    <div ref={ref} className={cn("p-4 text-sm text-gray-800", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    // Action bar (Like, Comment, Share) - centered actions, separated by a light border
    <div ref={ref} className={cn("flex items-center justify-around p-2 border-t border-gray-100 text-gray-500 text-sm", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };