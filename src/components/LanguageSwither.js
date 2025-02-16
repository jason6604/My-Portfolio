import React from 'react';
import { motion } from 'framer-motion';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'jp', label: 'JP' },
    { code: 'tw', label: 'CN' }
  ];

  return (
    <motion.div 
      className="language-switcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          className={`lang-btn ${currentLang === lang.code ? 'active' : ''}`}
          onClick={() => onLanguageChange(lang.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;