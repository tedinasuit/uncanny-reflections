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
import michiel from "@/assets/michiel.png";
import michielThumb from "@/assets/michiel-thumb.png";
import nextnature from "@/assets/nextnature.png";
import nextnatureThumb from "@/assets/nextnature-thumb.png";
import lineup from "@/assets/lineup.jpeg";
import lineupThumb from "@/assets/lineup-thumb.jpg";
import lineupExample1 from "@/assets/lineup-example1.jpeg";
import lineupExample2 from "@/assets/lineup-example2.jpeg";
import lineupExample3 from "@/assets/lineup-example3.jpeg";
import lineupVideo from "@/assets/lineup-video.mp4";
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
    role: "Concept, Design & Development",
    blocks: [
      { type: "heading", level: 2, text: "Dutch Design Week" },
      {
        type: "paragraph",
        text: "Dutch Design Week (DDW) is one of the world's leading and Northern Europe's largest design events, held annually for nine days every October in Eindhoven, Netherlands. It focuses on the design of the future and the future of design, emphasizing experimentation, innovation, and the exploration of how design can help shape a positive future and offer solutions to social challenges."
      },
      { type: "heading", level: 2, text: "Why I built it" },
      {
        type: "paragraph",
        text: "AI is changing how people feel about their own work and identity. I wanted to make a short, safe encounter that prompts genuine reflection—less explanation, more presence. The project borrows from inoculation theory: a brief, controlled ‘dose’ of discomfort can help people form their own counter‑arguments and build resilience."
      },
      {
        type: "paragraph",
        text: "A small follow‑up study suggested it works as intended: most participants reported thinking more about human uniqueness (80%) and many felt more confident about their own qualities (60%). It’s a pilot sample (n=5), but it matched the intended effect."
      },
      {
        type: "pullQuote",
        text: "“What part of you cannot be digitized or replicated?”"
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "The experience" },
      {
        type: "paragraph",
        text: "You step into a small, quiet booth and face what looks like a normal mirror. You speak a few lines for voice sampling. A subtle lag appears. Then the mirror ‘wakes up’ and speaks back in your voice and face, asking a handful of sharp, human questions. It ends without a tidy answer—on purpose—so the thinking continues after you leave."
      },
      {
        type: "paragraph",
        text: "It’s designed for presence over spectacle: a slow reveal, personal language (Dutch or English), and precise prompts rather than monologues."
      },
      { type: "divider" },
      { type: "heading", level: 2, text: "Behind the scenes" },
      {
        type: "paragraph",
        text: "Unreal Engine 5.6.1 + MetaHuman with NVIDIA Audio2Face drives facial animation; Gemini Live handles dialogue; an optimized zero‑shot voice clone (Chatterbox) keeps responses within ~2–3 seconds; real‑time face‑swap completes the mirror effect."
      },
      {
        type: "paragraph",
        text: "It runs all day without staff: a simple loop (idle → conversation → reset) with an idle wake, and a dual‑GPU setup to keep it smooth (UE ~30 fps; face‑swap ~16–20 fps). A compact booth at Dutch Design Week used a dual‑screen layout (inside: the reveal; outside: a clean attractor feed) and a Lumix GH5S pipeline for reliable face capture."
      }
    ]
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
      { type: "heading", level: 2, text: "Why I built it" },
      {
        type: "paragraph",
        text: "I was juggling projects across too many tools. I wanted one quiet place where tasks, schedules, and notes stay together without friction."
      },
      {
        type: "paragraph",
        text: "FlowSpace is that place: projects, tasks, calendar, and simple docs/whiteboards in one workspace. It installs as a PWA, works offline, and stays fast on phone and desktop."
      },
      {
        type: "paragraph",
        text: "The UI is straightforward—edit in place, drag to reschedule, minimal modals. It prefers clarity over cleverness, so it’s easy to keep momentum."
      },
      {
        type: "paragraph",
        text: "Calendar sync keeps dates honest. The assistant creates tasks in plain language and summarizes projects using your own documents. It’s practical help, not chat."
      },
      {
        type: "paragraph",
        text: "I still use it every day. It’s not trying to be everything—just a dependable workspace that cuts down on switching and holds your work together."
      },
      {
        type: "callout",
        tone: "primary",
        title: "Try FlowSpace",
        body: "A calm, single workspace to plan and do your work."
      }
    ]
  },
  {
    id: "lineup-creator",
    title: "Lineup Creator",
    category: "Sports Application",
    year: "2024",
    image: lineup,
    thumbnailImage: lineupThumb,
    description: "A lineup maker that turns tactics into clean, shareable visuals—fast.",
    fullDescription: "Lineup Creator is for coaches, creators, and fans who want lineup graphics that look editorial, not clunky. You build a shape, place players, personalize kits and backgrounds, and export images or videos that you’re proud to share. It feels simple because the hard parts—rendering quality, performance, and small design details—are built in.",
    technologies: ["React Native", "TypeScript", "Custom Rendering Pipeline", "Cross-Platform Development"],
    role: "Product Design & Frontend Engineering",
    blocks: [
      { type: "heading", level: 2, text: "Why I built it" },
      {
        type: "paragraph",
        text: "Most lineup tools produce low‑res, generic graphics or feel clunky to use. I wanted something that respects design and lets you go from idea to a polished visual without fuss."
      },
      {
        type: "gallery",
        aspectRatio: 0.75,
        caption: "Examples of the poster-style output you can create with Lineup Creator.",
        items: [
          { src: lineupExample1, alt: "Lineup Creator poster example 1" },
          { src: lineupExample2, alt: "Lineup Creator poster example 2" },
          { src: lineupExample3, alt: "Lineup Creator poster example 3" }
        ]
      },
      { type: "heading", level: 2, text: "What it is" },
      {
        type: "paragraph",
        text: "Drag players into position, switch shapes, and customize kits, pitch, and background. Create variations for possession states if you need them. Exports are crisp images or videos that look good on social, in decks, or on print."
      },
      {
        type: "paragraph",
        text: "The editor is calm and direct: smooth gestures, smart defaults, and a clear flow—edit players, adjust visuals, export. No ads. No noise."
      },
      {
        type: "media",
        mediaType: "video",
        src: lineupVideo,
        posterSrc: lineupThumb,
        alt: "Lineup Creator editor demo",
        caption: "Example of the video-style output you can create for showcasing tactical changes.",
        size: "sm"
      },
      { type: "heading", level: 2, text: "Behind the scenes" },
      {
        type: "paragraph",
        text: "A custom rendering pipeline keeps exports sharp and consistent across devices. Thoughtful state management makes edits feel instant even with complex layouts. It's built to be dependable so the design quality shows through."
      },
      { type: "heading", level: 2, text: "Availability" },
      {
        type: "paragraph",
        text: "The app is currently in beta testing as of November 2025 and will be released soon on Android and iOS!"
      }
    ]
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
      { type: "heading", level: 2, text: "Why I built it" },
      {
        type: "paragraph",
        text: "Product teams often need clean, on‑brand visuals quickly, but a full photoshoot is slow and expensive. I wanted a simple way to go from a product link or image to believable scenes with real art‑direction control."
      },
      {
        type: "paragraph",
        text: "Blendspace lets you place products into realistic environments, adjust backgrounds, add supporting items, and export polished assets—without a studio booking. It’s built for speed, but it stays focused on quality."
      },
      { type: "heading", level: 2, text: "What it is" },
      {
        type: "paragraph",
        text: "Start from a product URL or upload. Compose a scene, refine placement with paint tools, and review results in a gallery before exporting finals. It feels like art‑directing, not just prompting."
      },
      {
        type: "paragraph",
        text: "Teams use it for ecommerce, social, and ads. The benefit is straightforward: fewer hand‑offs, shorter lead times, and consistent results you’re comfortable shipping."
      },
      {
        type: "callout",
        tone: "primary",
        title: "See the studio",
        body: "From link to export—fast, controllable product visuals."
      }
    ]
  },
  {
    id: "michiel-de-ruyter",
    title: "Michiel de Ruyter — Virtual Human",
    category: "Real‑Time AI + 3D",
    year: "2025",
    image: michiel,
    thumbnailImage: michielThumb,
    description: "A lifelike, Dutch‑speaking virtual Michiel de Ruyter you can converse with—built with MetaHuman, UE5, and real‑time AI.",
    fullDescription: "An interactive historical character inside Unreal Engine 5. Using MetaHuman, tuned physics, and ray‑traced lighting, Michiel de Ruyter lives aboard a historically inspired ship and responds in natural Dutch via OpenAI’s real‑time speech model. The experience balances presence, performance, and safety to make history feel close and conversational.",
    technologies: ["OpenAI Realtime API", "Unreal Engine 5", "MetaHuman", "FluidFlux", "Ray Tracing", "Prompt Engineering"],
    role: "Technical Direction, Character & Rendering",
    blocks: [
      { type: "heading", level: 2, text: "Why I built it" },
      {
        type: "paragraph",
        text: "I wanted to see if a historical figure could feel present—not like a chatbot—with real‑time speech and a respectful Dutch persona. The goal was a quiet sense of being there with him, not a gimmick."
      },
      { type: "heading", level: 2, text: "The experience" },
      {
        type: "paragraph",
        text: "You meet Michiel de Ruyter aboard a stormy ship. You speak naturally; he responds instantly in Dutch with a dignified tone. Lighting, motion, and pacing are tuned to keep eye contact and presence without breaking the scene."
      },
      {
        type: "paragraph",
        text: "      Spinoff: De Vliegende Hollander—built on the same pipeline for De Efteling, who wanted to experiment with AI in‑park. A mythic variant with fiery sails, charred hull, spectral mist, and a tailored persona delivered the same real‑time, respectful interaction."
      },
      { type: "heading", level: 2, text: "Behind the scenes" },
      {
        type: "paragraph",
        text: "Unreal Engine 5 + MetaHuman handle character and environment; the voice runs on a low‑latency real‑time model; safety and guardrails shape tone and content; and rendering is tuned for clarity in low light. The pipeline balances performance and polish so the illusion holds."
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
    id: "next-nature-museum",
    title: "Next Nature Museum",
    category: "Museum Experience",
    year: "2024",
    image: nextnature,
    thumbnailImage: nextnatureThumb,
    description: "Award‑winning ‘NextBots’ holographic guide prototype for Next Nature Museum at the Evoluon—built in 4 days with WebXR, Looking Glass, and sensor‑driven interactions.",
    fullDescription: "Next Nature Museum—inside the UFO‑shaped Evoluon (Eindhoven)—explores how technology becomes our ‘next nature’. For International Week (4‑day challenge), I led an international team to design and prototype ‘NextBots’: small, friendly, plant‑adorned robot guides presented as a hologram on a Looking Glass Portrait. We built a WebXR (Three.js) experience, bridged an Arduino proximity sensor via Node.js, and staged a mini‑exhibition. The project won the WOW Group award.",
    technologies: ["Experience Design", "Interaction Design", "WebXR (Three.js)", "Looking Glass Portrait", "Arduino + Node.js", "AI Image (ChatGPT‑4o) & Video (Veo)", "Figma"],
    role: "Team Lead · Concept & Experience Design · WebXR Prototyping",
    blocks: [
      { type: "heading", level: 2, text: "Why we built it" },
      {
        type: "paragraph",
        text: "Next Nature Museum in the Evoluon (Eindhoven) is a future lab about how technology becomes our next nature. For International Week, they asked for a visitor experience that helps people feel that idea within minutes. In a 4‑day sprint I led an international team (Lithuania, France), aligned fast on roles, and built a working prototype."
      },
      { type: "pullQuote", text: "THE FUTURE REPEATS ITSELF" },
      { type: "heading", level: 2, text: "What we created" },
      {
        type: "paragraph",
        text: "“NextBots”: small, friendly robot guides adorned with living plants—an immediate nature‑tech fusion. A central holographic tree tied the scene to the Evoluon. We moved from teammate sketches to AI image refinements (ChatGPT‑4o), then 2D‑to‑3D with Cube CSM and Mixamo for animation."
      },
      {
        type: "paragraph",
        text: "We presented the NextBot as a glasses‑free hologram on a Looking Glass Portrait. Driving it from Blender was too heavy, so I rebuilt it in WebXR (Three.js) and used Looking Glass Bridge with baked animations for smooth playback."
      },
      {
        type: "paragraph",
        text: "To make it responsive, an ultrasonic sensor on Arduino measured visitor distance. A small Node.js bridge relayed data to the WebXR app: the NextBot waved at ~40 cm and danced at ~10 cm. Gemini helped accelerate the Node plumbing under time pressure."
      },
      { type: "heading", level: 2, text: "Exhibition & outcome" },
      {
        type: "paragraph",
        text: "We staged a mini‑exhibition with plants, spatial sound, a projector showing the central tree, and a short trailer (by teammate Emerson) with Veo AI camera moves. The prototype drew consistent engagement and clearly communicated the nature‑tech fusion."
      },
      {
        type: "paragraph",
        text: "The project won the peer‑voted WOW Group award, and the museum stakeholder followed up afterwards—good signals for both the concept and execution."
      }
    ]
  }
];

