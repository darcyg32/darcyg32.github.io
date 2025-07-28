import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Experience.module.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaChartLine,
  FaTrophy,
  FaStar,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

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
    achievements: ["Lead Role", "AI Focus", "Scalable Solutions"],
    icon: <FaRocket />,
    color: "#64ffda",
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
    achievements: [
      "First Internship",
      "Tool Integration",
      "Scalable Architecture",
    ],
    icon: <FaChartLine />,
    color: "#81e6d9",
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
    achievements: ["2nd Place", "ThincLab", "Real-time AI"],
    icon: <FaTrophy />,
    color: "#4fd1c7",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
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

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className={styles.experienceSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "25%", left: "12%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaBriefcase />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "55%", right: "18%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <FaGraduationCap />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "85%", left: "25%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaAward />
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.div
          ref={ref}
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className={styles.timelineContent}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.header}>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </motion.h4>
                </div>

                <motion.div
                  className={styles.meta}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <span>
                    <FaCalendarAlt />
                    {exp.date}
                  </span>
                  <span>
                    <FaMapMarkerAlt />
                    {exp.location}
                  </span>
                </motion.div>

                <motion.ul
                  className={styles.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.4 + itemIndex * 0.1,
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Achievements */}
                <motion.div
                  className={styles.achievements}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.span
                      key={achievementIndex}
                      className={styles.achievement}
                      style={{ backgroundColor: exp.color }}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.6 + achievementIndex * 0.1,
                      }}
                    >
                      <FaStar />
                      {achievement}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className={styles.technologies}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                >
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={styles.tech}
                      style={{ borderColor: exp.color }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: `${exp.color}20`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.8 + skillIndex * 0.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(18)].map((_, i) => (
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
