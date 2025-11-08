export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string; anchor?: string }
  | { type: "paragraph"; text: string }
  | { type: "pullQuote"; text: string; attribution?: string }
  | {
      type: "media";
      mediaType: "image" | "video";
      src: string;
      alt?: string;
      caption?: string;
      fullBleed?: boolean;
    }
  | { type: "gallery"; items: { src: string; alt?: string }[]; caption?: string }
  | { type: "callout"; tone: "primary" | "neutral" | "warning"; title?: string; body: string }
  | { type: "statRow"; items: { label: string; value: string }[] }
  | { type: "divider" };


