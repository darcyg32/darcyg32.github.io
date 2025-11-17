import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCode,
  FaUser,
  FaGraduationCap,
  FaHeart,
} from "react-icons/fa";

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

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "15%", left: "8%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaUser />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "45%", right: "12%" }}
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
          style={{ top: "75%", left: "15%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaHeart />
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.aboutText} variants={itemVariants}>
            <motion.p variants={textVariants}>
              I'm Darcy, a software engineer with a strong foundation in
              computer science and a passion for systems programming and
              building robust, efficient software.
            </motion.p>

            <motion.p variants={textVariants}>
              In my most recent role at Olivia Jenkins Consulting, I designed
              and implemented systems that streamlined operations through custom
              tools and integrations, working across backend infrastructure and
              system architecture. I've also completed projects like{" "}
              <motion.a
                href="https://claritylog.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="Visit ClarityLog.app (opens in new tab)"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ClarityLog
              </motion.a>
              , a full-stack journaling platform, and a concurrent task
              scheduler in C++23 exploring modern synchronization primitives.
            </motion.p>

            <motion.p variants={textVariants}>
              I love learning and am always exploring new technologies and
              building projects. I'm actively deepening my systems engineering
              expertise through self-directed study, working through
              foundational texts like Effective Modern C++ and Computer Systems:
              A Programmer's Perspective. I share my structured notes and
              flashcards on GitHub (
              <motion.a
                href="https://github.com/darcyg32/effective-modern-cpp-notes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="View Effective Modern C++ notes on GitHub (opens in new tab)"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                C++ notes
              </motion.a>
              ,{" "}
              <motion.a
                href="https://github.com/darcyg32/csapp-notes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="View Computer Systems notes on GitHub (opens in new tab)"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CSAPP notes
              </motion.a>
              ) to reinforce my understanding of modern C++ features, memory
              models, concurrency, and low-level system design.
            </motion.p>

            <motion.p variants={textVariants}>
              Previously, I worked at Edgible, developing a tool injection
              system using FastAPI. I also helped build GuardianEyes, a security
              camera platform that placed second in the ThincLab Tech
              eChallenge.
            </motion.p>

            <motion.p variants={textVariants}>
              Outside of work, I've been involved in the University of
              Adelaide's tech community, competing in coding competitions,
              contributing to peer learning programs, and staying active in
              developer clubs.
            </motion.p>
          </motion.div>

          {/* Highlights Section */}
          <motion.div className={styles.highlights} variants={itemVariants}>
            <motion.div
              className={styles.highlightCard}
              variants={highlightVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.highlightIcon}>
                <FaRocket />
              </div>
              <h3>Systems Engineering</h3>
              <p>
                Building concurrent systems in C++23 and studying low-level
                software design to create robust, efficient solutions.
              </p>
            </motion.div>

            <motion.div
              className={styles.highlightCard}
              variants={highlightVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.highlightIcon}>
                <FaLightbulb />
              </div>
              <h3>Continuous Learning</h3>
              <p>
                Deepening expertise through structured study of modern C++ and
                computer systems fundamentals, sharing notes and insights.
              </p>
            </motion.div>

            <motion.div
              className={styles.highlightCard}
              variants={highlightVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.highlightIcon}>
                <FaUsers />
              </div>
              <h3>Community</h3>
              <p>
                Active involvement in university tech community, coding
                competitions, and peer learning programs.
              </p>
            </motion.div>

            <motion.div
              className={styles.highlightCard}
              variants={highlightVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.highlightIcon}>
                <FaCode />
              </div>
              <h3>Full-Stack</h3>
              <p>
                Proficient across the entire development stack, from frontend
                interfaces to backend infrastructure.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(12)].map((_, i) => (
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
