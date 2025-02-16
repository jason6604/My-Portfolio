import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import headerImage from '../assets/header-selfie.jpg';
import twicon from '../assets/taiwan_rec.png'
import '../styles/Header.css';

const Header = () => {
  return (
    <section className="header" id="home">
      <motion.div 
        className="header-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Tsai Chia-Han <img src={twicon} alt='Taiwan' title='Taiwan'/></h1>
        <h2>Tech Lead - Software Developer</h2>
        <p> Problem Solver / Team Player / Quick Learner</p>
        <div className="header-buttons">
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            className="primary-btn"
          >
            View My Work
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="primary-btn"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
      <motion.div 
        className="header-image"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={headerImage} alt="header" />
      </motion.div>
    </section>
  );
};

export default Header;