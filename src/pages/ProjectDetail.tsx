import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import ProjectArticleLayout from "@/components/article/ProjectArticleLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const detailImageSrc = project?.detailImage || project?.image;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

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

  if (project.blocks && project.blocks.length > 0) {
    return (
      <ProjectArticleLayout
        kicker={`${project.year} · ${project.category}`}
        title={project.title}
        subtitle={project.description}
        coverImage={detailImageSrc}
        layoutId={`project-${id}`}
        blocks={project.blocks}
        role={project.role}
        technologies={project.technologies}
      />
    );
  }


  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate("/", { state: { fromProject: true } })}
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
            <motion.div
              layoutId={`project-${id}`}
              className="aspect-video overflow-hidden gallery-card"
            >
              <img
                src={detailImageSrc}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div className="md:col-span-2">
              <h2 className="text-2xl font-display mb-4">About the Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {project.projectUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button asChild size="lg" className="group">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Go to {project.title}
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>
                </motion.div>
              )}

              {project.richSections && project.richSections.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-display mb-4">Deep Dive</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {project.richSections.map((section, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left text-base">
                          {section.heading}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-base leading-relaxed text-muted-foreground">
                            {section.body}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
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

      </div>
    </motion.div>
  );
};

export default ProjectDetail;
