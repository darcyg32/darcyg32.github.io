import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Skills.module.css";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaLaptopCode,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

const skills = [
  {
    category: "Languages",
    icon: <FaCode />,
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "TypeScript",
      "C++",
      "C",
      "MATLAB",
      "R",
    ],
    color: "#64ffda",
  },
  {
    category: "Frontend Development",
    icon: <FaDesktop />,
    skills: [
      "React",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Zustand",
    ],
    color: "#81e6d9",
  },
  {
    category: "Backend Development",
    icon: <FaServer />,
    skills: [
      "Node.js",
      "Java",
      "Spring Boot",
      "FastAPI",
      "API Development",
      "JWT Authentication",
      "WebClient",
    ],
    color: "#4fd1c7",
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
    color: "#38b2ac",
  },
  {
    category: "Databases & Cloud",
    icon: <FaDatabase />,
    skills: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Google Cloud Platform (GCP)",
      "JPA/H2",
    ],
    color: "#319795",
  },
  {
    category: "Development Tools",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "n8n",
      "Gradle",
      "Spring Security",
    ],
    color: "#2c7a7b",
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

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "20%", left: "10%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLaptopCode />
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
          <FaCogs />
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
          <FaRocket />
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className={styles.skillIcon}
                style={{ color: skillSet.color }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                {skillSet.icon}
              </motion.div>

              <h4 className={styles.skillCategory}>{skillSet.category}</h4>

              <div className={styles.skillsList}>
                {skillSet.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={styles.tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => (
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
