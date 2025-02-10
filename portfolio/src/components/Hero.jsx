import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'

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
                        I'm a software engineer and recent Computer Science graduate from the University of Adelaide, 
                        passionate about solving complex problems and creating impactful solutions.
                    </p>
                    <p>
                        My recent work includes pioneering tool injection features at Edgible and developing 
                        GuardianEyes, an AI-powered security camera system that secured second place in the 
                        ThincLab Tech eChallenge. I'm always excited to explore new technologies and tackle 
                        challenging projects across different domains of software engineering.
                    </p>
                </article>

                <div className={styles.ctaButtons}>
                    <a href="#projects" className={styles.primaryButton}>
                        View my Projects
                    </a>
                    <a href="/Darcy_Geyers_Resume.pdf" className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
                        Download Resume
                    </a>
                </div>

                <div className={styles.socialLinks}>
                    <a href="https://github.com/darcyg32" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/darcy-geyer/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <FaLinkedin />
                    </a>
                </div>

                <a href="#about" className={styles.scrollDown} aria-label="Scroll to About section">
                    <FaArrowDown />
                </a>
            </div>
        </section>
    )
}