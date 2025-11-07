import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Project not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-8 -ml-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <div className="mb-12">
              <p className="text-sm text-muted-foreground mb-4">
                {project.year} · {project.category}
              </p>
              <h1 className="text-5xl md:text-7xl font-display tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="aspect-video overflow-hidden bg-card gallery-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div className="md:col-span-2">
              <h2 className="text-2xl font-display mb-4">About the Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Role
                </h3>
                <p>{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-card text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-[1800px] mx-auto px-6 mt-32"
        >
          <div className="border-t border-border pt-12">
            <p className="text-sm text-muted-foreground mb-6">Next Project</p>
            <Link
              to={`/project/${nextProject.id}`}
              className="group block relative aspect-[21/9] overflow-hidden bg-card gallery-card"
            >
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="w-full h-full object-cover smooth-transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 smooth-transition" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <p className="text-sm text-muted-foreground mb-2">
                  {nextProject.year} · {nextProject.category}
                </p>
                <h3 className="text-4xl md:text-5xl font-display tracking-tight group-hover:text-primary smooth-transition">
                  {nextProject.title}
                </h3>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none glow-effect" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
