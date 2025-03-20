import React, { useContext, useRef, useState } from 'react';
import { LanguageContext } from '../App';
import '../styles/Portfolio.css';
import closeImg from '../assets/cross.png'

const Portfolio = () => {
  const { translations } = useContext(LanguageContext);
  const projects = translations.portfolio.projects;
  const videoRef = useRef(null);
  const [demoVideo, setDemoVideo] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  
  const openDemoVideo = (url) => {
    setDemoVideo(url);
    setShowDemo(true);
    videoRef.current.load();
    videoRef.current.disablePictureInPicture = true    
  }

  const closeDemeVideo = () => {
    videoRef.current.pause();
    setShowDemo(false);
  }

  /*const openProject = (url) => {    
    const windowfeature = "popup,top=150%,left=500%,width=600,height=370";
    const handle = window.open(
      url, 
      '_blank',
      windowfeature
    );

    if (!handle) {
      alert("Your Browser is not allowed Popup.");
    }
  }*/

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
                  <button onClick={() => openDemoVideo(project.link)} className="view-project">
                    {translations.portfolio.viewProject}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>        
      </div>
      <div className='portfolio-demo' style={{display: showDemo?'':'none'}}>
          <video ref={videoRef} className='portfolio-video' src={demoVideo} controls muted autoPlay>
          </video>
      </div>
      <div className='portolio-video-cover' style={{display: showDemo?'':'none'}}></div>
      <img className='portfolio-video-close' src={closeImg} alt='close-video' style={{display: showDemo ? '' : 'none'}} onClick={() => closeDemeVideo()}></img>    
    </section>
  );
};

export default Portfolio;