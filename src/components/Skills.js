import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Domain",
      skills: [
        { name: "Dynamics 365", level: 90 },
        { name: "API Integration", level: 85 },
        { name: "KPI System", level: 85 },
        { name: "eHRD", level: 80 },
        { name: "Scrum", level: 80 }
      ]
    },
    {
      category: "Development",
      skills: [
        { name: "JavaScript | TypeScript", level: 90 },
        { name: "React.js", level: 75 },
        { name: "Html & CSS", level: 80 },
        { name: "C#", level: 90 },
        { name: "VB", level: 80 },
        { name: "RDL", level: 90 },
        { name: "SSIS", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Visual Studio", level: 90 },
        { name: "VS Code", level: 90 },
        { name: "DevOps", level: 90 },
        { name: "Git", level: 85 },
        { name: "PowerShell", level: 80 },
        { name: "Playwright", level: 75 }
      ]
    }
  ];

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
          <h2>Skills Overview</h2>
          <p>A comprehensive overview of my technical expertise and proficiency levels</p>
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
          <h3>Additional Skills</h3>
          <div className="skill-tags">
            {[
              "Python",
              "Java",
              "Android App",
              "Eclipse",
              "Cloudfare",
              "Web Performance", 
              "Automation Testing",
              "Agile Methodology",
              "Problem Solving",
              "Team Collaboration"
            ].map((tag, index) => (
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