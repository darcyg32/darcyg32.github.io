# Darcy Geyer - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing software engineering projects, skills, and professional experience. Built with React, Vite, and Framer Motion for smooth animations and optimal performance.

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20Production-brightgreen)
![React Version](https://img.shields.io/badge/React-19.0.0-blue)
![Vite Version](https://img.shields.io/badge/Vite-6.1.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## Live Demo

**Visit the live portfolio:** [https://darcyg32.github.io](https://darcyg32.github.io)

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

This is a professional portfolio website for Darcy Geyer, a Software Engineer and Computer Science graduate from the University of Adelaide. The site showcases expertise in AI/ML, full-stack development, and automation systems, featuring projects like ClarityLog (AI-powered journaling platform) and work at Olivia Jenkins Consulting.

### Key Highlights

- **Modern React Architecture**: Built with React 19 and Vite for optimal performance
- **Smooth Animations**: Framer Motion integration for engaging user interactions
- **Responsive Design**: Mobile-first approach with CSS modules
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Contact Integration**: EmailJS-powered contact form
- **Performance Focused**: Optimized loading and smooth scrolling

## Features

### User Experience
- **Loading Screen**: Animated initial loading experience with brand elements
- **Smooth Scrolling**: CSS-based smooth scrolling between sections
- **Interactive Animations**: Framer Motion-powered entrance and hover animations
- **Floating Elements**: Dynamic background elements with continuous animation
- **Particle Effects**: Subtle particle animations for visual appeal

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Proper touch targets and gesture support
- **Flexible Layout**: CSS Grid and Flexbox for adaptive layouts
- **Typography Scaling**: Responsive font sizes and spacing

### Technical Features
- **Component-Based Architecture**: Modular React components with CSS modules
- **State Management**: React hooks for local state management
- **Form Handling**: Controlled components with validation
- **External Integrations**: EmailJS for contact form functionality
- **Asset Optimization**: Optimized images and static assets

## Technology Stack

### Frontend Framework
- **React 19.0.0**: Latest React with concurrent features
- **Vite 6.1.0**: Fast build tool and development server
- **JSX**: Component syntax and templating

### Styling & Animation
- **CSS Modules**: Scoped styling for components
- **Framer Motion 12.23.9**: Advanced animation library
- **React Icons 5.4.0**: Comprehensive icon library
- **Custom CSS Variables**: Theme consistency and maintainability

### Development Tools
- **ESLint 9.19.0**: Code quality and consistency
- **TypeScript Types**: Type safety for React components
- **Vite Plugin React**: React-specific optimizations

### External Services
- **EmailJS**: Contact form email delivery
- **GitHub Pages**: Static site hosting
- **React Intersection Observer**: Scroll-based animations

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
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Experience.jsx   # Work experience
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Hero.jsx         # Landing section
│   │   ├── LoadingScreen.jsx # Initial loading
│   │   ├── Nav.jsx          # Navigation
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── SectionWrapper.jsx # Layout wrapper
│   │   └── Skills.jsx       # Skills display
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## Key Components

### LoadingScreen.jsx
- **Purpose**: Initial loading experience with brand animation
- **Features**: 
  - 1.5-second loading timer
  - Animated progress bar
  - Brand initials display
  - Smooth fade-out transition

### Hero.jsx
- **Purpose**: Landing section with personal introduction
- **Features**:
  - Staggered text animations
  - Floating background elements
  - Social media links
  - Call-to-action buttons
  - Particle effects

### Projects.jsx
- **Purpose**: Showcase portfolio projects
- **Features**:
  - Modal-based project details
  - Technology stack display
  - GitHub and live links
  - Category filtering
  - Featured project highlighting

### Contact.jsx
- **Purpose**: Contact form with email integration
- **Features**:
  - EmailJS integration
  - Form validation
  - Success/error states
  - Social media links
  - Location information

### Nav.jsx
- **Purpose**: Navigation menu
- **Features**:
  - Smooth scrolling to sections
  - Mobile-responsive design
  - Active section highlighting

## Performance Optimizations

### Build Optimizations
- **Vite**: Fast development and optimized production builds
- **Code Splitting**: Automatic code splitting for better loading
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and optimized fonts

### Runtime Optimizations
- **React.memo**: Component memoization where appropriate
- **useCallback/useMemo**: Hook optimizations
- **Intersection Observer**: Efficient scroll-based animations
- **Lazy Loading**: Images and components loaded on demand

### CSS Optimizations
- **CSS Modules**: Scoped styles prevent conflicts
- **CSS Variables**: Efficient theme management
- **Minimal Reflows**: Optimized animations and transitions
- **Critical CSS**: Inline critical styles

## SEO & Accessibility

### SEO Features
- **Meta Tags**: Comprehensive meta descriptions and titles
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Proper canonical link tags
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color ratios
- **Focus Management**: Visible focus indicators

### Performance Metrics
- **Lighthouse Score**: Optimized for Core Web Vitals
- **Mobile Responsive**: Mobile-first design approach
- **Fast Loading**: Optimized bundle sizes
- **Smooth Animations**: 60fps animations

## Deployment

### GitHub Pages Deployment
The site is deployed using GitHub Pages with the following configuration:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Build Process
1. **Development**: `npm run dev` - Vite dev server
2. **Build**: `npm run build` - Production build
3. **Preview**: `npm run preview` - Local production preview
4. **Deploy**: `npm run deploy` - Deploy to GitHub Pages

### Environment Setup
- **Node.js**: Version 18+ required
- **npm**: Package manager
- **Git**: Version control
- **GitHub Pages**: Static hosting

## Development Setup

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git for version control

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
2. **Test locally** with `npm run dev`
3. **Lint code** with `npm run lint`
4. **Build for production** with `npm run build`
5. **Deploy** with `npm run deploy`

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |
| `npm run predeploy` | Build before deployment |
| `npm run deploy` | Deploy to GitHub Pages |

## Dependencies

### Production Dependencies
- **@emailjs/browser**: Email service integration
- **framer-motion**: Animation library
- **react**: UI framework
- **react-dom**: React DOM rendering
- **react-icons**: Icon library
- **react-intersection-observer**: Scroll-based animations

### Development Dependencies
- **@eslint/js**: ESLint JavaScript rules
- **@types/react**: TypeScript types for React
- **@types/react-dom**: TypeScript types for React DOM
- **@vitejs/plugin-react**: Vite React plugin
- **eslint**: Code linting
- **eslint-plugin-react**: React-specific linting rules
- **eslint-plugin-react-hooks**: React hooks linting
- **eslint-plugin-react-refresh**: React refresh linting
- **gh-pages**: GitHub Pages deployment
- **globals**: Global variables for ESLint
- **vite**: Build tool and dev server

## Contributing

While this is a personal portfolio, contributions for bug fixes or improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines
- Follow ESLint configuration
- Use meaningful commit messages
- Maintain component modularity
- Follow React best practices
- Ensure responsive design

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Portfolio**: [https://darcyg32.github.io](https://darcyg32.github.io)
- **GitHub**: [https://github.com/darcyg32](https://github.com/darcyg32)
- **LinkedIn**: [https://www.linkedin.com/in/darcy-geyer/](https://www.linkedin.com/in/darcy-geyer/)
- **Email**: darcylgeyer@gmail.com

---

**Built with ❤️ using React, Vite, and Framer Motion** 