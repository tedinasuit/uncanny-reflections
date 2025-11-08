import Navigation from "@/components/Navigation";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleContentRenderer from "@/components/article/ArticleContentRenderer";
import type { ContentBlock } from "@/types/content";
import { motion } from "framer-motion";

interface ProjectArticleLayoutProps {
  kicker: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  layoutId?: string;
  blocks: ContentBlock[];
  role?: string;
  technologies?: string[];
  nextCta?: { id: string; title: string };
  projectUrl?: string;
}

const ProjectArticleLayout = ({
  kicker,
  title,
  subtitle,
  coverImage,
  layoutId,
  blocks,
  role,
  technologies,
  nextCta,
  projectUrl,
}: ProjectArticleLayoutProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen">
      <Navigation />
      <ArticleHero
        kicker={kicker}
        title={title}
        subtitle={subtitle}
        image={coverImage}
        layoutId={layoutId}
        ctaUrl={projectUrl}
        ctaLabel={`Go to ${title}`}
      />

      {(role || (technologies && technologies.length > 0)) && (
        <div className="border-y border-border">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap items-center gap-3">
            {role && <div className="text-sm"><span className="text-muted-foreground mr-2">Role</span>{role}</div>}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <span key={t} className="px-3 py-1 bg-card text-sm border border-border">{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[800px]"><ArticleContentRenderer blocks={blocks} /></div>
      </div>

      {nextCta && (
        <div className="mt-20 mb-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <a
              href={`/project/${nextCta.id}`}
              className="block group relative overflow-hidden border border-border bg-card"
            >
              <div className="p-8 md:p-12">
                <div className="text-sm text-muted-foreground mb-2">Next Project</div>
                <div className="text-3xl md:text-5xl font-display tracking-tight group-hover:text-primary transition-colors">
                  {nextCta.title}
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none glow-effect" />
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectArticleLayout;


