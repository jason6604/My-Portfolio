import React from 'react';
import '../styles/Portfolio.css';
import project from '../assets/coding.jpg'
import spacebubble from '../assets/spacebubble.png'
import stockcrawler from '../assets/stockcrawler.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Space Bubble',
      description: 'Game Design',
      image: spacebubble,
      link: new URL('http://google.com')
    },
    {
      id: 2,
      title: 'Stock Fetcher',
      description: 'Web Crawler',
      image: stockcrawler,
      link: stockcrawler
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'UX/UI Design',
      image: project,
      link: 'www.google.com'
    },
    // Add more projects
  ];

  const openProject = (url) => {    
    window.open(url, '_blank').focus();
    console.log(url);
  }

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <h2>Portfolio</h2>
        <p>Recent Projects</p>
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
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;