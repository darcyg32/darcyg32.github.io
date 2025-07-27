import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.aboutText}>
            <p>
              I'm Darcy, a software engineer with a strong foundation in
              computer science and a passion for building thoughtful, impactful
              software.
            </p>
            <p>
              I currently lead AI and automation development at Olivia Jenkins
              Consulting, where I design and implement systems that streamline
              operations and enhance client experiences through custom tools and
              integrations. The work spans everything from backend
              infrastructure to AI-driven assistants and no-code platforms.
            </p>
            <p>
              I'm also building{" "}
              <a
                href="https://claritylog.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
                aria-label="Visit ClarityLog.app (opens in new tab)"
              >
                ClarityLog
              </a>
              , an AI-powered journaling tool that helps users reflect, organize
              their thoughts, and gain insight from their writing. It's my most
              technically ambitious solo project so far, and one I aim to ship
              and grow.
            </p>
            <p>
              Previously, I worked at Edgible, contributing to the development
              of a novel tool injection system using FastAPI and Ollama, and
              building GuardianEyes, an AI-powered security camera platform that
              placed second in the ThincLab Tech eChallenge.
            </p>
            <p>
              Outside of work, I've been involved in the University of
              Adelaide's tech community, competing in coding competitions,
              contributing to peer learning programs, and staying active in
              developer clubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
