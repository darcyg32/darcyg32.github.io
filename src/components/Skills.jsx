import styles from './Skills.module.css'
import { FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaRobot } from 'react-icons/fa'

const skills = [
    {
        category: "Programming Languages",
        icon: <FaCode />,
        technologies: ["Python", "JavaScript", "C++", "MATLAB", "R", "C"]
    },
    {
        category: "Web Development",
        icon: <FaServer />,
        technologies: ["HTML", "CSS", "Node.js", "Vue.js", "FastAPI", "REST APIs"]
    },
    {
        category: "AI & Machine Learning",
        icon: <FaBrain />,
        technologies: ["Computer Vision", "Machine Learning", "Deep Learning", "Artificial Intelligence", "OpenCV", "Ollama"]
    },
    {
        category: "Databases & Cloud",
        icon: <FaDatabase />,
        technologies: ["MySQL", "Google Cloud", "Docker", "Docker Compose"]
    },
    {
        category: "Development Tools",
        icon: <FaTools />,
        technologies: ["Git", "GitHub", "Postman", "n8n"]
    },
    {
        category: "Core Skills",
        icon: <FaRobot />,
        technologies: ["Software Development", "Project Management", "Problem Solving", "Teamwork", "Full-Stack Development"]
    }
]

export default function Skills() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skillSet, index) => (
                        <div key={index} className={styles.skillCard}>
                            <div className={styles.skillIcon}>{skillSet.icon}</div>
                            <h4>{skillSet.category}</h4>
                            <ul>
                                {skillSet.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 