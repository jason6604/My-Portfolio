import React from 'react';
import '../styles/Portfolio.css';
import spacebubble from '../assets/spacebubble.png'
import stockcrawler from '../assets/stockcrawler.png'
import youtuberepeat from '../assets/youtuberepeat.png'
import autotabsopener from '../assets/autotabsopener.png'
import spacebubbledemo from '../assets/SpaceBubble-Demo.mp4'
import youtuberepeatdemo from '../assets/YouTubeRepeat-Demo.mp4'
import autotabsopenerdemo from '../assets/AutoTabsOpener.mp4'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Space Bubble',
      description: 'Javascript Game Design',
      image: spacebubble,
      link: spacebubbledemo
    },
    {
      id: 2,
      title: 'Stock Fetcher',
      description: 'Python Web Crawler',
      image: stockcrawler,
      link: stockcrawler
    },
    {
      id: 3,
      title: 'YouTube Replay Tool',
      description: 'React Web Tool',
      image: youtuberepeat,
      link: youtuberepeatdemo
    },
    {
      id: 4,
      title: 'Auto Tabs Opener',
      description: 'Browser Extension',
      image: autotabsopener,
      link: autotabsopenerdemo
    }
    // Add more projects
  ];

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
      </div>
    </section>
  );
};

export default Portfolio;