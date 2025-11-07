import projectMirror from "@/assets/project-mirror.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  role: string;
}

export const projects: Project[] = [
  {
    id: "constructed-mirror",
    title: "Constructed Mirror",
    category: "Installation",
    year: "2024",
    image: projectMirror,
    description: "An AI-powered mirror installation exploring human-machine perception",
    fullDescription: "Constructed Mirror is an immersive installation that challenges our understanding of identity and perception through the lens of artificial intelligence. The piece uses real-time AI processing to create a dialogue between human reflection and machine interpretation, asking viewers to confront how they are seen—both by themselves and by algorithmic systems.",
    technologies: ["Computer Vision", "Machine Learning", "Real-time Processing", "Interactive Installation"],
    role: "Concept, Design & Development"
  },
  {
    id: "neural-landscapes",
    title: "Neural Landscapes",
    category: "Digital Art",
    year: "2024",
    image: project4,
    description: "Generative artwork exploring the intersection of code and nature",
    fullDescription: "Neural Landscapes uses generative algorithms to create evolving digital ecosystems. Each piece emerges from simple rules that produce complex, organic patterns—mirroring the way natural systems grow and adapt. The work questions where the boundary lies between artificial and natural creation.",
    technologies: ["Generative Art", "WebGL", "GLSL Shaders", "Real-time Animation"],
    role: "Creative Technologist"
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
    id: "data-streams",
    title: "Data Streams",
    category: "Data Visualization",
    year: "2023",
    image: project2,
    description: "Real-time visualization platform for complex data networks",
    fullDescription: "Data Streams transforms abstract data into compelling visual narratives. The platform processes vast amounts of information in real-time, presenting it through intuitive, interactive visualizations that reveal hidden patterns and relationships. It bridges the gap between raw data and human understanding.",
    technologies: ["D3.js", "WebGL", "Node.js", "Real-time Data Processing"],
    role: "Data Visualization Engineer"
  },
  {
    id: "motion-study",
    title: "Motion Study",
    category: "Mobile App",
    year: "2023",
    image: project3,
    description: "Experimental mobile interface exploring gesture-based interaction",
    fullDescription: "Motion Study is a research project investigating natural gesture-based interfaces for mobile devices. By studying how people naturally interact with physical objects, we developed a more intuitive way to navigate digital spaces—one that feels less like using a tool and more like having a conversation.",
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
