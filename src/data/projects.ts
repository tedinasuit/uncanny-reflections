import projectMirror from "@/assets/project-mirror.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import blendspace from "@/assets/blendspace.png";
import blendspaceThumb from "@/assets/blendspace-thumb.png";
import flowspace from "@/assets/flowspace.png";
import flowspaceThumb from "@/assets/flowspace-thumb.png";
import ddwThumb from "@/assets/ddw-thumb.jpeg";
import ddw from "@/assets/ddw.jpeg";
import type { ContentBlock } from "@/types/content";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  thumbnailImage?: string; // Optional thumbnail for grid (falls back to image)
  detailImage?: string;    // Optional detail image for project page (falls back to image)
  description: string;
  fullDescription: string;
  technologies: string[];
  role: string;
  projectUrl?: string;
  // Optional structured deep-dive sections for projects that need more than a short description
  richSections?: { heading: string; body: string }[];
  // Optional longform article content
  blocks?: ContentBlock[];
}

export const projects: Project[] = [
  {
    id: "ddw",
    title: "Dutch Design Week 2025",
    category: "Installation",
    year: "2025",
    image: ddw,
    thumbnailImage: ddwThumb,
    description: "An AI-powered mirror installation exploring human-machine perception",
    fullDescription: "Constructed Mirror is an immersive installation that challenges our understanding of identity and perception through the lens of artificial intelligence. The piece uses real-time AI processing to create a dialogue between human reflection and machine interpretation, asking viewers to confront how they are seen, both by themselves and by algorithmic systems.",
    technologies: ["Computer Vision", "Machine Learning", "Real-time Processing", "Interactive Installation"],
    role: "Concept, Design & Development"
  },
  {
    id: "flowspace",
    title: "FlowSpace",
    category: "Productivity Platform",
    year: "2025",
    image: flowspace,
    thumbnailImage: flowspaceThumb,
    description: "It started as a small tool for my own projects and grew into a hub for managing projects, tasks and also your personal time.",
    fullDescription: "FlowSpace began as a tiny tool I built to manage my own projects. I still use it every day, and over time it grew into a personal workspace where projects, tasks, notes, and your schedule live together. It runs as a fast PWA with Kanban boards, a helpful AI assistant (Flowie Studio), Google Calendar sync, and a simple set of creative tools for writing, whiteboarding, and managing files. Under the hood it uses RAG to understand your documents, keep track of project context, and turn natural language into tasks. Collaboration is built in with roles and permissions, and data is protected with row-level security. It feels like the power of enterprise tools without the bloat or the price.",
    technologies: ["React 18", "TypeScript", "Supabase", "Google Gemini AI", "Tailwind CSS", "Framer Motion", "Progressive Web App"],
    role: "Full-Stack Developer & Product Architect",
    projectUrl: "https://flowspace.site",
    blocks: [
      { type: "heading", level: 2, text: "What it is" },
      {
        type: "paragraph",
        text: "A calm, beautifully designed workspace that pulls projects, tasks, calendar, documents, and ideas into one place. It installs as a PWA, works offline, and feels fast everywhere."
      },
      {
        type: "statRow",
        items: [
          { label: "Platform", value: "Web · PWA · Offline" },
          { label: "Calendar", value: "Native + Google Sync" },
          { label: "Assistant", value: "Context‑aware (RAG)" },
          { label: "Modes", value: "Kanban · Timeline · Docs · Whiteboard" }
        ]
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Why it stands out" },
      {
        type: "paragraph",
        text: "It’s powerful without feeling heavy. One workspace, many modes—no switching apps. The assistant actually helps: create tasks in plain language, summarize projects, and pull facts from your own docs."
      },
      { type: "heading", level: 3, text: "Designed for momentum" },
      {
        type: "paragraph",
        text: "Double‑click to edit, drag to reschedule, minimal modals, helpful empty states. Mobile‑first UI with consistent, accessible components and polished motion."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Core capabilities" },
      {
        type: "paragraph",
        text: "Customizable Kanban with sections that fit your workflow. A clean timeline to plan by dragging dates. A “Your Day” dashboard that pulls tasks, events, and time blocks into a single, actionable view."
      },
      {
        type: "paragraph",
        text: "Create and link events, overlay Google Calendar, and keep everything in sync. Capture ideas with sticky notes, write in a modern doc editor, and sketch flows on a whiteboard."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "AI that actually helps" },
      {
        type: "paragraph",
        text: "Ask in plain language to create and edit tasks, summarize projects, and answer questions grounded in your own documents. Retrieval keeps responses relevant; suggestions are practical and safe."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Architecture & craft" },
      {
        type: "paragraph",
        text: "React + TypeScript with a clear modular structure. Supabase provides auth, storage, and real‑time sync with row‑level security. Optimistic updates keep interactions snappy and forgiving."
      },
      {
        type: "paragraph",
        text: "Built as a Progressive Web App for offline use and installability. Image handling and rendering are tuned for speed on mobile and desktop."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Impact" },
      {
        type: "paragraph",
        text: "Fewer tabs and fewer handoffs. A single, cohesive place to plan, create, and execute—especially for people who think visually and work across multiple modes."
      },
      {
        type: "callout",
        tone: "primary",
        title: "Try FlowSpace",
        body: "It started as a tool for my own projects and grew into a studio for your work."
      }
    ]
  },
  {
    id: "lineup-creator",
    title: "Lineup Creator",
    category: "Sports Application",
    year: "2024",
    image: project1,
    description: "A modern football lineup maker that turns tactics into professional-grade graphics and videos for coaches, analysts, and fans",
    fullDescription: "Lineup Creator is a modern football lineup maker designed for coaches, analysts, content creators, and fans who live and breathe tactics. Built with a focus on visual quality and user experience, it allows users to build and customize football formations through intuitive drag-and-drop interfaces, then export them as professional-grade graphics and videos. The app features customizable kits, pitch styles, backgrounds, and player positioning, with the ability to create lineup variations for different possession states. Unlike other lineup tools, Lineup Creator prioritizes bold visuals, intuitive design, and ad-free experience, ensuring every export looks premium and editorial. The cross-platform application works seamlessly on iOS, Android, and web, featuring smooth gestures, real-time feedback, and a custom rendering pipeline that ensures crisp, scalable exports across all devices and formats.",
    technologies: ["React", "TypeScript", "Custom Rendering Pipeline", "Cross-Platform Development", "State Management"],
    role: "Product Design & Frontend Engineering"
  },
  {
    id: "blendspace-studio",
    title: "Blendspace Studio",
    category: "AI Creative Platform",
    year: "2025",
    image: blendspace,
    thumbnailImage: blendspaceThumb,
    description: "An AI studio for making photorealistic product shots, and even convincing football kit swaps, without a photoshoot.",
    fullDescription: "Blendspace Studio turns a product URL or image into studio-quality visuals in minutes. You can place products in realistic scenes, adjust backgrounds, add supporting items, and do convincing football kit swaps across major leagues. Paint tools help with precise placement, multi-product layouts make composition easy, and a gallery workflow lets you iterate safely with watermarked previews before downloading final assets. It’s built for speed and security so teams can go from idea to polished marketing images without the time and cost of a shoot.",
    technologies: ["React", "TypeScript", "AI Integration", "WebGL", "Node.js", "Real-time Processing"],
    role: "Product, Design, Engineering & Systems Integration",
    projectUrl: "https://blendspace-studio.vercel.app",
    blocks: [
      { type: "heading", level: 2, text: "What it is" },
      {
        type: "paragraph",
        text: "An AI studio that turns product links or images into studio‑quality visuals—without booking a photoshoot. Place products into realistic scenes, customize environments, and export polished assets fast."
      },
      {
        type: "statRow",
        items: [
          { label: "Inputs", value: "Product URL · Image Upload" },
          { label: "Outputs", value: "High‑res Images · Layouts" },
          { label: "Controls", value: "Paint · Layout · Gallery" },
          { label: "Use‑cases", value: "E‑com · Social · Ads" }
        ]
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Why it stands out" },
      {
        type: "paragraph",
        text: "Blendspace focuses on quality and control. You aren’t just prompting—you’re art directing: adjust backgrounds, add supporting items, and refine placement with paint tools and multi‑product layouts."
      },
      { type: "heading", level: 3, text: "Safe iteration" },
      {
        type: "paragraph",
        text: "A gallery workflow lets teams iterate quickly with watermarked previews and only export finals when ready—ideal for review cycles and brand approvals."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Core workflow" },
      {
        type: "paragraph",
        text: "Start from a product URL or upload. Compose a scene with photoreal lighting and perspective. Use paint tools for fine placement, then generate a set of candidate shots for review."
      },
      {
        type: "paragraph",
        text: "For football kit swaps, apply league‑specific presets to transfer kits convincingly, then fine‑tune details for seams, folds, and lighting continuity."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "AI & rendering pipeline" },
      {
        type: "paragraph",
        text: "Frontend in React + TypeScript with WebGL assists for previews and compositing. Server side orchestrates AI image ops and guardrails. Real‑time feedback keeps edits responsive while heavier jobs run off‑thread."
      },
      { type: "heading", level: 3, text: "Performance & reliability" },
      {
        type: "paragraph",
        text: "Optimized upload/preview pipeline, responsive images, and smart caching yield fast iteration. Guardrails prevent accidental over‑processing and preserve brand‑critical details."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Impact" },
      {
        type: "paragraph",
        text: "Teams move from idea to polished marketing assets in minutes—cutting cost, lead time, and coordination. It brings the polish of a studio into a browser."
      },
      {
        type: "callout",
        tone: "primary",
        title: "See the studio",
        body: "From product link to ad‑ready visuals with art‑director controls and safe iteration."
      }
    ]
  },
  {
    id: "michiel-de-ruyter",
    title: "Michiel de Ruyter — Virtual Human",
    category: "Real‑Time AI + 3D",
    year: "2025",
    image: project3,
    description: "A lifelike, Dutch‑speaking virtual Michiel de Ruyter you can converse with—built with MetaHuman, UE5, and real‑time AI.",
    fullDescription: "An interactive historical character inside Unreal Engine 5. Using MetaHuman, tuned physics, and ray‑traced lighting, Michiel de Ruyter lives aboard a historically inspired ship and responds in natural Dutch via OpenAI’s real‑time speech model. The experience balances presence, performance, and safety to make history feel close and conversational.",
    technologies: ["OpenAI Realtime API", "Unreal Engine 5", "MetaHuman", "FluidFlux", "Ray Tracing", "Prompt Engineering"],
    role: "Technical Direction, Character & Rendering",
    blocks: [
      { type: "heading", level: 2, text: "What it is" },
      {
        type: "paragraph",
        text: "A real‑time, Dutch‑speaking virtual human of Michiel de Ruyter aboard a storm‑tossed ship in Unreal Engine 5. Speak to him naturally; he responds with a dignified, historically grounded persona—instantly."
      },
      {
        type: "statRow",
        items: [
          { label: "Voice", value: "OpenAI Echo (Dutch)" },
          { label: "Engine", value: "UE5 + MetaHuman" },
          { label: "Water", value: "FluidFlux" },
          { label: "Rendering", value: "Real‑time Ray Tracing" }
        ]
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Challenge" },
      {
        type: "paragraph",
        text: "Make a historical figure feel present—not like a chatbot—while preserving low latency, visual fidelity, and safety in a dark, stormy scene."
      },
      { type: "heading", level: 2, text: "Solution" },
      {
        type: "paragraph",
        text: "A Dutch‑only persona with explicit guardrails, a MetaHuman character sculpted to match portraiture, tuned ship physics with custom deck collisions, and denoiser‑aware lighting that keeps his face readable without breaking the ambience."
      },
      {
        type: "pullQuote",
        text: "“Wat is uw bevel, edele landgenoot? De zee roept ons tot actie!”"
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "AI & Interaction" },
      {
        type: "paragraph",
        text: "Powered by gpt‑4o‑realtime‑preview‑2024‑12‑17 for low‑latency speech in/out. Persona enforces a respectful, stoic tone; no vulgarity or AI self‑disclosure. Interruption handling reduces speech overlap for natural turn‑taking."
      },
      { type: "heading", level: 2, text: "Environment & Physics" },
      {
        type: "paragraph",
        text: "FluidFlux drives the ocean. The VOC‑era ship received extensive material polish. Physics are tuned for believable buoyancy while keeping traversal stable via a hand‑built deck collision and invisible rails."
      },
      { type: "heading", level: 2, text: "Lighting & Rendering" },
      {
        type: "paragraph",
        text: "Lantern‑style key/fill maintains eye contact in low light. We preserve enough rays for clean denoising and use post‑process volumes to control darkness, rather than starving the denoiser."
      },
      { type: "heading", level: 2, text: "User Testing & Safety" },
      {
        type: "paragraph",
        text: "Early tests surfaced timing overlap and one offensive outburst during a stress interruption. We hardened guardrails to block vulgarity entirely and improved barge‑in handling to keep the rhythm conversational."
      },
      { type: "heading", level: 2, text: "Impact" },
      {
        type: "paragraph",
        text: "Proved that real‑time AI + 3D can turn static history into a respectful, conversational presence—compelling for museums, exhibits, and live events."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Spinoff: De Vliegende Hollander", anchor: "vliegende-hollander" },
      {
        type: "paragraph",
        text: "Using the same pipeline, we created a mythic variant: Willem van der Decken, captain of De Vliegende Hollander—fiery sails, charred hull, spectral mist, and a dramatic persona aligned with Efteling’s canon."
      },
      {
        type: "callout",
        tone: "primary",
        title: "Want more?",
        body: "Explore the ghost‑ship spinoff built on this foundation. It’s bold, theatrical, and unforgettable."
      }
    ],
    richSections: [
      {
        heading: "Challenge",
        body: "Create a convincing, respectful historical figure that feels present in real time—not just a chatbot—while maintaining low latency, visual fidelity, and content safety."
      },
      {
        heading: "Solution",
        body: "Combine a carefully authored Dutch‑only persona with UE5 MetaHuman, a shipboard environment, tuned buoyancy physics, custom collisions, and denoiser‑aware lighting. The result is a character you can walk up to, address naturally, and receive instant, in‑character responses."
      },
      {
        heading: "AI & Persona",
        body: "Built on `gpt-4o-realtime-preview-2024-12-17` for low‑latency speech in/out. The system prompt enforces a dignified, historically grounded tone and explicit safety rules (no vulgarity or disrespect), refined after user testing. Voice preset “Echo” was selected for its authentic Dutch delivery."
      },
      {
        heading: "Environment & Physics",
        body: "Ocean simulation via FluidFlux; ship from the gaming team with extensive material work. Physics tuned for believable motion without destabilizing traversal; custom deck collision with invisible rails replaces Unreal’s coarse ‘bubble’ collision."
      },
      {
        heading: "Lighting & Rendering",
        body: "Cinematic lantern‑based key/fill for face clarity within storm ambience. Maintain sufficient ray counts for effective denoising; control darkness and mood through post‑process volumes rather than starving the denoiser."
      },
      {
        heading: "User Testing & Safety",
        body: "Testing surfaced timing overlap on interruption and one offensive outburst in Dutch during a stress test. We hardened turn‑taking and strengthened prompt guardrails to prevent any vulgarity or AI self‑disclosure."
      },
      {
        heading: "Impact",
        body: "Demonstrated how real‑time AI + 3D can turn static history into a conversational presence suitable for museums, live events, and classrooms—attracting strong stakeholder interest."
      },
      {
        heading: "Spinoff: De Vliegende Hollander",
        body: "Built on the same pipeline, a mythic variant of the experience brings Willem van der Decken to life with fiery sails, charred hull, spectral mist, and a more dramatic persona aligned with Efteling lore."
      }
    ]
  },
  {
    id: "augmented-spaces",
    title: "Augmented Spaces",
    category: "AR Experience",
    year: "2022",
    image: project5,
    description: "Mixed reality platform blending digital and physical environments",
    fullDescription: "Augmented Spaces explores the potential of mixed reality to transform our relationship with physical space. By layering digital information onto the real world, the project creates new possibilities for how we work, learn, and interact with our environments.",
    technologies: ["ARKit", "Unity", "Computer Vision", "Spatial Computing"],
    role: "AR Developer & Experience Designer"
  },
  {
    id: "minimal-commerce",
    title: "Minimal Commerce",
    category: "E-commerce",
    year: "2022",
    image: project6,
    description: "Luxury e-commerce platform with focus on editorial experience",
    fullDescription: "Minimal Commerce reimagines online shopping as a curated editorial experience. By emphasizing storytelling, craftsmanship, and careful curation over endless choice, it creates a more meaningful connection between products and customers. The design language is refined and restrained, letting the products speak for themselves.",
    technologies: ["Next.js", "Shopify", "Headless CMS", "Custom Animations"],
    role: "Frontend Lead"
  },
  {
    id: "information-topology",
    title: "Information Topology",
    category: "3D Visualization",
    year: "2022",
    image: project7,
    description: "Interactive 3D exploration of knowledge networks and connections",
    fullDescription: "Information Topology visualizes abstract information structures as explorable 3D landscapes. By representing data relationships spatially, it allows for new patterns of discovery and understanding. Users can navigate through vast knowledge networks with the same intuition they use to explore physical spaces.",
    technologies: ["Three.js", "WebGL", "Graph Databases", "3D Interaction"],
    role: "Creative Developer"
  }
];
