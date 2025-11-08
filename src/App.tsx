import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { projects } from "@/data/projects";

const AnimatedRoutes = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const isPop = navType === "POP";

  // Preload homepage thumbnails/detail images once
  useEffect(() => {
    const urls = projects.map((p) => p.thumbnailImage || p.image).filter(Boolean) as string[];
    const imgs: HTMLImageElement[] = [];
    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
      imgs.push(img);
    });
    return () => {
      // allow GC; no need to do anything on cleanup
    };
  }, []);
  
  return (
    <AnimatePresence mode="wait" initial={!isPop}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
