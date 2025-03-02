import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../App';
import parse from 'html-react-parser';
import '../styles/About.css';
import twicon from '../assets/taiwan.png'
import jpicon from '../assets/japan.png'
import cnicon from '../assets/china.png'

const About = () => {
  const { translations } = useContext(LanguageContext);

  /*const WorkExperience = [
    {years: '2020-2025', company:'LYC | Hitachi Solution', jobtitle: 'Technical Lead', jobsummary:'Dynamic 365 CE', location:['Japan']},
    {years: '2019', company:'Titansoft', jobtitle: 'Technical Consultant', jobsummary:'API Integration', location:['Taiwan']},
    {years: '2017-2018', company:'鉅絖企業', jobtitle: 'Product Manager', jobsummary:'Online Store', location:['Taiwan','China']},
    {years: '2014-2017', company:'aEnrich Technology', jobtitle: 'Senior SE/SA', jobsummary:'eHRD | KPI System', location:['Taiwan']},
  ];

  const Expertises =[
    { 
      Category: 'Domain Knowledge',
      Items: ['Dynamics 365', 'KPI System', 'eHRD', 'Payment System']
    },
    { 
      Category: 'Dev Konwledge',
      Items: ['Web Dev', 'Front-End Dev', 'Back-End Dev', 'API Intergration', 'Database']
    },
    { 
      Category: 'Language & DB',
      Items: ['JavaScript', 'TypeScript','Html & CSS', 'C#', 'MSSQL', 'MySQL']
    },
    { 
      Category: 'Tools',
      Items: ['Visual Studio', 'VS Code', 'DevOps', 'Git', 'Powershell', 'Playwright']
    }
  ]*/

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
            <div className="about-buttons">
              <a href="/path-to-cv.pdf" className="cv-button" download>
                {translations.about.button.downloadCV}
              </a>              
            </div>
          </div>

          <div className="about-timeline">
            {translations.about.workExperience.map((job, index) => (
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
          {translations.about.stats.map((stat, index) => (
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
            {translations.about.expertises.data.map((expertises) => (
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