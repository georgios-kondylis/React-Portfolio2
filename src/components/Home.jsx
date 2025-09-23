import React from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Testimonials from './Testimonials';


const Home = ({ darkMode, setDarkMode, textColor2, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {

  const dynamicBorder = `border ${darkMode ? ' focus:border-[#f5f3dc] border-[#3e3e3e] hover:border-[#f5f3dc] transition1' : 'focus:border-[#191919] border-[#b5b5b59b] hover:border-[#121212c9] transition1'}`;

  return (
    <div id='home' className={`pt-[70px] mx-auto flex flex-col items-center max-w-[1540px]`}>
      <HeroSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <AboutSection textColor={textColor} textColor2={textColor2} darkMode={darkMode}/>
      <Projects textColor={textColor} darkMode={darkMode}/>
      <Testimonials darkMode={darkMode} textColor={textColor} textColor2={textColor2}/>
      <Contact darkMode={darkMode} textColor={textColor} textColor2={textColor2} dynamicBorder={dynamicBorder}/>
      <Footer textColor={textColor} textColor2={textColor2} darkMode={darkMode} />
    </div>
  )
}

export default Home





