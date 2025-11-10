# Blendspace Visualize — Portfolio Overview

## Quick Intro (Plain English)
Blendspace Visualize is a studio for turning any online product listing into polished lifestyle visuals. Paste a product link—think IKEA furniture or a coffee machine—and the app finds the hero image, lets you describe the setting, and generates photorealistic scenes in seconds. No photo shoots, no manual cut-outs, just ready-to-share visuals.

It quietly handles the hard parts: scraping the product page, choosing the best imagery, keeping originals secure, and tracking your past products so you can remix them anytime.


## Core User Flow
1. **Access with a PIN**  
   Workspaces are protected with 6‑digit PINs so only invited teams can enter.
2. **Drop in a product URL**  
   The Firecrawl-powered scraper pulls the product title, description, and all imagery from the page—no copy/paste required.
3. **Pick the hero angle**  
   The system auto-selects the most usable image but surfaces alternates, plus extra angles for richer compositions.
4. **Describe the environment**  
   Choose from curated suggestions (“Modern living room”, “Outdoor patio”) or type your own prompt. Pick an aspect ratio (square, portrait, landscape) to match the campaign.
5. **Optional: Add supporting products or placement guidance**  
   - Layer in related products for bundle shots.  
   - Upload or sketch on an environment photo to anchor where the hero item should sit.
6. **Generate**  
   A Supabase Edge Function calls Google Gemini (Vertex AI) with your references and prompt, returning a new scene that’s automatically uploaded and watermarked.
7. **Review, retry, remix**  
   Watermarked previews land in a gallery with prompt + input history so you can iterate instantly or request the original via a secure download flow.


## Feature Highlights & Benefits
- **Smart product extraction**  
  - Cleans noisy titles (“Lamp | Store Name”) into product-friendly labels.  
  - Picks the right hero image and caches the entire scrape per account.
  - Benefit: One-click reuse for recurring products; no wasted scraping credits.

- **Multi-product scenes**  
  - Add up to two supporting products or extra angles for richer layouts.  
  - Prompt builder keeps the hero product in focus while placing extras naturally.  
  - Benefit: Create bundle shots and comparison visuals without separate sessions.

- **Guided placement (paint mode)**  
  - Paint roughly where the item should appear in an environment photo.  
  - Benefit: Direct control over composition without manual Photoshop work.

- **Aspect ratio presets & retries**  
  - Supports 10 aspect ratios (from 21:9 to 9:16) with metadata stored for instant retries.  
  - Benefit: Lock in campaign formats and iterate without re-entering settings.

- **Watermark pipeline & secure originals**  
  - Server stores full-quality outputs; users see watermarked previews.  
  - Secure download function verifies PIN ownership before revealing the original.  
  - Benefit: Share concepts safely while protecting high-res assets.

- **Product history gallery**  
  - Shows recent scrapes with thumbnails and metadata.  
  - Caches dimension data and prompts for quick recall.  
  - Benefit: Lightning-fast workflows for frequent catalogs.

- **Football Kit Swapper studio**  
  - Second workspace dedicated to swapping kits on player photos.  
  - Search or upload player imagery, select official club variants, and render new kits instantly.  
  - Benefit: Fan engagement and merchandising concepts without studio shoots.


## Technology Snapshot
- **Frontend**: Vite + React + TypeScript with Tailwind CSS, shadcn/ui, and Radix primitives for responsive, component-driven UI.
- **State & UX**: TanStack Query for network state, local storage for session persistence, event bus for gallery refreshes and retries.
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions) powers authentication, history caching, and secure downloads.
- **Scraping**: Firecrawl (invoked via Supabase Edge Function) extracts product metadata and imagery without exposing API keys to the browser.
- **AI Generation**: Google Gemini 2.5 Flash Image (Vertex AI) orchestrated through Supabase Edge Functions; client sends base64 references, server returns base64 outputs which are uploaded to Cloudinary.
- **Media Handling**: Cloudinary stores both watermarked previews and originals. Canvas watermarking runs client-side before upload.
- **Security Considerations**: PIN-based gating, RLS-backed tables, and Edge Functions that validate ownership before releasing unwatermarked assets.


## Why It Matters
- **Faster visual storytelling**: Marketing teams can go from product link to campaign-ready imagery in minutes, not days.
- **Cost-efficient**: Reuses scrape results, avoids re-shoots, and minimizes manual design time.
- **Consistent branding**: Aspect ratios, prompts, and retry flows keep visuals cohesive across campaigns.
- **Versatile**: Handles consumer products, decor, apparel, and even specialized use cases like football kits.

