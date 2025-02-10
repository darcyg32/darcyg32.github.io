import styles from './Nav.module.css'
import { useState, useEffect } from 'react'

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <a href="#home">DG</a>
            </div>
            <button 
                className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <a href="#home" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.navNumber}>01.</span>Home
                </a>
                <a href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.navNumber}>02.</span>About
                </a>
                <a href="#experience" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.navNumber}>03.</span>Experience
                </a>
                <a href="#skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.navNumber}>04.</span>Skills
                </a>
                <a href="#projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.navNumber}>05.</span>Projects
                </a>
                <a href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    <span className={styles.navNumber}>06.</span>Contact
                </a>
                <a 
                    href="/Darcy_Geyers_Resume.pdf" 
                    className={styles.resumeButton} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Resume
                </a>
            </div>
        </nav>
    )
}