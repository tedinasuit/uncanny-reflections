import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectDetailTest from "./pages/ProjectDetailTest";
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
        <Route path="/project/:id/test" element={<ProjectDetailTest />} />
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

      // Collect ALL assets from projects
      const allProjectAssets = new Set<string>();
      const allProjectVideos = new Set<string>();

      projects.forEach((project) => {
        // 1. Main project images
        if (project.image) allProjectAssets.add(project.image);
        if (project.thumbnailImage) allProjectAssets.add(project.thumbnailImage);
        if (project.detailImage) allProjectAssets.add(project.detailImage);

        // 2. Content blocks
        if (project.blocks) {
          project.blocks.forEach((block) => {
            if (block.type === "media") {
              if (block.mediaType === "image") {
                allProjectAssets.add(block.src);
              } else if (block.mediaType === "video") {
                allProjectVideos.add(block.src);
                if (block.posterSrc) allProjectAssets.add(block.posterSrc);
              }
            } else if (block.type === "gallery") {
              block.items.forEach((item) => {
                allProjectAssets.add(item.src);
              });
            }
          });
        }
      });

      // Preload all images
      allProjectAssets.forEach((src) => {
        criticalPromises.push(preloadImage(src));
      });

      // Preload all videos
      allProjectVideos.forEach((src) => {
        criticalPromises.push(preloadVideo(src));
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
