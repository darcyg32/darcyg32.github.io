import styles from './Projects.module.css'
import { FaGithub, FaExternalLinkAlt, FaRobot, FaUsers, FaGamepad, FaChartLine, FaBook } from 'react-icons/fa'

const projects = [
    {
        title: "ClarityLog - AI-Enhanced Journaling Platform",
        description: "Developing an innovative journaling application that leverages AI for advanced text analysis and pattern recognition. Features include real-time auto-save, Markdown support, and local AI analysis using Ollama with a multi-prompt architecture. Implemented with modern web technologies and best practices for security and performance.",
        technologies: ["React", "Vite", "Tailwind CSS", "PostgreSQL", "Supabase", "Node.js", "Ollama", "Zustand"],
        github: null, // In Development
        live: null,
        icon: <FaBook />,
        date: "Feb 2025 - Present"
    },
    {
        title: "Automated Blackjack Assistant",
        description: "An innovative project implementing computer vision and machine learning to provide real-time analysis of blackjack games. Features include live card detection through camera feed, instant card recognition, and optimal betting strategy suggestions based on detected cards.",
        technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
        github: "https://github.com/darcyg32/Automated-Blackjack-Card-Counting-System",
        live: null,
        icon: <FaRobot />,
        date: "May 2024"
    },
    {
        title: "ClubHub - University Social Platform",
        description: "Led the development of a comprehensive social platform for university clubs. Features dynamic club interactions, event management, and member profiles. Built with modern web technologies, the platform enables seamless club communication and event coordination.",
        technologies: ["Vue.js", "Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
        github: null, // University project
        live: null,
        icon: <FaUsers />,
        date: "May 2023 - Jun. 2023"
    },
    {
        title: "Pokemon Battles",
        description: "Developed a text-based Pokémon battle simulator featuring strategic turn-based combat and RPG elements. Implemented checkpoint systems, progressive difficulty scaling, and OOP principles. Created as part of a three-person team, focusing on code modularity and collaborative development.",
        technologies: ["C++", "OOP", "Game Development"],
        github: "https://github.com/tinnamchoi/pokemon-battles",
        live: null,
        icon: <FaGamepad />,
        date: "Sep 2022 - Oct 2022"
    },
    {
        title: "MATLAB Blackjack Simulator",
        description: "Created a comprehensive blackjack simulator demonstrating proficiency in MATLAB programming. Features include an intuitive user interface, visual card representation, and implementation of core game mechanics using MATLAB's mathematical and visualization capabilities.",
        technologies: ["MATLAB", "Software Development", "UI Design"],
        github: null,
        live: null,
        icon: <FaChartLine />,
        date: "Mar 2022 - Apr 2022"
    }
]

export default function Projects() {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <article key={index} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <div className={styles.iconContainer}>
                                    {project.icon}
                                </div>
                                <div className={styles.projectLinks}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
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
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
} 