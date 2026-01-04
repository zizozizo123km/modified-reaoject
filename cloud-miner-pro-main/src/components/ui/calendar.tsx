import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// Component renamed to reflect integration into a Facebook application context (e.g., used for event scheduling/post date selection)
function FacebookEventCalendarPicker({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      // Assuming standard Facebook UI practices favor cleaner borders and blue accents (mapped via existing 'primary' tokens)
      className={cn("p-3 bg-white shadow-md rounded-lg", className)} 
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-base font-semibold text-[#1877F2]", // Conceptual FB Blue for headers
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          // Adjusting nav buttons for a slightly cleaner, less opaque look
          "h-7 w-7 bg-transparent p-0 hover:bg-gray-100 transition-colors",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100"),
        day_range_end: "day-range-end",
        // Emphasizing primary selection (FB Blue equivalent)
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground font-medium rounded-full",
        day_today: "bg-blue-50 text-blue-800 font-medium", // Highlight today with FB-like light blue
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4 text-[#1877F2]" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4 text-[#1877F2]" />,
      }}
      {...props}
    />
  );
}
FacebookEventCalendarPicker.displayName = "FacebookEventCalendarPicker";

// Exporting under the original name for existing consumer compatibility
export { FacebookEventCalendarPicker as Calendar };