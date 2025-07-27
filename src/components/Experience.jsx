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
    ],
    skills: [
      "AI Integration",
      "System Architecture",
      "Automation Engineering",
      "API Development",
    ],
  },
  {
    title: "Software Engineer",
    company: "Edgible",
    location: "Adelaide, Australia",
    date: "Jul. 2024 - Oct. 2024",
    description: [
      "Built a tool injection framework using FastAPI, Ollama, and Python, enabling language models to call external APIs (e.g., GitHub, weather, Docker logs).",
      "Deployed Dockerized services with Docker Compose and managed cloud infrastructure via Google Cloud Platform.",
      "Designed and tested RESTful APIs with Postman; automated workflows using n8n.",
      "Worked closely with Edgible's founding team in a fast-paced startup environment.",
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
    title: "Software Developer",
    company: "GuardianEyes",
    location: "Adelaide, Australia",
    date: "Feb. 2024 - Jun. 2024",
    description: [
      "Built an AI-powered abuse detection web app for hospitals/nursing homes using Node.js and third-party speech APIs.",
      "Processed video and audio feeds in real-time; collaborated on research, design, and product pitching.",
      "Designed and developed system architecture using Python and modern AI frameworks.",
      "Achieved 2nd place and won $2,000 in the ThincLab Tech eChallenge competition.",
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
