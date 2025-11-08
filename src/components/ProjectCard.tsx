import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  thumbnailImage?: string;
  index: number;
}

const ProjectCard = ({ id, title, category, year, image, thumbnailImage, index }: ProjectCardProps) => {
  const thumbnailSrc = thumbnailImage || image;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/project/${id}`} className="group block">
        <motion.div 
          layoutId={`project-${id}`}
          className="relative aspect-square overflow-hidden bg-card gallery-card"
        >
          <img
            src={thumbnailSrc}
            alt={title}
            className="w-full h-full object-contain smooth-transition group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 smooth-transition" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <p className="text-sm text-muted-foreground mb-2">{year} · {category}</p>
              <h3 className="text-2xl md:text-3xl font-display tracking-tight group-hover:text-primary smooth-transition">
                {title}
              </h3>
            </motion.div>
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none glow-effect" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
