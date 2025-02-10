import styles from './Experience.module.css'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
    {
        title: "Software Engineer",
        company: "Edgible",
        location: "Adelaide, Australia",
        date: "2023",
        description: [
            "Pioneered the integration of tool injection with Ollama and FastAPI, creating a novel combination that hadn't been implemented publicly before.",
            "Developed and maintained microservices using Python and FastAPI, ensuring high performance and reliability.",
            "Collaborated with the team to implement new features and improve existing functionality.",
            "Worked in an agile environment, participating in daily stand-ups and sprint planning."
        ],
        technologies: ["Python", "FastAPI", "Ollama", "Docker", "Git"]
    },
    {
        title: "Software Developer",
        company: "GuardianEyes",
        location: "Adelaide, Australia",
        date: "2023",
        description: [
            "Led the development of an AI-powered security camera system that secured second place in the ThincLab Tech eChallenge.",
            "Implemented computer vision algorithms for real-time threat detection and analysis.",
            "Designed and developed the system architecture using Python and modern AI frameworks.",
            "Collaborated with team members to optimize performance and enhance system capabilities."
        ],
        technologies: ["Python", "Computer Vision", "Machine Learning", "OpenCV", "Git"]
    }
]

export default function Experience() {
    return (
        <section id="experience" className={styles.experienceSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Experience</h2>
                
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineContent}>
                                <div className={styles.header}>
                                    <h3>{exp.title}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                                
                                <div className={styles.meta}>
                                    <span>
                                        <FaCalendarAlt />
                                        {exp.date}
                                    </span>
                                    <span>
                                        <FaMapMarkerAlt />
                                        {exp.location}
                                    </span>
                                </div>
                                
                                <ul className={styles.description}>
                                    {exp.description.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                                
                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 