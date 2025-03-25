import React, { useState, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../App';
import parse from 'html-react-parser';
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
  const { translations } = useContext(LanguageContext);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const infoCards = translations.contact.contactDetails.infoData;
  const socialLinks = [
    { platform: 'linkedin', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/jason-tsai-0179ba165/' },
    { platform: 'github', icon: 'fab fa-github', link: 'https://github.com/jason6604' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your EmailJS service details
      const result = await emailjs.sendForm(
        'service_g1ypn6j',
        'template_zsryj1s',
        formRef.current,
        '8sIcQDn_NYzwYjwBB'
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: translations.contact.messageSent.success
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: translations.contact.messageSent.error
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
          {parse(translations.contact.title)}
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            {/* Contact Info Cards with Hover Animation */}
            <h3>{translations.contact.contactDetails.title}</h3>
            {infoCards.map((card, index) => (
              <motion.a 
                key={index}
                href={card.link}
                className="info-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={card.icon}></i>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.a>
            ))}

            {/* Social Media Links with Hover Effects */}
            {<motion.div className="social-links">
              {socialLinks.map((platform) => (
                <motion.a
                  key={platform.platform}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={platform.icon}></i>
                </motion.a>
              ))}
            </motion.div>}
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
                name="from_name"
                placeholder={translations.contact.messageInput.placeholder.name}
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
                name="from_email"
                placeholder={translations.contact.messageInput.placeholder.email}
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
                placeholder={translations.contact.messageInput.placeholder.subject}
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
                placeholder={translations.contact.messageInput.placeholder.message}
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
              {isSubmitting ? translations.contact.messageInput.button.sending : translations.contact.messageInput.button.send}
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