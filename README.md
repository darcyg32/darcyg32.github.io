# Darcy Geyer - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing software engineering projects, skills, and professional experience. Built with React 19, Vite 6, and Framer Motion for smooth animations and optimal performance.

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20Production-brightgreen)
![React Version](https://img.shields.io/badge/React-19.0.0-blue)
![Vite Version](https://img.shields.io/badge/Vite-6.1.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## Live Demo

**Visit my live portfolio:** [https://darcyg32.github.io](https://darcyg32.github.io)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Performance Optimizations](#performance-optimizations)
- [SEO & Accessibility](#seo--accessibility)
- [Deployment](#deployment)
- [Development Setup](#development-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is my professional portfolio website. The site showcases expertise in AI/ML, full-stack development, and automation systems, featuring projects like ClarityLog (AI-powered journaling platform), work at Olivia Jenkins Consulting as an AI & Automations Engineer, and experience at Edgible Pty Ltd building LLM tool injection systems.

### Key Highlights

- **Modern React Architecture**: Built with React 19 and Vite 6 for optimal performance
- **Advanced Animations**: Framer Motion integration with staggered animations and floating elements
- **Responsive Design**: Mobile-first approach with CSS modules and custom animations
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Contact Integration**: EmailJS-powered contact form with real-time validation
- **Performance Focused**: Optimized loading, smooth scrolling, and intersection observer animations

## Features

### User Experience

- **Animated Loading Screen**: Branded initial loading experience with animated progress bar
- **Smooth Scrolling**: CSS-based smooth scrolling between sections with active navigation highlighting
- **Advanced Animations**: Framer Motion-powered entrance animations, hover effects, and floating background elements
- **Interactive Elements**: Modal-based project showcases, animated buttons, and responsive hover states
- **Particle Effects**: Dynamic particle animations throughout sections for visual appeal

### Responsive Design

- **Mobile-First**: Optimized for all device sizes with touch-friendly interactions
- **Flexible Layout**: CSS Grid and Flexbox for adaptive layouts with proper spacing
- **Typography Scaling**: Responsive font sizes and consistent visual hierarchy
- **Touch Optimization**: Proper touch targets and gesture support for mobile devices

### Technical Features

- **Component-Based Architecture**: Modular React components with CSS modules for maintainable styling
- **State Management**: React hooks for local state management and form handling
- **Form Integration**: EmailJS-powered contact form with validation and success/error states
- **External Integrations**: Seamless integration with GitHub, LinkedIn, and external project links
- **Asset Optimization**: Optimized images, fonts, and static assets for performance

## Technology Stack

### Frontend Framework

- **React 19.0.0**: Latest React with concurrent features and modern hooks
- **Vite 6.1.0**: Fast build tool and development server with hot module replacement
- **JSX**: Component syntax and templating with modern ES6+ features

### Styling & Animation

- **CSS Modules**: Scoped styling for components with custom CSS variables
- **Framer Motion 12.23.9**: Advanced animation library with gesture support
- **React Icons 5.4.0**: Comprehensive icon library for consistent UI elements
- **Custom CSS Variables**: Theme consistency and maintainable color schemes

### Development Tools

- **ESLint 9.19.0**: Code quality and consistency with React-specific rules
- **TypeScript Types**: Type safety for React components and development
- **Vite Plugin React**: React-specific optimizations and fast refresh

### External Services

- **EmailJS**: Contact form email delivery with template-based messaging
- **GitHub Pages**: Static site hosting with automated deployment
- **React Intersection Observer**: Efficient scroll-based animations and lazy loading

## Project Structure

```
darcyg32.github.io/
├── public/                    # Static assets
│   ├── Darcy_Geyers_Resume.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/           # React components
│   │   ├── About.jsx        # About section with animated content
│   │   ├── Contact.jsx      # Contact form with EmailJS integration
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Footer.jsx       # Site footer with social links
│   │   ├── Hero.jsx         # Landing section with floating elements
│   │   ├── LoadingScreen.jsx # Animated loading experience
│   │   ├── Nav.jsx          # Navigation with smooth scrolling
│   │   ├── Projects.jsx     # Project showcase with modals
│   │   ├── SectionWrapper.jsx # Layout wrapper component
│   │   └── Skills.jsx       # Skills display with categories
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles and CSS variables
│   └── main.jsx             # App entry point
├── index.html               # HTML template with SEO meta tags
├── package.json             # Dependencies & deployment scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## Key Components

### LoadingScreen.jsx

- **Purpose**: Initial loading experience with brand animation
- **Features**:
  - 1.5-second loading timer with animated progress bar
  - Brand initials display with smooth fade transitions
  - Custom loading animations and visual feedback

### Hero.jsx

- **Purpose**: Landing section with personal introduction and current work status
- **Features**:
  - Staggered text animations with precise timing
  - Floating background elements (code icons, rocket)
  - Current work status highlighting ClarityLog development
  - Social media links with hover animations
  - Call-to-action buttons for projects and resume
  - Animated particle effects throughout the section

### Projects.jsx

- **Purpose**: Showcase portfolio projects with detailed information
- **Features**:
  - Modal-based project details with rich descriptions
  - Technology stack display and categorization
  - GitHub and live project links
  - Category filtering (AI/ML, Web Development, Game Development)
  - Featured project highlighting (ClarityLog)
  - Floating background elements and particle animations

### Contact.jsx

- **Purpose**: Contact form with email integration and location information
- **Features**:
  - EmailJS integration with template-based messaging
  - Form validation and success/error state management
  - Social media links with hover effects
  - Location information (Adelaide, Australia)
  - Animated background elements and smooth transitions

### Experience.jsx

- **Purpose**: Professional experience timeline with achievements
- **Features**:
  - Current role at Olivia Jenkins Consulting (AI & Automations Engineer)
  - Previous experience at Edgible Pty Ltd and GuardianEyes
  - Skills and achievements for each position
  - Animated timeline with staggered content reveals

### Skills.jsx

- **Purpose**: Technical skills organized by category
- **Features**:
  - Six skill categories: Languages, Frontend, Backend, AI/ML, Databases, Tools
  - Current technologies including React 19, Python, FastAPI, PostgreSQL
  - Animated skill displays with floating background elements

## Performance Optimizations

### Build Optimizations

- **Vite 6**: Fast development and optimized production builds
- **Code Splitting**: Automatic code splitting for better loading performance
- **Tree Shaking**: Unused code elimination and bundle optimization
- **Asset Optimization**: Compressed images and optimized static assets

### Runtime Optimizations

- **React.memo**: Component memoization for performance-critical components
- **useCallback/useMemo**: Hook optimizations for expensive operations
- **Intersection Observer**: Efficient scroll-based animations and lazy loading
- **Animated Components**: Optimized Framer Motion animations with proper exit animations

### CSS Optimizations

- **CSS Modules**: Scoped styles prevent conflicts and improve maintainability
- **CSS Variables**: Efficient theme management and consistent styling
- **Minimal Reflows**: Optimized animations and transitions for smooth performance
- **Responsive Design**: Mobile-first approach with efficient media queries

## SEO & Accessibility

### SEO Features

- **Meta Tags**: Comprehensive meta descriptions, titles, and keywords
- **Structured Data**: JSON-LD schema markup for rich snippets
- **Canonical URLs**: Proper canonical link tags for search engines
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Search engine crawling instructions and directives

### Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader support and accessibility improvements
- **Keyboard Navigation**: Full keyboard accessibility with focus management
- **Color Contrast**: WCAG compliant color ratios and visual accessibility
- **Focus Indicators**: Visible focus indicators for keyboard users

### Performance Metrics

- **Core Web Vitals**: Optimized for modern web performance standards
- **Mobile Responsive**: Mobile-first design approach with touch optimization
- **Fast Loading**: Optimized bundle sizes and efficient asset loading
- **Smooth Animations**: 60fps animations with proper performance considerations

## Deployment

### GitHub Pages Deployment

The site is deployed using GitHub Pages with automated build and deployment:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Build Process

1. **Development**: `npm run dev` - Vite development server with hot reload
2. **Build**: `npm run build` - Production build with optimizations
3. **Preview**: `npm run preview` - Local production build preview
4. **Deploy**: `npm run deploy` - Automated deployment to GitHub Pages

### Environment Setup

- **Node.js**: Version 18+ required for modern features
- **npm**: Package manager for dependency management
- **Git**: Version control and deployment automation
- **GitHub Pages**: Static hosting with custom domain support

## Development Setup

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git for version control and deployment

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/darcyg32/darcyg32.github.io.git
   cd darcyg32.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Development Workflow

1. **Make changes** to components in `src/components/`
2. **Test locally** with `npm run dev` and hot reload
3. **Lint code** with `npm run lint` for quality assurance
4. **Build for production** with `npm run build` to test optimizations
5. **Deploy** with `npm run deploy` for automated GitHub Pages deployment

## Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start development server with hot reload |
| `npm run build`     | Build for production with optimizations  |
| `npm run preview`   | Preview production build locally         |
| `npm run lint`      | Run ESLint for code quality checks       |
| `npm run predeploy` | Build before deployment                  |
| `npm run deploy`    | Deploy to GitHub Pages                   |

## Dependencies

### Production Dependencies

- **@emailjs/browser**: Email service integration for contact forms
- **framer-motion**: Advanced animation library with gesture support
- **react**: Modern UI framework with concurrent features
- **react-dom**: React DOM rendering and hydration
- **react-icons**: Comprehensive icon library for UI elements
- **react-intersection-observer**: Efficient scroll-based animations

### Development Dependencies

- **@eslint/js**: ESLint JavaScript rules and configurations
- **@types/react**: TypeScript types for React development
- **@types/react-dom**: TypeScript types for React DOM
- **@vitejs/plugin-react**: Vite React plugin for optimizations
- **eslint**: Code linting and quality assurance
- **eslint-plugin-react**: React-specific linting rules
- **eslint-plugin-react-hooks**: React hooks linting and best practices
- **eslint-plugin-react-refresh**: React refresh and hot reload linting
- **gh-pages**: GitHub Pages deployment automation
- **globals**: Global variables for ESLint configuration
- **vite**: Fast build tool and development server

## Contributing

While this is a personal portfolio, contributions for bug fixes or improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines

- Follow ESLint configuration and React best practices
- Use meaningful commit messages and descriptive variable names
- Maintain component modularity and separation of concerns
- Ensure responsive design and accessibility compliance
- Test animations and interactions across different devices

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Portfolio**: [https://darcyg32.github.io](https://darcyg32.github.io)
- **GitHub**: [https://github.com/darcyg32](https://github.com/darcyg32)
- **LinkedIn**: [https://www.linkedin.com/in/darcy-geyer/](https://www.linkedin.com/in/darcy-geyer/)
- **Email**: darcylgeyer@gmail.com

---

**Built with ❤️ using React 19, Vite 6, and Framer Motion**
