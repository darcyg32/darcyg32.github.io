import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className={styles.footer}>
            <button onClick={scrollToTop} className={styles.scrollTop}>
                <FaArrowUp />
            </button>

            <div className={styles.content}>
                <div className={styles.footerSection}>
                    <h3>Navigation</h3>
                    <nav>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>

                <div className={styles.footerSection}>
                    <h3>Contact</h3>
                    <div className={styles.contactInfo}>
                        <a href="mailto:darcylgeyer@gmail.com">
                            <FaEnvelope /> darcylgeyer@gmail.com
                        </a>
                        <p>Adelaide, Australia</p>
                    </div>
                    <div className={styles.socialLinks}>
                        <a href="https://github.com/darcyg32" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/darcy-geyer/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>
                    Designed & Built by Darcy Geyer
                    <span className={styles.separator}>|</span>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    )
} 