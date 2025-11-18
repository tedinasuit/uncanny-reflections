import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TRANSITION_EASE } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  thumbnailImage?: string;
  index: number;
  disableSharedTransition?: boolean;
  projectType?: "productivity" | "ai-creative" | "ai-3d" | "sports-app" | "museum" | "installation";
}

const ProjectCard = ({
  id,
  title,
  category,
  year,
  image,
  thumbnailImage,
  index,
  disableSharedTransition,
  projectType = "productivity"
}: ProjectCardProps) => {
  const thumbnailSrc = thumbnailImage || image;

  // Project type specific styling
  const getProjectTypeStyles = () => {
    switch (projectType) {
      case "productivity":
        return {
          glowColor: "hsl(220 100% 58%)", // Blue for productivity
          accentColor: "text-blue-400",
          borderGlow: "shadow-[0_0_30px_hsl(220_100%_58%_/_0.3)]"
        };
      case "ai-creative":
        return {
          glowColor: "hsl(280 100% 70%)", // Purple for AI creative
          accentColor: "text-purple-400",
          borderGlow: "shadow-[0_0_30px_hsl(280_100%_70%_/_0.3)]"
        };
      case "ai-3d":
        return {
          glowColor: "hsl(160 100% 50%)", // Green for AI 3D
          accentColor: "text-green-400",
          borderGlow: "shadow-[0_0_30px_hsl(160_100%_50%_/_0.3)]"
        };
      case "sports-app":
        return {
          glowColor: "hsl(25 100% 60%)", // Orange for sports
          accentColor: "text-orange-400",
          borderGlow: "shadow-[0_0_30px_hsl(25_100%_60%_/_0.3)]"
        };
      case "museum":
        return {
          glowColor: "hsl(45 100% 60%)", // Yellow for museum
          accentColor: "text-yellow-400",
          borderGlow: "shadow-[0_0_30px_hsl(45_100%_60%_/_0.3)]"
        };
      case "installation":
        return {
          glowColor: "hsl(340 100% 65%)", // Pink for installation
          accentColor: "text-pink-400",
          borderGlow: "shadow-[0_0_30px_hsl(340_100%_65%_/_0.3)]"
        };
      default:
        return {
          glowColor: "hsl(220 100% 58%)",
          accentColor: "text-primary",
          borderGlow: "shadow-[0_0_30px_hsl(220_100%_58%_/_0.3)]"
        };
    }
  };

  const projectStyles = getProjectTypeStyles();

  // Staggered animation delays
  const getAnimationDelay = () => {
    return 0.1 + (index * 0.05); // Faster stagger for snappier feel
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: getAnimationDelay(),
        ease: TRANSITION_EASE as any
      }}
      className="h-full"
    >
      <Link to={`/project/${id}`} className="group block h-full relative">
        <div className={`relative overflow-hidden bg-card gallery-card rounded-2xl aspect-[4/3] ${projectStyles.borderGlow} hover:${projectStyles.borderGlow.replace('0.3', '0.6')} smooth-transition h-full w-full transition-all duration-500 ease-out`}>

          {/* Shared Image Layer */}
          <motion.div
            layoutId={disableSharedTransition ? undefined : `project-${id}`}
            className="absolute inset-0 w-full h-full"
            transition={{
              duration: 0.8,
              ease: TRANSITION_EASE as any
            }}
          >
            <img
              src={thumbnailSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay inside the shared element so it morphs with the image?
                Actually, better to keep overlay separate if we want it to fade out.
                But if we want the "darkening" to persist, it should be here.
                Let's keep the gradient overlay separate so it fades out, revealing the clean image.
            */}
          </motion.div>

          {/* Dynamic gradient overlay - Fades out on exit */}
          <div
            className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(to top, hsl(0 0% 6.7%) 0%, hsl(0 0% 6.7% / 0.8) 30%, transparent 70%)`
            }}
          />

          {/* Content - Fades out on exit */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
            <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
              <p className="text-sm text-muted-foreground mb-2 opacity-80 group-hover:opacity-100 transition-opacity">{year} · {category}</p>
              <h3 className={`text-2xl md:text-3xl font-display tracking-tight group-hover:${projectStyles.accentColor} transition-colors duration-300`}>
                {title}
              </h3>
            </div>
          </div>

          {/* Enhanced glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{
              boxShadow: `inset 0 0 40px ${projectStyles.glowColor}20, 0 0 60px ${projectStyles.glowColor}30`
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
