import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const { translations } = useContext(LanguageContext);
  const skillCategories = translations.skills.skillCategories;
  const additionalSkills = translations.skills.additionalSkills;

  return (
    <section className="skills" id="skills">
      <motion.div 
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="skills-header">
          <h2>{translations.skills.title}</h2>
          <p>{translations.skills.description}</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-category"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="additional-skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>{translations.skills.addTitle}</h3>
          <div className="skill-tags">
            {additionalSkills.map((tag, index) => (
              <motion.span 
                key={index}
                className="skill-tag"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;