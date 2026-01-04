import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Note: Standard react-router-dom imports (BrowserRouter, Routes, Route) and NotFound 
// are removed, converting the application structure to a single-entry point 
// suitable for deployment within a Facebook Canvas/iFrame environment.

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Direct render of Index component, as routing is usually handled by the Facebook platform or unnecessary in a simple canvas app */}
      <Index />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;