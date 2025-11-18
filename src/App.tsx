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
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";
import headVideoMOV from "@/assets/head-pink.mov";
import headVideoWebM from "@/assets/head-pink.webm";
import Preloader from "@/components/Preloader";

const AnimatedRoutes = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const isPop = navType === "POP";

  return (
    <AnimatePresence initial={false}>
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

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadAssets = async () => {
      const isSafari = typeof navigator !== 'undefined' &&
        /^(?=.*safari)(?!.*(chrome|chromium|android|crios|fxios))/i.test(navigator.userAgent);

      const preloadImage = (src: string) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true); // Proceed even on error
        });
      };

      const preloadVideo = (src: string) => {
        return new Promise((resolve) => {
          const video = document.createElement("video");
          video.src = src;
          video.preload = "auto";
          video.onloadeddata = () => resolve(true);
          video.onerror = () => resolve(true);
          video.load(); // Trigger load
        });
      };

      const criticalPromises: Promise<unknown>[] = [
        preloadImage(heroBg),
      ];

      // Hero video/image
      if (isSafari) {
        // In Hero.tsx, Safari uses an <img> tag for the .mov file
        criticalPromises.push(preloadImage(headVideoMOV));
      } else {
        criticalPromises.push(preloadVideo(headVideoWebM));
      }

      // Project thumbnails AND detail images
      const projectImages = projects
        .flatMap((p) => [p.thumbnailImage, p.image, p.detailImage])
        .filter(Boolean) as string[];

      // Deduplicate
      const uniqueImages = [...new Set(projectImages)];

      uniqueImages.forEach((src) => {
        criticalPromises.push(preloadImage(src));
      });

      // Wait for all assets to load
      try {
        await Promise.all(criticalPromises);
      } catch (error) {
        console.error("Asset loading error:", error);
      }

      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && <AnimatedRoutes />}
    </>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
