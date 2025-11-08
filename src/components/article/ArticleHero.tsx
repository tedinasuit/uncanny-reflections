import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

interface ArticleHeroProps {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: string;
  layoutId?: string;
  ctaUrl?: string;
  ctaLabel?: string;
}

const ArticleHero = ({ kicker, title, subtitle, image, layoutId, ctaUrl, ctaLabel }: ArticleHeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <div ref={ref} className="relative min-h-[56vh] md:min-h-[62vh]">
      {image && (
        <motion.div style={{ y, opacity }} className="absolute inset-0 overflow-hidden" exit={{ opacity: 0 }}>
          <motion.div layoutId={layoutId} className="h-full w-full">
            <img src={image} alt={title} className="w-full h-full object-cover object-[50%_60%] md:object-center" loading="eager" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
      )}
      <div className={`relative ${image ? "pt-[28vh] pb-[10vh]" : "pt-28 pb-16"}`}>
        <div className="max-w-[1200px] mx-auto px-6 lg:pl-28 xl:pl-36">
          <p className="text-sm tracking-wider uppercase text-muted-foreground mb-4">{kicker}</p>
          <h1 className="text-5xl md:text-8xl font-display tracking-tight leading-[0.95] mb-6">
            {title}
          </h1>
          {subtitle && <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">{subtitle}</p>}
          {ctaUrl && (
            <div className="mt-6">
              <Button asChild size="sm" variant="secondary" className="rounded-full group">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                  {ctaLabel ?? "Visit"}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;


