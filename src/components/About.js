import React, { useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages } from '../resource/common.js';
import { LanguageContext } from '../App';
import parse from 'html-react-parser';
import '../styles/About.css';
import twicon from '../assets/taiwan.png'
import jpicon from '../assets/japan.png'
import cnicon from '../assets/china.png'

const About = () => {
  const { translations } = useContext(LanguageContext);
  const [isDownCVOpen, setDownCVOpen] = useState(false);
  const cvDropdownRef = useRef(null);
  const WorkExperience = translations.about.workExperience;
  const Expertises =translations.about.expertises.data;
  const Stats = translations.about.stats;

  useEffect(() => {
     const handleClickOutside = (event) => {
       if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target)) {
        setDownCVOpen(false);
       }
     };

     document.addEventListener('mousedown', handleClickOutside);
     
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            {parse(translations.about.aboutText)}
            <div className="about-buttons" ref={cvDropdownRef}>
              <motion.button
                className="cv-button"
                onClick={() => setDownCVOpen(!isDownCVOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.about.button.downloadCV}
                <svg 
                  className={`arrow-icon ${isDownCVOpen ? 'open' : ''}`}
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </motion.button>

              <AnimatePresence>
                {isDownCVOpen && (
                  <motion.div
                    className="cv-list"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        className={'cv-option'}
                        whileHover={{ backgroundColor: 'rgba(0, 56, 115, 0.5)' }}
                      >
                        {lang.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="about-timeline">
            {WorkExperience.map((job, index) => (
              <div className={(index+1) % 2 === 1 ? "timeline-container-left" : "timeline-container-right"}>
                <div className='timeline-content'>
                  <h4>{job.years}</h4>
                  <p>
                    {job.company} {job.location.map((e) => (
                      <img src={e==='Japan' ? jpicon : (e==='Taiwan' ? twicon : cnicon)} alt={e} title={e}/>
                    ))}<br/>
                    <span>●{job.jobtitle}</span><br/>
                    <span>&nbsp;&nbsp;&nbsp;└ {job.jobsummary}</span>
                  </p>
                </div>
              </div>
            ))}            
          </div>
        </motion.div>

        <motion.div 
          className="stats-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h3>{stat.file ? <a href={stat.file} target="_blank" rel="noreferrer">{stat.number}</a> : stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-overview"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>{translations.about.expertises.title}</h3>
          <div className="expertise-grid">
            {Expertises.map((expertises) => (
              <div className="expertise-container">     
                <h4>{expertises.Category}</h4>
                <div className='expertise-items'>
                {expertises.Items.map((item)=>(
                  <span className='expertise-item'>{item}</span>
                ))}
                </div>
              </div>
            ))}            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;