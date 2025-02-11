import styles from './Experience.module.css'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
    {
        title: "Software Engineer",
        company: "Edgible",
        location: "Adelaide, Australia",
        date: "Jul. 2024 - Oct. 2024",
        description: [
            "Pioneered the integration of tool injection with Ollama and FastAPI, creating a novel combination that hadn't been implemented publicly before.",
            "Developed and maintained microservices using Python and FastAPI, ensuring high performance and reliability.",
            "Collaborated with the team to implement new features and improve existing functionality.",
            "Worked in an agile environment, participating in daily stand-ups and sprint planning."
        ],
        technologies: ["Python", "Ollama", "FastAPI", "Docker", "Docker Compose", "Google Cloud", "Postman", "n8n", "FastAPI"]
    },
    {
        title: "Software Developer",
        company: "GuardianEyes",
        location: "Adelaide, Australia",
        date: "Feb. 2024 - Jun. 2024",
        description: [
            "Modified and integrated an existing AI algorithm to analyze video and audio streams, detecting and outputting abusive speech levels in real time.",
            "Collaborated within a team of four to design and build a web application showcasing abuse detection capabilities.",
            "Designed and developed system architecture using Python and modern AI frameworks.",
            "Contributed to research, pitching efforts, and secured second place in the ThincLab Tech eChallenge, winning $2000."
        ],
        technologies: ["Python", "Computer Vision", "Machine Learning", "HTML", "JavaScript"]
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