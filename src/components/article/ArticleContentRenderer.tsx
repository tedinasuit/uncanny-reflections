import type { ContentBlock } from "@/types/content";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  mediaType = "image",
  src,
  alt,
  caption,
  fullBleed,
  posterSrc,
  aspectRatio,
  size,
}: {
  mediaType?: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  fullBleed?: boolean;
  posterSrc?: string;
  aspectRatio?: number;
  size?: "sm" | "md" | "lg";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const widthClass =
    size === "sm"
      ? "max-w-[240px] md:max-w-[280px]"
      : size === "md"
      ? "max-w-[640px]"
      : "max-w-none";

  return (
    <figure className={`my-10 ${fullBleed ? "mx-[-6vw]" : ""}`}>
      <div className={widthClass}>
        {aspectRatio ? (
          <AspectRatio ratio={aspectRatio}>
            {mediaType === "video" ? (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(true);
                  requestAnimationFrame(() => setOverlayVisible(true));
                }}
                className="group block w-full focus:outline-none"
                aria-label="Expand video"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full ${fullBleed ? "rounded-none" : "rounded-md"} object-contain`}
                  aria-label={alt || ""}
                  role="img"
                  controls={false}
                  poster={posterSrc}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </button>
            ) : (
              <img
                src={src}
                alt={alt || ""}
                className={`w-full h-full ${fullBleed ? "rounded-none" : "rounded-md"} object-contain`}
              />
            )}
          </AspectRatio>
        ) : (
          <>
            {mediaType === "video" ? (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(true);
                  requestAnimationFrame(() => setOverlayVisible(true));
                }}
                className="group block w-full focus:outline-none"
                aria-label="Expand video"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full ${fullBleed ? "rounded-none" : "rounded-md"} object-contain`}
                  aria-label={alt || ""}
                  role="img"
                  controls={false}
                  poster={posterSrc}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </button>
            ) : (
              <img
                src={src}
                alt={alt || ""}
                className={`w-full ${fullBleed ? "rounded-none" : "rounded-md"} object-contain`}
              />
            )}
          </>
        )}
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 transition-opacity duration-150 ${
            overlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setOverlayVisible(false);
            window.setTimeout(() => setIsOpen(false), 150);
          }}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              aria-label={alt || ""}
              role="img"
              controls={false}
              poster={posterSrc}
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
      {caption && <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
};

const GalleryMasonry = ({
  items,
  caption,
  aspectRatio,
}: {
  items: { src: string; alt?: string }[];
  caption?: string;
  aspectRatio?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <figure className="my-10">
      <div className="grid grid-cols-3 gap-3">
        {items.map((it, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setActiveIndex(idx);
              requestAnimationFrame(() => setOverlayVisible(true));
            }}
            className="group block w-full focus:outline-none"
            aria-label="Expand image"
          >
            <AspectRatio ratio={aspectRatio || 1}>
              <img
                src={it.src}
                alt={it.alt || ""}
                className="w-full h-full rounded-md object-cover transition-transform duration-150 group-hover:scale-[1.01]"
              />
            </AspectRatio>
          </button>
        ))}
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>}

      {activeIndex !== null && (
        <div
          className={`fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 transition-opacity duration-150 ${
            overlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => {
            setOverlayVisible(false);
            window.setTimeout(() => setActiveIndex(null), 150);
          }}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[activeIndex].src}
              alt={items[activeIndex].alt || ""}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </figure>
  );
};

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
                mediaType={block.mediaType}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                fullBleed={block.fullBleed}
                posterSrc={block.posterSrc}
                aspectRatio={block.aspectRatio}
                size={block.size}
              />
            );
          case "gallery":
            return <GalleryMasonry key={idx} items={block.items} caption={block.caption} aspectRatio={block.aspectRatio} />;
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


