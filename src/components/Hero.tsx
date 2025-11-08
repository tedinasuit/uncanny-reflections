import { motion } from "framer-motion";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import headVideoMOV from "@/assets/head-pink.mov";
import headVideoWebM from "@/assets/head-pink.webm";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSafari = typeof navigator !== 'undefined' &&
    /^(?=.*safari)(?!.*(chrome|chromium|android|crios|fxios))/i.test(navigator.userAgent);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 px-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left side - Name */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-display tracking-tighter mb-4"
              >
                LARS<br />HOEIJMANS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-muted-foreground"
              >
                Creating digital experiences that explore how humans and machines see, move, and feel.
              </motion.p>
            </div>

            {/* Right side - Video */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]"
                onContextMenu={(e) => e.preventDefault()}
              >
                {!videoError ? (
                  isSafari ? (
                    <img
                      src={headVideoMOV}
                      alt="Animated portrait of Lars Hoeijmans"
                      className="w-full aspect-[3/4] object-cover rounded-lg"
                      draggable={false}
                    />
                  ) : (
                    <video
                      autoPlay={!prefersReducedMotion}
                      loop={!prefersReducedMotion}
                      muted
                      playsInline
                      onError={() => setVideoError(true)}
                      className="w-full aspect-[3/4] object-cover rounded-lg"
                      aria-label="Animated portrait of Lars Hoeijmans"
                      role="img"
                      draggable={false}
                    >
                      <source src={headVideoWebM} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  // Fallback placeholder if video fails
                  <div className="w-full aspect-[3/4] bg-card rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Video unavailable</span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
