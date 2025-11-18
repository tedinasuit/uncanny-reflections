import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    return 0.2 + (index * 0.1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: getAnimationDelay(),
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <Link to={`/project/${id}`} className="group block">
        <motion.div
          layoutId={disableSharedTransition ? undefined : `project-${id}`}
          className={`relative overflow-hidden bg-card gallery-card rounded-2xl aspect-[4/3] ${projectStyles.borderGlow} hover:${projectStyles.borderGlow.replace('0.3', '0.6')} smooth-transition`}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={thumbnailSrc}
            alt={title}
            className="w-full h-full object-cover smooth-transition group-hover:scale-110"
            loading="lazy"
          />

          {/* Dynamic gradient overlay based on project type */}
          <div
            className="absolute inset-0 opacity-60 group-hover:opacity-80 smooth-transition"
            style={{
              background: `linear-gradient(to top, hsl(0 0% 6.7%) 0%, hsl(0 0% 6.7% / 0.8) 30%, transparent 70%)`
            }}
          />


          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{year} · {category}</p>
              <h3 className={`text-2xl md:text-3xl font-display tracking-tight group-hover:${projectStyles.accentColor} smooth-transition`}>
                {title}
              </h3>
            </div>
          </div>

          {/* Enhanced glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none rounded-2xl"
            style={{
              boxShadow: `inset 0 0 40px ${projectStyles.glowColor}20, 0 0 60px ${projectStyles.glowColor}30`
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
