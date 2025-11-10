import { useEffect, useMemo, useState } from "react";
import type { ContentBlock } from "@/types/content";

interface ArticleSideRailProps {
  blocks: ContentBlock[];
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const ArticleSideRail = ({ blocks }: ArticleSideRailProps) => {
  const headings = useMemo(
    () =>
      blocks
        .filter((b) => b.type === "heading")
        .map((b) => {
          const h = b as Extract<ContentBlock, { type: "heading" }>;
          const id = h.anchor || slugify(h.text);
          return { id, text: h.text, level: h.level };
        }),
    [blocks]
  );

  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const onScroll = () => {
      let current: string | null = headings[0]?.id ?? null;
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = h.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden lg:block sticky top-28 h-[calc(100vh-7rem)]">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">On this page</div>
      <nav className="space-y-2">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`block text-sm transition-colors ${
              activeId === h.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            } ${h.level === 3 ? "pl-3" : ""}`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default ArticleSideRail;



