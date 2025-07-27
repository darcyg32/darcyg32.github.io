import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <motion.button
        onClick={scrollToTop}
        className={styles.scrollTop}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>

      <div className={styles.content}>
        <motion.div
          className={styles.footerSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Navigation</h3>
          <nav>
            <motion.a
              href="#home"
              whileHover={{ x: 5, color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ x: 5, color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              About
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ x: 5, color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ x: 5, color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ x: 5, color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>

        <motion.div
          className={styles.footerSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Contact</h3>
          <div className={styles.contactInfo}>
            <motion.a
              href="mailto:darcylgeyer@gmail.com"
              whileHover={{ scale: 1.05, color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope /> darcylgeyer@gmail.com
            </motion.a>
            <p>Adelaide, Australia</p>
          </div>
          <div className={styles.socialLinks}>
            <motion.a
              href="https://github.com/darcyg32"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                y: -5,
                color: "var(--primary)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/darcy-geyer/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: -5,
                y: -5,
                color: "var(--primary)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.copyright}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>
          Designed & Built with <FaHeart className={styles.heart} /> by Darcy
          Geyer
          <span className={styles.separator}>|</span>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
