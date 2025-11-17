import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Hero.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaRocket,
  FaCode,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="home" className={styles.heroSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "20%", left: "10%" }}
          variants={floatingVariants}
          animate="animate"
        >
          <FaCode />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "60%", right: "15%" }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <FaRocket />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "80%", left: "20%" }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <FaCode />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className={styles.introText} variants={itemVariants}>
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Darcy Geyer
          </motion.h1>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Software Engineer
          </motion.h2>
        </motion.div>

        <motion.article
          className={styles.heroDescription}
          variants={itemVariants}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Hi! I'm a software engineer and Computer Science graduate from the
            University of Adelaide, passionate about systems programming and 
            building robust, efficient software.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            I've worked on scalable systems at Olivia Jenkins Consulting, built 
            tool injection capabilities at Edgible, and helped develop GuardianEyes 
            (a security app that placed second in the ThincLab Tech eChallenge). 
            I've also completed projects like{" "}
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
            , a full-stack journaling platform.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            I love learning and am always exploring new technologies and building 
            projects. I'm currently deepening my systems engineering expertise through 
            self-directed study, working through foundational texts like Effective 
            Modern C++ and Computer Systems: A Programmer's Perspective. I share my 
            structured notes and flashcards on GitHub (
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
            ) to reinforce my understanding.
          </motion.p>
          <motion.div
            className={styles.currentlyWorking}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <p>
              <strong>Currently working on:</strong> Deepening my systems engineering 
              foundations through structured study of Effective Modern C++ and Computer 
              Systems: A Programmer's Perspective, building projects to apply what I learn.
            </p>
          </motion.div>
        </motion.article>

        <motion.div
          className={styles.ctaButtons}
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <motion.a
            href="#projects"
            className={styles.primaryButton}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View my Projects
          </motion.a>
          <motion.a
            href="/Darcy_Geyers_Resume.pdf"
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(100, 255, 218, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className={styles.socialLinks}
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          <motion.a
            href="https://github.com/darcyg32"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/darcy-geyer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{
              scale: 1.2,
              rotate: -5,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        <motion.a
          href="#about"
          className={styles.scrollDown}
          aria-label="Scroll to About section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          whileHover={{
            scale: 1.1,
            y: -5,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
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
