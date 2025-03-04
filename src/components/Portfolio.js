import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const { translations } = useContext(LanguageContext);
  const projects = translations.portfolio.projects;

  const openProject = (url) => {    
    const windowfeature = "popup,top=150%,left=500%,width=600,height=370";
    const handle = window.open(
      url, 
      '_blank',
      windowfeature
    );

    if (!handle) {
      alert("Your Browser is not allowed Popup.");
    }
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2>{translations.portfolio.title}</h2>
          <p>{translations.portfolio.description}</p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => openProject(project.link)} className="view-project">
                    {translations.portfolio.viewProject}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;