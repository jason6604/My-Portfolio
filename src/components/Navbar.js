import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../App';
import '../styles/Navbar.css';
import logo from'../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, setCurrentLang, translations } = useContext(LanguageContext);
  const langDropdownRef = useRef(null);
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'jp', label: '日本語' },
    { code: 'tw', label: '中文' }
  ];


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 74; // navbar height + offset

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { title: translations.Navbar.home, to: 'home' },
    { title: translations.Navbar.about, to: 'about' },
    { title: translations.Navbar.skills, to: 'skills' },
    { title: translations.Navbar.portfolio, to: 'portfolio' },    
    { title: translations.Navbar.contact, to: 'contact' }
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
        staggerChildren: 0.1
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
    localStorage.setItem('preferred-lang', langCode);
  };

  const getCurrentLanguageLabel = () => {
    return languages.find(lang => lang.code === currentLang)?.label || 'English';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link key="home" to="home" smooth={true} duration={500}>
            <img src={logo} alt="Logo" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div 
          className="navbar-menu desktop-menu"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              activeClass=""
              className={activeSection === item.to ? 'nav-link active-menu' : 'nav-link'}
              onClick={() => setActiveSection(item.to)}
            >
              {item.title}
            </Link>
          ))}
          <div className="language-dropdown" ref={langDropdownRef}>
            <motion.button
              className="language-button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{getCurrentLanguageLabel()}</span>
              <svg 
                className={`arrow-icon ${isLangOpen ? 'open' : ''}`}
                width="10" 
                height="6" 
                viewBox="0 0 10 6"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </motion.button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  className="language-list"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                      whileHover={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}
                    >
                      {lang.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Hamburger Button */}
        <motion.div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.to}
                  variants={itemVariants}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass=""
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <div className="language-dropdown" ref={langDropdownRef}>
                <motion.button
                  className="language-button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{getCurrentLanguageLabel()}</span>
                  <svg 
                    className={`arrow-icon ${isLangOpen ? 'open' : ''}`}
                    width="10" 
                    height="6" 
                    viewBox="0 0 10 6"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      className="language-list"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
                          onClick={() => handleLanguageChange(lang.code)}
                          whileHover={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}
                        >
                          {lang.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;