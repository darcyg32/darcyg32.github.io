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
      "Engineered a full-stack journaling platform that transforms traditional journaling by integrating AI-driven features such as sentiment analysis, emotion detection, entry type classification, and theme extraction. Implemented key functionalities including real-time autosave, Markdown support, PostgreSQL full-text search, JWT authentication, and a dynamic network view that connects entries by shared themes and relationships. Designed and implemented a multi-prompt system that split a massive prompt into six concurrent, shorter prompts, improving processing speed by an estimated 40% and reducing response formatting errors by over 99%, effectively eliminating them under all test conditions.",
    skills: [
      "React",
      "Vite",
      "PostgreSQL",
      "Supabase",
      "Node.js",
      "Ollama",
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
    title: "ClubHub - University Club Platform",
    description:
      "Led a team of four to design and develop a platform for university students, with the potential to connect entire student communities through club discovery and event management. Developed secure user authentication using Google-based OAuth, real-time notifications, and membership features, ensuring a seamless and secure user experience.",
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
                <h3 className={styles.projectTitle}>
                  {project.github || project.live ? (
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectTitleLink}
                      aria-label={`Visit ${project.title} (opens in new tab)`}
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
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
