import styles from "./Projects.module.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRobot,
  FaUsers,
  FaGamepad,
  FaChartLine,
  FaBook,
  FaServer,
} from "react-icons/fa";

const projects = [
  {
    title: "ClarityLog - AI-Enhanced Journaling Platform",
    description:
      "Building a full-stack journaling platform that analyzes entries and extracts insights like emotion, sentiment, and recurring themes. Developed responsive UI with React 18, Vite, and Tailwind; supports autosave, Markdown, and JWT auth. Integrated Ollama-based LLM with a custom multi-prompt system for reliable local analysis. Designed efficient PostgreSQL schema (Supabase) with full-text search and JSONB indexing. Implemented scalable filtering, graph-based entry connections, and real-time updates. Emphasized data privacy with encrypted storage, RLS, and local AI processing.",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Node.js",
      "Ollama",
      "Zustand",
      "API Development",
      "JWT Authentication",
      "Large Language Models (LLM)",
    ],
    github: null, // In Development
    live: "https://claritylog.app",
    icon: <FaBook />,
    date: "Feb 2025 - Present",
    featured: true,
  },
  {
    title: "Ollama-FastAPI Integration Demo",
    description:
      "Built a FastAPI interface to interact with locally hosted LLMs using Ollama. Implemented endpoints for streaming, formatted, and complete JSON responses, allowing seamless integration into automation workflows. Gained organic traction with 18+ GitHub stars and 7+ forks.",
    skills: [
      "Python",
      "FastAPI",
      "Ollama",
      "API Development",
      "Large Language Models (LLM)",
      "Docker",
    ],
    github: "https://github.com/darcyg32/Ollama-FastAPI-Integration-Demo",
    live: null,
    icon: <FaServer />,
    date: "Aug 2024",
    featured: false,
  },
  {
    title: "Automated Blackjack Assistant",
    description:
      "Developed a real-time Blackjack assistant using Python and computer vision. Used OpenCV to detect and classify cards from a live video feed. Applied basic ML to identify card values and recommend optimal betting strategies. Delivered an educational tool for demonstrating statistical betting techniques.",
    skills: ["Python", "Computer Vision (OpenCV)", "Machine Learning"],
    github:
      "https://github.com/darcyg32/Automated-Blackjack-Card-Counting-System",
    live: null,
    icon: <FaRobot />,
    date: "May 2024",
    featured: false,
  },
  {
    title: "ClubHub - Social Media for University Clubs",
    description:
      "Led development of a full-stack web platform connecting university clubs and students. Built dynamic club pages, event scheduling, and user profiles. Implemented Google OAuth login and real-time notifications. Developed with Vue.js, Node.js, and MySQL for a responsive and scalable architecture.",
    skills: ["Vue.js", "Node.js", "MySQL", "JavaScript", "API Development"],
    github: null, // University project
    live: null,
    icon: <FaUsers />,
    date: "May 2023 - Jun. 2023",
    featured: false,
  },
  {
    title: "Pokémon Battle Simulator",
    description:
      "Collaborated in a team of three to develop a text-based, turn-based Pokémon battle game. Designed enemy scaling and checkpoint progression to increase difficulty. Implemented an OOP architecture with classes for players, Pokémon, and game logic. Developed a command-line UI with strategic battle options and team selection.",
    skills: ["C++"],
    github: "https://github.com/tinnamchoi/pokemon-battles",
    live: null,
    icon: <FaGamepad />,
    date: "Sep 2022 - Oct 2022",
    featured: false,
  },
  {
    title: "MATLAB Blackjack Simulator",
    description:
      "Built a command-line Blackjack simulator in MATLAB as an introduction to programming and software design. Developed user input handling and visual representation using ASCII and plotting tools. Applied core MATLAB concepts including matrices, functions, and control flow. Wrote modular, well-commented code and included a simple testing framework.",
    skills: ["MATLAB"],
    github: null,
    live: null,
    icon: <FaChartLine />,
    date: "Mar 2022 - Apr 2022",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article
              key={index}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              }`}
            >
              <div className={styles.projectImage}>
                <div className={styles.iconContainer}>{project.icon}</div>
                <div className={styles.projectLinks}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p className={styles.date}>{project.date}</p>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.tech}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
