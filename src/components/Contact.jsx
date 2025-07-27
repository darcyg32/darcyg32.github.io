import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComments,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    emailjs.init("Jo7CUE5iFvsb4iL0w");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ submitted: true, success: false, message: "Sending..." });

    try {
      await emailjs.send("service_jsuso9c", "template_x5i8h5p", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Darcy",
        to_email: "darcylgeyer@gmail.com",
      });

      setSubmitStatus({
        submitted: true,
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message:
          "Failed to send message. Please try again or contact me directly via email.",
      });
      console.error("Email error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "20%", left: "10%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaComments />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "60%", right: "15%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <FaPaperPlane />
        </motion.div>
        <motion.div
          className={styles.floatingElement}
          style={{ top: "80%", left: "20%" }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <FaUser />
        </motion.div>
      </div>

      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          ref={ref}
          className={styles.contactContent}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Connect
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm currently looking for new opportunities and my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </motion.p>

            <motion.div
              className={styles.contactDetails}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="mailto:darcylgeyer@gmail.com"
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope />
                <span>darcylgeyer@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=Adelaide,South+Australia,Australia"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <FaMapMarkerAlt />
                <span>Adelaide, Australia</span>
              </motion.a>
            </motion.div>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
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
          </motion.div>

          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              className={styles.formGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className={styles.submitButton}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
            {submitStatus.submitted && (
              <motion.div
                className={`${styles.submitMessage} ${
                  submitStatus.success ? styles.success : styles.error
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => (
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
