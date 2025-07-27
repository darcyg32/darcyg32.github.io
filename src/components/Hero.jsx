import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.introText}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Darcy Geyer</h1>
          <h2 className={styles.title}>Software Engineer</h2>
        </div>

        <article className={styles.heroDescription}>
          <p>
            Hi! I'm a software engineer and Computer Science graduate from the
            University of Adelaide, passionate about building impactful products
            and solving complex problems.
          </p>
          <p>
            I've developed scalable AI and automation systems at Olivia Jenkins
            Consulting, built GuardianEyes (an AI security app that placed
            second in the ThincLab Tech eChallenge) and I'm currently
            solo-building{" "}
            <a
              href="https://claritylog.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
              aria-label="Visit ClarityLog.app (opens in new tab)"
            >
              ClarityLog
            </a>
            , an AI-powered journaling platform.
          </p>
          <p>
            I enjoy working across the full stack and constantly exploring new
            technologies to bring ambitious ideas to life.
          </p>
          <div className={styles.currentlyWorking}>
            <p>
              <strong>Currently working on:</strong> Scaling{" "}
              <a
                href="https://claritylog.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="Visit ClarityLog.app (opens in new tab)"
              >
                ClarityLog
              </a>
              's AI analysis engine, implementing advanced sentiment analysis
              and emotion detection, and optimizing the multi-prompt system for
              even faster processing speeds.
            </p>
          </div>
        </article>

        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.primaryButton}>
            View my Projects
          </a>
          <a
            href="/Darcy_Geyers_Resume.pdf"
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/darcyg32"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/darcy-geyer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>

        <a
          href="#about"
          className={styles.scrollDown}
          aria-label="Scroll to About section"
        >
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
}
