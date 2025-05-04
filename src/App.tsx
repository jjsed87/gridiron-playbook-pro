import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlayDetail from "./pages/PlayDetail";
import CategoryPage from "./pages/CategoryPage";
import Playbook from "./pages/Playbook";
import NotFound from "./pages/NotFound";
import VideoLibrary from "./pages/VideoLibrary";
import YouTubeVideo from "./pages/YouTubeVideo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/play/:id" element={<PlayDetail />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/videos" element={<VideoLibrary />} />
          <Route path="/youtube-video" element={<YouTubeVideo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
