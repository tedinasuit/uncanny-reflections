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
    highlight?: boolean;
    posterSrc?: string;
    aspectRatio?: number;
    size?: "sm" | "md" | "lg";
  }
  | { type: "gallery"; items: GalleryItem[]; caption?: string; aspectRatio?: number }
  | { type: "callout"; tone: "primary" | "neutral" | "warning"; title?: string; body: string }
  | { type: "statRow"; items: { label: string; value: string }[] }
  | {
    type: "split";
    text: string;
    media: {
      mediaType: "image" | "video";
      src: string;
      alt?: string;
      caption?: string;
      posterSrc?: string;
    };
    reverse?: boolean;
    layout?: "50-50" | "60-40" | "40-60";
  }
  | { type: "divider" };

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video';
  poster?: string;
  highlight?: boolean;
}
