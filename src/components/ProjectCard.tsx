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
}

const ProjectCard = ({ id, title, category, year, image, thumbnailImage, index, disableSharedTransition }: ProjectCardProps) => {
  const thumbnailSrc = thumbnailImage || image;
  return (
    <Link to={`/project/${id}`} className="group block">
      <motion.div 
        layoutId={disableSharedTransition ? undefined : `project-${id}`}
        className="relative aspect-square overflow-hidden bg-card gallery-card"
      >
        <img
          src={thumbnailSrc}
          alt={title}
          className="w-full h-full object-contain smooth-transition group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 smooth-transition" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{year} · {category}</p>
            <h3 className="text-2xl md:text-3xl font-display tracking-tight group-hover:text-primary smooth-transition">
              {title}
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none glow-effect" />
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
