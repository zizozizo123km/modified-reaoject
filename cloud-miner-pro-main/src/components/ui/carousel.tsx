import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Renaming types for Facebook Post Viewer context
type PostViewerApi = UseEmblaCarouselType[1];
type UsePostViewerParameters = Parameters<typeof useEmblaCarousel>;
type PostViewerOptions = UsePostViewerParameters[0];
type PostViewerPlugin = UsePostViewerParameters[1];

type PostViewerProps = {
  opts?: PostViewerOptions;
  plugins?: PostViewerPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: PostViewerApi) => void;
};

type PostViewerContextProps = {
  postViewerRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & PostViewerProps;

// Renaming Context
const PostViewerContext = React.createContext<PostViewerContextProps | null>(null);

function usePostViewer() {
  const context = React.useContext(PostViewerContext);

  if (!context) {
    throw new Error("usePostViewer must be used within a <FacebookPostViewer />");
  }

  return context;
}

// Renaming the main component to reflect Facebook usage (e.g., viewing posts/stories)
const FacebookPostViewer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & PostViewerProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [postViewerRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: PostViewerApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <PostViewerContext.Provider
        value={{
          postViewerRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative group", className)} // Added group for hover effects on navigation buttons
          role="region"
          aria-roledescription="facebook post viewer"
          {...props}
        >
          {children}
        </div>
      </PostViewerContext.Provider>
    );
  },
);
FacebookPostViewer.displayName = "FacebookPostViewer";

// Renaming content container
const PostFeedContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { postViewerRef, orientation } = usePostViewer();

    return (
      <div ref={postViewerRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
PostFeedContent.displayName = "PostFeedContent";

// Renaming individual item
const FeedPostItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = usePostViewer();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="single feed post"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
FeedPostItem.displayName = "FeedPostItem";

// Renaming and restyling navigation buttons to better approximate Facebook UI
const PostPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "ghost", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = usePostViewer();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute z-10 h-10 w-10 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow-md bg-white/70 hover:bg-white dark:bg-gray-800/70 dark:hover:bg-gray-800",
          orientation === "horizontal"
            ? "left-2 top-1/2 -translate-y-1/2" // Positioning closer to the edge of the visible content
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-100" />
        <span className="sr-only">Previous Post</span>
      </Button>
    );
  },
);
PostPrevious.displayName = "PostPrevious";

const PostNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "ghost", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = usePostViewer();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute z-10 h-10 w-10 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow-md bg-white/70 hover:bg-white dark:bg-gray-800/70 dark:hover:bg-gray-800",
          orientation === "horizontal"
            ? "right-2 top-1/2 -translate-y-1/2" // Positioning closer to the edge of the visible content
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-5 w-5 text-gray-700 dark:text-gray-100" />
        <span className="sr-only">Next Post</span>
      </Button>
    );
  },
);
PostNext.displayName = "PostNext";

// Exporting the new components and API type
export { 
  type PostViewerApi, 
  FacebookPostViewer, 
  PostFeedContent, 
  FeedPostItem, 
  PostPrevious, 
  PostNext 
};