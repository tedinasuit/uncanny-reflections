import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <section className="max-w-[1800px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects exploring the intersection of design, technology, and human experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              year={project.year}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-32 py-12">
        <div className="max-w-[1800px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Lars Hoeijmans. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="mailto:hello@larshoeijmans.com" className="text-sm hover:text-primary smooth-transition">
              Email
            </a>
            <a href="https://twitter.com/larshoeijmans" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary smooth-transition">
              Twitter
            </a>
            <a href="https://linkedin.com/in/larshoeijmans" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary smooth-transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
