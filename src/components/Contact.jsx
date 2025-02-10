import styles from './Contact.module.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    })

    useEffect(() => {
        emailjs.init("Jo7CUE5iFvsb4iL0w")
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitStatus({ submitted: true, success: false, message: 'Sending...' })

        try {
            await emailjs.send(
                "service_jsuso9c",
                "template_x5i8h5p",
                {
                    from_name: formData.name,

                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: "Darcy", 
                    to_email: "darcylgeyer@gmail.com"
                }
            )

            setSubmitStatus({
                submitted: true,
                success: true,
                message: 'Message sent successfully! I\'ll get back to you soon.'
            })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            setSubmitStatus({
                submitted: true,
                success: false,
                message: 'Failed to send message. Please try again or contact me directly via email.'
            })
            console.error('Email error:', error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                
                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <h3>Let's Connect</h3>
                        <p>
                            I'm currently looking for new opportunities and my inbox is always open. 
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <FaEnvelope />
                                <a href="mailto:darcylgeyer@gmail.com">darcylgeyer@gmail.com</a>
                            </div>
                            <div className={styles.contactItem}>
                                <FaMapMarkerAlt />
                                <span>Adelaide, Australia</span>
                            </div>
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
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                        {submitStatus.submitted && (
                            <div className={`${styles.submitMessage} ${submitStatus.success ? styles.success : styles.error}`}>
                                {submitStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
} 