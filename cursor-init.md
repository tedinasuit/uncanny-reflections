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
  - Project interface with fields: id, title, category, year, image, thumbnailImage?, detailImage?, description, fullDescription, technologies, role, projectUrl?
  - 6 projects including 2 live applications (Blendspace Studio, FlowSpace) and 4 curated examples
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
