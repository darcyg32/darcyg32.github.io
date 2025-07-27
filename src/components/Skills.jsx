import styles from "./Skills.module.css";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

const skills = [
  {
    category: "Languages",
    icon: <FaCode />,
    skills: ["Python", "JavaScript", "C++", "C", "MATLAB", "R"],
  },
  {
    category: "Frontend Development",
    icon: <FaDesktop />,
    skills: ["React", "Vue.js", "Tailwind CSS", "Vite", "Zustand"],
  },
  {
    category: "Backend Development",
    icon: <FaServer />,
    skills: ["Node.js", "FastAPI", "API Development", "JWT Authentication"],
  },
  {
    category: "AI & Machine Learning",
    icon: <FaBrain />,
    skills: [
      "Large Language Models (LLM)",
      "OpenAI APIs",
      "LLM Prompt Engineering",
      "Ollama",
      "Computer Vision (OpenCV)",
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <FaDatabase />,
    skills: ["PostgreSQL", "MySQL", "Supabase", "Google Cloud Platform (GCP)"],
  },
  {
    category: "Development Tools",
    icon: <FaTools />,
    skills: ["Git", "GitHub", "Docker", "Postman", "n8n"],
  },
];

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
                {skillSet.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
