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
  FaServer,
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
              I'm a Graduate Software Engineer based in Adelaide, with a Bachelor of 
              Computer Science from the University of Adelaide. I love building software 
              that solves real problems and makes a difference.
            </motion.p>

            <motion.p variants={textVariants}>
              Most recently, I worked at Olivia Jenkins Consulting as an AI & Automations 
              Engineer, where I designed and built scalable solutions that streamlined 
              operations and integrated with existing business workflows. I developed custom 
              tools and integrations across backend infrastructure, CRMs, and third-party 
              systems.
            </motion.p>

            <motion.p variants={textVariants}>
              Previously, I interned at Edgible, where I built a tool injection framework 
              using FastAPI, Ollama, and Python that enabled language models to call 
              external APIs. I also worked on GuardianEyes, an AI-powered security app 
              that placed 2nd in the ThincLab Tech eChallenge.
            </motion.p>

            <motion.p variants={textVariants}>
              When I'm not working, I enjoy building personal projects to explore new 
              technologies. I've built things from concurrent task schedulers in C++23, to 
              image analysis tools in Rust, to full-stack platforms like{" "}
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
              {" "}, an AI-enhanced journaling platform. I'm always learning and always 
              looking for the next interesting problem to solve.
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
                <FaCode />
              </div>
              <h3>Systems Engineering</h3>
              <p>
                Built concurrent systems and low-level software in C++23 and Rust, 
                including thread-pool schedulers and image analysis tools that explore 
                systems programming fundamentals.
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
                <FaServer />
              </div>
              <h3>Backend Systems</h3>
              <p>
                Designed and implemented production APIs, microservices, and automated 
                workflows that solve real business problems and integrate seamlessly 
                with existing systems.
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
                Always exploring new technologies and building projects to deepen my 
                understanding and tackle interesting problems.
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
              <h3>Collaboration</h3>
              <p>
                Worked closely with cross-functional teams to deliver robust solutions, 
                from collaborating with founders in fast-paced startups to partnering 
                with stakeholders on system architecture.
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
