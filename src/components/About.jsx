import styles from './About.module.css'
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

export default function About() {
    return (
        <>
            <section id="about" className={styles.aboutSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    
                    <div className={styles.content}>
                        <div className={styles.aboutText}>
                            <p>
                                I'm Darcy, a software engineer with a strong foundation in computer science 
                                and a keen interest in innovative technologies. As I've recently completed my Bachelor's 
                                degree at the University of Adelaide, I've had the opportunity to work on diverse 
                                projects that combine theoretical knowledge with practical applications.
                            </p>
                            <p>
                                At Edgible, I worked on pioneering the integration of tool injection with Ollama 
                                and FastAPI, a novel combination that hadn't been implemented publicly before. This 
                                experience allowed me to work with cutting-edge technologies and contribute to 
                                innovative solutions in a startup environment.
                            </p>
                            <p>
                                Beyond my technical work, I'm actively involved in the university's tech community. 
                                I'm a member of the Competitive Programming Club, where I achieved a top 5 placement 
                                in a C++ coding competition. I'm also a graduate member of Ravi's Study Program, where I 
                                have developed comprehensive study materials, and I'm a member of the Computer Science Club.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
        </>
    )
} 