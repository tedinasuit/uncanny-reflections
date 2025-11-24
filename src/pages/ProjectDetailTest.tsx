import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectDetailTest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    if (!project) return null;

    // Find previous and next projects
    const currentIndex = projects.findIndex((p) => p.id === id);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Navigation Overlay */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference">
                <Button
                    onClick={() => navigate("/")}
                    variant="ghost"
                    className="text-white hover:bg-white/20 rounded-full"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
                <div className="font-display font-bold tracking-widest uppercase text-sm">
                    {project.title}
                </div>
            </nav>

            {/* Hero Section */}
            <HeroSection project={project} />

            {/* Content Flow */}
            <div className="relative z-10 bg-black">
                <IntroSection project={project} />

                {/* Render Blocks */}
                {project.blocks?.map((block, index) => (
                    <BlockRenderer key={index} block={block} index={index} />
                ))}

                {/* Project Navigation */}
                <div className="py-32 px-6 border-t border-white/10 mt-32">
                    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {prevProject && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    onClick={() => navigate(`/project/${prevProject.id}/test`)}
                                    variant="outline"
                                    className="w-full h-32 border-white/20 hover:bg-white/10 hover:border-white/40 rounded-2xl group"
                                >
                                    <div className="flex items-center gap-4 w-full">
                                        <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
                                        <div className="flex-1 text-left">
                                            <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Previous</div>
                                            <div className="text-lg font-display font-bold">{prevProject.title}</div>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        )}
                        {nextProject && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={!prevProject ? "md:col-start-2" : ""}
                            >
                                <Button
                                    onClick={() => navigate(`/project/${nextProject.id}/test`)}
                                    variant="outline"
                                    className="w-full h-32 border-white/20 hover:bg-white/10 hover:border-white/40 rounded-2xl group"
                                >
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="flex-1 text-right">
                                            <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Next</div>
                                            <div className="text-lg font-display font-bold">{nextProject.title}</div>
                                        </div>
                                        <ArrowLeft className="h-6 w-6 rotate-180 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeroSection = ({ project }: { project: any }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y, scale, opacity }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
            </motion.div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 text-white/80"
                >
                    {project.year} — {project.category}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8"
                >
                    {project.title.split(" ").map((word: string, i: number) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </motion.h1>
            </div>
        </div>
    );
};

const IntroSection = ({ project }: { project: any }) => {
    return (
        <section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-light leading-tight mb-12"
                    >
                        {project.description}
                    </motion.h2>
                    <div className="prose prose-invert prose-lg text-white/70">
                        <p>{project.fullDescription}</p>
                    </div>
                </div>
                <div className="md:col-span-4 space-y-8 sticky top-32">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Role</h3>
                        <p className="text-lg">{project.role}</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Tech</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string) => (
                                <span key={tech} className="px-3 py-1 border border-white/20 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {project.projectUrl && (
                        <Button asChild size="lg" className="w-full bg-white text-black hover:bg-white/90 rounded-full">
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

const MediaBlock = ({ block, index }: { block: any, index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Apple-style reveal animation
    // Scale starts slightly larger and settles to 1
    const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
    // Opacity fades in smoothly
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    // Parallax for full bleed images
    const y = useTransform(scrollYProgress, [0, 1], ["0%", block.fullBleed ? "-10%" : "0%"]);

    // Container scale for the "window" effect
    const containerScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

    return (
        <div
            ref={ref}
            className={cn(
                "py-32 px-6", // Increased vertical padding for bigger gap
                block.fullBleed ? "w-full" : "max-w-screen-xl mx-auto"
            )}
        >
            <motion.div
                style={{ scale: containerScale, opacity }}
                className={cn(
                    "relative overflow-hidden rounded-lg flex items-center justify-center",
                    block.fullBleed
                        ? "w-full aspect-[9/16] md:aspect-[16/9]"
                        : "w-full max-h-[80vh]"
                )}
            >
                <motion.div
                    style={{ scale, y }}
                    className="w-full h-full"
                >
                    {block.mediaType === 'video' ? (
                        <video
                            src={block.src}
                            poster={block.posterSrc}
                            controls
                            className={cn(
                                block.fullBleed
                                    ? "w-full h-full object-cover"
                                    : "max-w-full max-h-[80vh] object-contain bg-black mx-auto"
                            )}
                        />
                    ) : (
                        <img
                            src={block.src}
                            alt={block.alt}
                            className={cn(
                                block.fullBleed
                                    ? "w-full h-full object-cover"
                                    : "max-w-full max-h-[80vh] object-contain mx-auto"
                            )}
                        />
                    )}
                </motion.div>
            </motion.div>
            {block.caption && (
                <motion.p
                    style={{ opacity }}
                    className="text-center text-white/50 mt-8 text-sm uppercase tracking-widest"
                >
                    {block.caption}
                </motion.p>
            )}
        </div>
    );
};

const BlockRenderer = ({ block, index }: { block: any, index: number }) => {
    switch (block.type) {
        case "heading": {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
                    className="max-w-4xl mx-auto mt-40 mb-12 px-6 text-center"
                >
                    <h3 className="text-4xl md:text-7xl font-display font-semibold tracking-tight leading-tight text-white">
                        {block.text}
                    </h3>
                </motion.div>
            );
        }

        case "paragraph": {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mx-auto mb-20 px-6 text-center"
                >
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-400 font-medium">
                        {block.text}
                    </p>
                </motion.div>
            );
        }

        case "pullQuote": {
            const quoteRef = useRef(null);
            const { scrollYProgress } = useScroll({
                target: quoteRef,
                offset: ["start end", "end start"]
            });

            const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
            const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
            const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 10]);

            return (
                <div className="py-32 px-6">
                    <motion.blockquote
                        ref={quoteRef}
                        style={{ opacity, scale, filter: useMotionTemplate`blur(${blur}px)` }}
                        className="text-5xl md:text-8xl font-display font-bold text-center max-w-6xl mx-auto leading-tight tracking-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            "{block.text}"
                        </span>
                    </motion.blockquote>
                </div>
            );
        }
        case "gallery":
            return (
                <div className="py-12 px-6 overflow-hidden">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {block.items.map((item: any, i: number) => {
                            const itemRef = useRef(null);
                            const { scrollYProgress } = useScroll({
                                target: itemRef,
                                offset: ["start end", "end start"]
                            });
                            const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
                            const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);

                            return (
                                <motion.div
                                    key={i}
                                    ref={itemRef}
                                    style={{ scale, opacity }}
                                    className={cn(
                                        "relative group",
                                        item.highlight
                                            ? "w-full aspect-[9/16] md:aspect-[16/9]"
                                            : "h-64 md:h-96"
                                    )}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className={cn(
                                            "w-full h-full rounded-lg bg-white/5",
                                            item.highlight
                                                ? "object-cover"
                                                : "w-auto object-contain"
                                        )}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                    {block.caption && (
                        <p className="text-center text-white/50 mt-8 text-sm uppercase tracking-widest">{block.caption}</p>
                    )}
                </div>
            );
        case "media":
            return <MediaBlock block={block} index={index} />;
        default:
            return null;
    }
};

export default ProjectDetailTest;
