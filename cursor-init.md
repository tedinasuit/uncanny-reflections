# Uncanny Reflections - Portfolio Website

## Project Overview
This is a modern, single-page portfolio website for Lars Hoeijmans, showcasing his expertise in AI-powered applications and productivity platforms. The site features two major live projects - Blendspace Studio (AI creative platform) and FlowSpace (comprehensive productivity platform) - alongside curated examples of creative technology work.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC compiler
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Development Environment**: Local development with Vite

## Project Structure

### Core Architecture
- **Single Page Application (SPA)** with client-side routing
- **Component-based architecture** using React functional components
- **Responsive design** with mobile-first approach
- **Dark theme** with custom color palette (HSL-based)

### Key Pages & Components

#### Pages (`src/pages/`)
- **Index.tsx**: Homepage with hero section and project grid
- **ProjectDetail.tsx**: Individual project showcase with detailed information
- **About.tsx**: Personal bio, experience, and contact information
- **Contact.tsx**: Contact form and contact details
- **NotFound.tsx**: 404 error page

#### Components (`src/components/`)
- **Navigation.tsx**: Fixed header navigation with animated mobile menu
- **Hero.tsx**: Large typography hero section with background image
- **ProjectCard.tsx**: Grid item for project showcase with hover effects
- **UI Components**: Complete shadcn/ui component library (buttons, forms, dialogs, etc.)

### Data Layer
- **projects.ts**: Static data file containing project information
  - Project interface with fields: id, title, category, year, image, thumbnailImage?, detailImage?, description, fullDescription, technologies, role, projectUrl?, richSections?, blocks?
  - Multiple projects including live applications (Blendspace Studio, FlowSpace) and curated examples
  - Multi-image support: separate thumbnail images for grid view and detail images for project pages

### Styling System
- **Custom Design Tokens**: HSL color variables in `index.css`
- **Typography**: Inter (body) + Poppins (headings) from Google Fonts
- **Animations**: Custom cubic-bezier transitions and Framer Motion
- **Responsive Breakpoints**: Mobile-first with lg/md/sm classes
- **Gallery Effects**: Custom hover animations and glow effects

### Key Features
1. **Animated Page Transitions**: Framer Motion for smooth route changes
2. **Responsive Grid Layout**: Project showcase adapts to screen size
3. **Interactive Project Cards**: Hover effects with image scaling and overlays
4. **Detailed Project Pages**: Individual project views with "Go to [Project]" buttons for live applications
5. **Multi-Image Support**: Different thumbnail and detail images for optimal display contexts
6. **Contact Information**: Direct links to email and social profiles
7. **SEO Optimized**: Proper meta tags and Open Graph data
8. **Accessibility**: Semantic HTML and ARIA labels

### Build & Development
- **Development Server**: Vite dev server on port 8080
- **Build Process**: Vite build with SWC compiler for React
- **Linting**: ESLint with React hooks and refresh plugins
- **Package Manager**: npm (with bun.lockb present)
- **Path Aliases**: `@/` resolves to `src/` directory

### Deployment
- **Platforms**: Netlify, Vercel, or any static hosting service
- **Domain**: Can be configured with custom domain
- **Static Export**: Vite build outputs static files in `dist/` directory

## Development Workflow
1. **Local Development**: `npm run dev` starts development server
2. **Building**: `npm run build` creates production build
3. **Preview**: `npm run preview` serves production build locally
4. **Linting**: `npm run lint` checks code quality

## Notable Technical Details
- **Multi-Image System**: Separate thumbnail/detail images with optional fallbacks
- **Layout IDs**: Framer Motion shared layout animations between project grid and detail pages
- **Custom CSS Classes**: Gallery-specific animations and transitions with `object-contain` for uncropped images
- **Image Optimization**: Static asset imports with proper alt text and responsive image handling
- **Contact Integration**: Direct email and social media links throughout the site
- **Route-based Animations**: AnimatePresence for page transitions
- **Performance**: Lazy loading through React Router and optimized animations

## Project Goals
The website serves as a professional showcase for Lars Hoeijmans' work in:
- **AI-Powered Applications**: Blendspace Studio (creative AI platform) and FlowSpace (productivity with AI assistance)
- **Full-Stack Development**: Complex applications with advanced state management and real-time features
- **User Experience Design**: Intuitive interfaces for complex functionality
- **Technical Innovation**: Implementing cutting-edge features like RAG, multimodal AI, and PWA capabilities
- **Product-Market Fit**: Creating tools that solve real problems for creators and professionals

The design emphasizes minimalism, smooth animations, and thoughtful typography to reflect the creator's focus on building powerful yet accessible digital experiences.

## Knowledge Base (Project Info Markdown)
- Location: `src/project-info/*.md`
- Purpose: Internal knowledge base for rich project context (not loaded at runtime). Used as reference to craft concise portfolio copy and longform content.
- Do not import or render these files on the site. They exist to keep project history, tone, and details consistent and to speed up future edits.
- Update when major project changes ship (new features, architecture shifts). Skip trivial fixes.

## Hero Video Compatibility (head.mov img tag bypass)
- File(s): `src/components/Hero.tsx`, assets `head-pink.mov`, `head-pink.webm`
- Behavior:
  - Non‑Safari: `<video>` plays the WebM (`head-pink.webm`) with `autoPlay`, `loop`, `muted`, `playsInline` and respects `prefers-reduced-motion`.
  - Safari: falls back to an `<img src={head-pink.mov}>` to avoid autoplay/friction issues. This is an intentional compatibility/performance shortcut to keep the hero lightweight and consistent on Safari.
- Detection: simple user‑agent check for Safari.
- Fallback: a neutral card placeholder appears if playback fails.
- Note: Keep this behavior unless replacing with a fully tested Safari‑safe autoplay path. The priority is fast page load and reliable visual motion.

## Longform Project Pages (Editorial Layout)
- Purpose: Selected projects can render as bold, editorial articles instead of the standard compact detail layout.
- Activation: Add `blocks?: ContentBlock[]` to a project in `src/data/projects.ts`. When `blocks` exist, the detail route switches to the article layout automatically.
- Types: see `src/types/content.ts`
  - `heading (2|3)`, `paragraph`, `pullQuote`, `media (image|video)`, `gallery`, `callout`, `statRow`, `divider`
- Rendering components:
  - `ProjectArticleLayout` (hero, inline role/tech meta bar, content)
  - `ArticleHero` (full‑bleed cover, parallax; participates in shared element transition)
  - `ArticleContentRenderer` (renders `ContentBlock[]`)
- Transitions:
  - Shared element transition from grid → hero via Framer Motion `layoutId`: the card and hero share `layoutId=project-${id}` for fluid navigation in both directions.
- Fallback:
  - If `blocks` are absent, the classic `ProjectDetail` layout renders.
  - Optional `richSections` still render as an Accordion on the classic layout for medium‑depth projects.

## Authoring Longform Content (Quick Start)
1) In `src/data/projects.ts`, add a `blocks` array to the project:
```ts
blocks: [
  { type: "heading", level: 2, text: "What it is" },
  { type: "paragraph", text: "Short, high-signal description." },
  { type: "statRow", items: [{ label: "Platform", value: "Web" }, { label: "AI", value: "RAG" }] },
  { type: "divider" },
  { type: "heading", level: 2, text: "Why it stands out" },
  { type: "paragraph", text: "A crisp explanation of differentiation." },
  { type: "pullQuote", text: "A bold line worth highlighting." }
]
```
2) Title/cover: The article hero uses the project’s `title`, `description` (as subtitle), and `detailImage || image`.
3) Role/Tech: Displayed in an inline meta bar below the hero (non‑sticky per design).

## Performance Notes
- Keep the article components small and dependency‑light; no heavy third‑party libs in the renderer.
- Images in content blocks use standard `<img>` tags; prefer optimized assets and sizes. Add `loading="lazy"` on large, below‑the‑fold media if needed.
- Shared element transitions are scoped to hero/cover only to prevent layout thrash.
- Respect `prefers-reduced-motion`; keep motion subtle and purposeful.
- Framer Motion transitions are tuned for short durations and limited properties to avoid jank.

## Organic/Human Writing Guidelines (Editorial Voice)
Use this style for all project pages and longform content. The goal is calm, clear, human writing that explains what it is and why it exists—without hype.

- Tone & intent
  - Prefer calm, plain language over marketing speak.
  - Explain what it is, why it exists, and what’s special; avoid buzzwords and superlatives.
  - Use concrete details and outcomes over vague claims.
- Structure
  - 2–3 section headers total per project page (typical: “Why I built it”, “The experience”, “Behind the scenes”).
  - Favor short paragraphs over long bullet lists. Avoid nested lists unless truly needed.
  - At most one pull quote; use sparingly and only if it adds meaning.
- Content selection (portfolio-first)
  - Keep school-style sections (MoSCoW, exhaustive requirements/specs) out of public pages.
  - Include only what helps a visitor quickly understand the work and its impact.
  - If research exists, summarize only the high-signal takeaways (e.g., key percentages, small sample caveat).
- Technical depth
  - Keep tech sections concise: name the system and a few key choices; avoid implementation dumps.
  - Mention reliability/performance only when it explains a visible choice (e.g., dual‑GPU to stay smooth all day).
- Local context
  - Dutch Design Week pages should include a brief DDW context line explaining what DDW is.
  - Client/stakeholder context is fine if it clarifies constraints or outcomes (e.g., award, follow‑up, deployment).
- Language & clarity
  - No adjective stacking; remove filler (innovative, seamless, cutting‑edge) unless substantiated.
  - Prefer verbs over nouns; describe what the user does or experiences.
  - Keep sentences tight (generally ≤2 clauses); break long thoughts into two sentences.
- Blocks authoring (in `projects.ts`)
  - Use a small number of `heading` and `paragraph` blocks; minimize `statRow` and `divider`.
  - Reserve `callout` for a single next action (e.g., “Try FlowSpace”, “See the studio”).
  - Media is optional; when used, keep captions informative and short.
- Criteria for rewrites
  - If a page reads like a feature list or ad, refactor into 2–3 sections with narrative paragraphs.
  - Remove noisy headers and convert lists into prose where possible.
  - Keep one memorable line/quote if it genuinely helps the reader remember the point.
