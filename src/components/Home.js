import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { LanguageContext } from '../App';
import homeImage from '../assets/home-selfie.jpg';
import twicon from '../assets/taiwan_rec.png'
import '../styles/Home.css';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="home" id="home">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <h1><label>{translations.home.alphabetic}</label><br/>{translations.home.name}<img src={twicon} alt='Taiwan' title='Taiwan'/></h1>        
        <h2>{translations.home.jobTitle}</h2>
        <p>{translations.home.description}</p>
        <div className="home-buttons">
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500} 
            className="primary-btn"
          >
            {translations.home.buttons.viewWork}
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="primary-btn"
          >
            {translations.home.buttons.contact}
          </Link>
        </div>
      </motion.div>
      <motion.div 
        className="home-image"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={homeImage} alt="home" />
      </motion.div>
    </section>
  );
};

export default Home;