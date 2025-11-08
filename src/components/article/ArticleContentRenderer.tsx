import type { ContentBlock } from "@/types/content";

interface ArticleContentRendererProps {
  blocks: ContentBlock[];
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const RichHeading = ({ level, text, anchor }: { level: 2 | 3; text: string; anchor?: string }) => {
  const id = anchor || slugify(text);
  const Tag = level === 2 ? "h2" : "h3";
  const className =
    level === 2
      ? "text-3xl md:text-4xl font-display tracking-tight mt-16 mb-6"
      : "text-2xl md:text-3xl font-display tracking-tight mt-10 mb-4";
  return (
    <Tag id={id} className={className}>
      {text}
    </Tag>
  );
};

const ProseParagraph = ({ text }: { text: string }) => (
  <p className="text-lg leading-relaxed text-muted-foreground mb-6">{text}</p>
);

const PullQuote = ({ text, attribution }: { text: string; attribution?: string }) => (
  <figure className="my-12 border-l-4 pl-6 border-primary">
    <blockquote className="text-2xl md:text-3xl font-display leading-snug">{text}</blockquote>
    {attribution && <figcaption className="mt-2 text-sm text-muted-foreground">— {attribution}</figcaption>}
  </figure>
);

const MediaFigure = ({
  src,
  alt,
  caption,
  fullBleed,
}: {
  src: string;
  alt?: string;
  caption?: string;
  fullBleed?: boolean;
}) => (
  <figure className={`my-10 ${fullBleed ? "mx-[-6vw]" : ""}`}>
    <img src={src} alt={alt || ""} className={`w-full ${fullBleed ? "rounded-none" : "rounded-md"} object-contain`} />
    {caption && <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>}
  </figure>
);

const GalleryMasonry = ({ items, caption }: { items: { src: string; alt?: string }[]; caption?: string }) => (
  <figure className="my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((it, idx) => (
        <img key={idx} src={it.src} alt={it.alt || ""} className="w-full rounded-md object-cover" />
      ))}
    </div>
    {caption && <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>}
  </figure>
);

const Callout = ({ tone, title, body }: { tone: "primary" | "neutral" | "warning"; title?: string; body: string }) => {
  const base = "p-5 rounded-md border";
  const toneClass =
    tone === "primary" ? "bg-primary/5 border-primary/30" : tone === "warning" ? "bg-yellow-500/10 border-yellow-500/30" : "bg-card border-border";
  return (
    <div className={`${base} ${toneClass} my-8`}>
      {title && <div className="text-sm uppercase tracking-wider mb-2">{title}</div>}
      <div className="text-base text-muted-foreground">{body}</div>
    </div>
  );
};

const StatRow = ({ items }: { items: { label: string; value: string }[] }) => (
  <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
    {items.map((it, idx) => (
      <div key={idx} className="p-4 border border-border bg-card">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
        <div className="text-xl font-semibold">{it.value}</div>
      </div>
    ))}
  </div>
);

const SectionDivider = () => <div className="my-12 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />;

const ArticleContentRenderer = ({ blocks }: ArticleContentRendererProps) => {
  return (
    <div>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading":
            return <RichHeading key={idx} level={block.level} text={block.text} anchor={block.anchor} />;
          case "paragraph":
            return <ProseParagraph key={idx} text={block.text} />;
          case "pullQuote":
            return <PullQuote key={idx} text={block.text} attribution={block.attribution} />;
          case "media":
            return (
              <MediaFigure
                key={idx}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                fullBleed={block.fullBleed}
              />
            );
          case "gallery":
            return <GalleryMasonry key={idx} items={block.items} caption={block.caption} />;
          case "callout":
            return <Callout key={idx} tone={block.tone} title={block.title} body={block.body} />;
          case "statRow":
            return <StatRow key={idx} items={block.items} />;
          case "divider":
            return <SectionDivider key={idx} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleContentRenderer;


