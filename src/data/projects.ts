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
    projectUrl: "https://flowspace.site"
  },
  {
    id: "flux-interface",
    title: "Flux Interface",
    category: "UI/UX Design",
    year: "2023",
    image: project1,
    description: "A fluid design system for next-generation web applications",
    fullDescription: "Flux Interface reimagines how users interact with complex data systems. Through careful attention to motion, hierarchy, and responsive design, it creates an intuitive experience that feels both powerful and effortless. The system emphasizes clarity while maintaining a sense of depth and sophistication.",
    technologies: ["React", "TypeScript", "Framer Motion", "Design Systems"],
    role: "Lead Designer & Developer"
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
    projectUrl: "https://blendspace-studio.vercel.app"
  },
  {
    id: "motion-study",
    title: "Motion Study",
    category: "Mobile App",
    year: "2023",
    image: project3,
    description: "Experimental mobile interface exploring gesture-based interaction",
    fullDescription: "Motion Study is a research project investigating natural gesture-based interfaces for mobile devices. By studying how people naturally interact with physical objects, we developed a more intuitive way to navigate digital spaces, one that feels less like using a tool and more like having a conversation.",
    technologies: ["React Native", "Gesture Recognition", "Motion Design", "iOS/Android"],
    role: "Interaction Designer"
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
