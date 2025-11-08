# Uncanny Reflections - Portfolio Website

A modern portfolio website for Lars Hoeijmans, showcasing creative technology work in interactive installations, UI/UX design, data visualization, and digital art.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd uncanny-reflections
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:8080`

## 🛠️ Tech Stack

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── data/             # Static data (projects)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── assets/           # Images and static assets
└── ...
```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

- Responsive design with mobile-first approach
- Smooth page transitions and animations
- Interactive project gallery
- Dark theme with custom design system
- SEO optimized with proper meta tags
- Accessibility focused with semantic HTML

## 🚢 Deployment

### Netlify/Vercel

1. Build the project:
   ```sh
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

### Custom Server

The built files in `dist` can be served by any static file server.

## 📝 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add new project entries:

```typescript
{
  id: "your-project-id",
  title: "Your Project Title",
  category: "Category",
  year: "2024",
  image: yourImageImport,
  description: "Brief description",
  fullDescription: "Detailed description",
  technologies: ["Tech1", "Tech2"],
  role: "Your Role"
}
```

### Styling

- Colors and design tokens are defined in `src/index.css`
- Tailwind configuration in `tailwind.config.ts`
- Custom animations in component files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.
