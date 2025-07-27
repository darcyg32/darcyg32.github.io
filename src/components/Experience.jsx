import styles from "./Experience.module.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "AI & Automations Engineer",
    company: "Olivia Jenkins Consulting",
    location: "Adelaide, South Australia, Australia",
    date: "Jun 2025 - Present",
    description: [
      "Lead AI and automation development, designing and implementing systems that streamline operations and enhance client experiences.",
      "Develop custom tools and integrations spanning backend infrastructure, AI-driven assistants, and automation infrastructure.",
      "Architect scalable solutions that integrate AI capabilities with existing business workflows and systems.",
      "Collaborate with cross-functional teams to deliver innovative automation solutions that drive operational efficiency.",
      // TODO: Add specific metrics like "Reduced processing time by X%", "Automated Y processes", "Improved efficiency by Z%"
    ],
    skills: [
      "AI Integration",
      "System Architecture",
      "Automation Engineering",
      "API Development",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Edgible Pty Ltd",
    location: "Adelaide, Australia",
    date: "Jul. 2024 - Oct. 2024",
    description: [
      "Built a tool injection system using Python, FastAPI, and Docker to extend Ollama's capabilities, allowing it to dynamically call external tools, simplifying complex tasks such as data enrichment and generating Docker Compose files from simple prompts.",
      "Automated data enrichment workflows by integrating the system with n8n, reducing manual data retrieval time by ~60% through dynamic processing and Google Sheets output.",
      "Enhanced deployment scalability by streamlining automation pipelines through Google Cloud Platform and n8n, optimizing performance and facilitating future system expansion.",
    ],
    skills: [
      "Python",
      "Ollama",
      "FastAPI",
      "API Development",
      "Docker",
      "Google Cloud Platform (GCP)",
      "Postman",
      "n8n",
      "Node.js",
      "Large Language Models (LLM)",
    ],
  },
  {
    title: "Software Engineer",
    company: "GuardianEyes - AI-Powered Security Camera",
    location: "Adelaide, Australia",
    date: "Feb. 2024 - Jun. 2024",
    description: [
      "Built an AI-powered web application using HTML and Node.js for real-time detection of abusive speech in video feeds by extracting audio from video streams and integrating a third-party speech recognition API.",
      "Contributed to research and pitching efforts that secured 2nd place and a $2000 prize in the ThincLab Tech eChallenge, showcasing the system's scalability for deployment in nursing homes and hospitals worldwide.",
    ],
    skills: ["Python", "Node.js", "JavaScript", "API Development"],
  },
];

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
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.tech}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
