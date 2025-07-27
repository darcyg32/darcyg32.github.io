import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  FaTimes,
  FaFilter,
  FaEye,
  FaFolder,
  FaCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

const projects = [
  {
    title: "ClarityLog - AI-Enhanced Journaling Platform",
    description:
      "A comprehensive AI-powered journaling platform that revolutionizes personal reflection through advanced natural language processing and sentiment analysis.",
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
    category: "AI/ML",
    longDescription:
      "Engineered a full-stack journaling platform that transforms traditional journaling by integrating AI-driven features such as sentiment analysis, emotion detection, entry type classification, and theme extraction. Implemented key functionalities including real-time autosave, Markdown support, PostgreSQL full-text search, JWT authentication, and a dynamic network view that connects entries by shared themes and relationships. Designed and implemented a multi-prompt system that split a massive prompt into six concurrent, shorter prompts, improving processing speed by an estimated 40% and reducing response formatting errors by over 99%, effectively eliminating them under all test conditions.",
  },
  {
    title: "Ollama-FastAPI Integration Demo",
    description:
      "A powerful FastAPI wrapper for Ollama that enables seamless integration of local LLMs into production workflows with streaming and structured responses.",
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
    category: "AI/ML",
    longDescription:
      "Built a FastAPI interface to interact with locally hosted LLMs using Ollama. Implemented endpoints for streaming, formatted, and complete JSON responses, allowing seamless integration into automation workflows. Gained organic traction with 18+ GitHub stars and 7+ forks.",
  },
  {
    title: "Automated Blackjack Assistant",
    description:
      "An innovative computer vision system that analyzes live card games to provide real-time strategic recommendations using advanced image processing algorithms.",
    skills: ["Python", "Computer Vision (OpenCV)", "Machine Learning"],
    github:
      "https://github.com/darcyg32/Automated-Blackjack-Card-Counting-System",
    live: null,
    icon: <FaRobot />,
    date: "May 2024",
    featured: false,
    category: "AI/ML",
    longDescription:
      "Developed a real-time Blackjack assistant using Python and computer vision. Used OpenCV to detect and classify cards from a live video feed. Applied basic ML to identify card values and recommend optimal betting strategies. Delivered an educational tool for demonstrating statistical betting techniques.",
  },
  {
    title: "ClubHub - University Club Platform",
    description:
      "A comprehensive university club management platform that streamlines student organization and event coordination through modern web technologies.",
    skills: ["Vue.js", "Node.js", "MySQL", "JavaScript", "API Development"],
    github: null, // University project
    live: null,
    icon: <FaUsers />,
    date: "May 2023 - Jun. 2023",
    featured: false,
    category: "Web Development",
    longDescription:
      "Led a team of four to design and develop a platform for university students, with the potential to connect entire student communities through club discovery and event management. Developed secure user authentication using Google-based OAuth, real-time notifications, and membership features, ensuring a seamless and secure user experience.",
  },
  {
    title: "Pokémon Battle Simulator",
    description:
      "A sophisticated command-line Pokémon battle simulator featuring complex game mechanics, strategic combat, and progressive difficulty scaling.",
    skills: ["C++"],
    github: "https://github.com/tinnamchoi/pokemon-battles",
    live: null,
    icon: <FaGamepad />,
    date: "Sep 2022 - Oct 2022",
    featured: false,
    category: "Game Development",
    longDescription:
      "Collaborated in a team of three to develop a text-based, turn-based Pokémon battle game. Designed enemy scaling and checkpoint progression to increase difficulty. Implemented an OOP architecture with classes for players, Pokémon, and game logic. Developed a command-line UI with strategic battle options and team selection.",
  },
  {
    title: "MATLAB Blackjack Simulator",
    description:
      "An educational MATLAB project demonstrating fundamental programming concepts through an interactive card game simulation with statistical analysis.",
    skills: ["MATLAB"],
    github: null,
    live: null,
    icon: <FaChartLine />,
    date: "Mar 2022 - Apr 2022",
    featured: false,
    category: "Game Development",
    longDescription:
      "Built a command-line Blackjack simulator in MATLAB as an introduction to programming and software design. Developed user input handling and visual representation using ASCII and plotting tools. Applied core MATLAB concepts including matrices, functions, and control flow. Wrote modular, well-commented code and included a simple testing framework.",
  },
];

const categories = ["All", "AI/ML", "Web Development", "Game Development"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filters = ["All", "AI/ML", "Web Development", "Game Development"];

  const filteredProjects = projects.filter((project) =>
    selectedFilter === "All" ? true : project.category === selectedFilter
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "20%", left: "10%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaFolder />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "60%", right: "15%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <FaCode />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "80%", left: "20%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaLightbulb />
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className={styles.filterButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`${styles.filterButton} ${
                selectedFilter === filter ? styles.active : ""
              }`}
              onClick={() => setSelectedFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`${styles.projectCard} ${
                  project.featured ? styles.featured : ""
                }`}
                variants={itemVariants}
                layout // Keep layout for AnimatePresence transitions
                whileHover={{ y: -10, transition: { duration: 0.3 } }} // Keep hover effect
              >
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.placeholderIcon}>{project.icon}</div>
                  </div>
                  <div className={styles.imageOverlay}>
                    <motion.button
                      className={styles.viewButton}
                      onClick={() => openModal(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEye />
                      View Details
                    </motion.button>
                  </div>
                  <div className={styles.projectLinks}>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>
                    <a
                      href={project.live || project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectTitleLink}
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className={styles.date}>{project.date}</p>
                  <p>{project.description}</p>
                  <div className={styles.technologies}>
                    {project.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.tech}>
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className={styles.tech}>
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modal}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <FaTimes />
              </button>
              <div className={styles.modalContent}>
                {" "}
                {/* Added modalContent div */}
                <div className={styles.modalImage}>
                  {" "}
                  {/* Added modalImage div */}
                  <div className={styles.modalImagePlaceholder}>
                    <div className={styles.modalPlaceholderIcon}>
                      {selectedProject.icon}
                    </div>
                  </div>
                </div>
                <div className={styles.modalInfo}>
                  {" "}
                  {/* Added modalInfo div */}
                  <h2>{selectedProject.title}</h2>
                  <p className={styles.modalDate}>{selectedProject.date}</p>
                  <p className={styles.modalDescription}>
                    {selectedProject.longDescription}
                  </p>
                  <div className={styles.modalTechnologies}>
                    {selectedProject.skills.map((skill, index) => (
                      <span key={index} className={styles.modalTech}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className={styles.modalLinks}>
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalLink}
                      >
                        <FaGithub />
                        View on GitHub
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.modalLink}
                      >
                        <FaExternalLinkAlt />
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
