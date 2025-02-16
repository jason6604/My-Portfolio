import React from 'react';
/*import { BrowserRouter as Router } from 'react-router-dom';*/
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { translations } from './resource/translations';
import './styles/App.css';

export const LanguageContext = React.createContext();

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
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;