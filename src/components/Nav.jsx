import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";
import { useState, useEffect } from "react";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.logo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="#home" onClick={handleLinkClick}>
          DG
        </a>
      </motion.div>

      <motion.button
        className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""}`}
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.overlay}
            onClick={handleLinkClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.a
              href="#home"
              className={styles.navLink}
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <span className={styles.navNumber}>01.</span>Home
            </motion.a>
            <motion.a
              href="#about"
              className={styles.navLink}
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <span className={styles.navNumber}>02.</span>About
            </motion.a>
            <motion.a
              href="#experience"
              className={styles.navLink}
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <span className={styles.navNumber}>03.</span>Experience
            </motion.a>
            <motion.a
              href="#skills"
              className={styles.navLink}
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <span className={styles.navNumber}>04.</span>Skills
            </motion.a>
            <motion.a
              href="#projects"
              className={styles.navLink}
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <span className={styles.navNumber}>05.</span>Projects
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.navLink}
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <span className={styles.navNumber}>06.</span>Contact
            </motion.a>
            <motion.a
              href="/Darcy_Geyers_Resume.pdf"
              className={styles.resumeButton}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              variants={mobileLinkVariants}
              whileHover={{ scale: 1.05 }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.div
        className={styles.desktopNav}
        variants={linkVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#home"
          className={styles.navLink}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.navNumber}>01.</span>Home
        </motion.a>
        <motion.a
          href="#about"
          className={styles.navLink}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.navNumber}>02.</span>About
        </motion.a>
        <motion.a
          href="#experience"
          className={styles.navLink}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.navNumber}>03.</span>Experience
        </motion.a>
        <motion.a
          href="#skills"
          className={styles.navLink}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.navNumber}>04.</span>Skills
        </motion.a>
        <motion.a
          href="#projects"
          className={styles.navLink}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.navNumber}>05.</span>Projects
        </motion.a>
        <motion.a
          href="#contact"
          className={styles.navLink}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className={styles.navNumber}>06.</span>Contact
        </motion.a>
        <motion.a
          href="/Darcy_Geyers_Resume.pdf"
          className={styles.resumeButton}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          Resume
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}
