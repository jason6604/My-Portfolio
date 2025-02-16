import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your EmailJS service details
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Get in touch!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            {/* Contact Info Cards with Hover Animation */}
            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>New York, NY</p>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </motion.div>

            {/* Social Media Links with Hover Effects */}
            <motion.div className="social-links">
              {['linkedin', 'github', 'twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href={`https://${platform}.com/yourusername`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab fa-${platform}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form 
            ref={formRef}
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={itemVariants}
            >
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            <AnimatePresence>
              {status.message && (
                <motion.div
                  className={`status-message ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;