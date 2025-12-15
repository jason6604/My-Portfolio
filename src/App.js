import React, { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
/*import { BrowserRouter as Router } from 'react-router-dom';*/
/*import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';*/
import { translations } from './resource/translations';
import './styles/App.css';

export const LanguageContext = React.createContext();

const Navbar = React.lazy(() => import('./components/Navbar'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

function App() {
  const [currentLang, setCurrentLang] = React.useState(
    localStorage.getItem('preferred-lang') || 'en'
  );

  return (
    <LanguageContext.Provider value={{ 
      currentLang, 
      setCurrentLang,
      translations: translations[currentLang] 
    }}>
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
          <ScrollToTop />
        </Suspense>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;