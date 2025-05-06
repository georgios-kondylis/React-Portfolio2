import React from "react";
import Typewriter from "./Typewriter";
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import { margins_paddings } from "../utils";

const HeroSection = ({ textColor, textColor2, darkMode }) => {
  return (
    <div id="home" className={`flex gap-[20px] min-h-[100vh] justify-between max-md:justify-center max-md:flex-col-reverse max-md:h-[100vh] items-center w-full ${margins_paddings} transition1
                               max-md:mt-[70px] max-sm:mt-[0px]`}>
      {/* Text Section */}
      <div className="max-md:w-[100%] md:w-[50%] h-[450px] max-sm:h-[370px] flex flex-col justify-between gap-2 ">

        <div className="flex flex-col max-md:items-center">
          <h1 className={`${textColor} sm:text-[2rem] md:text-[2rem] max-md:text-center text-[1.5rem] font-bold transition1`}>
            Hello! My name is Georgios Kondylis
          </h1>
          <Typewriter textColor={textColor} />
        </div>
       
       
        <div id="SOCIAL-MEDIA_BUTTONS_CHECKS" className={`flex max-md:items-center flex-col gap-[20px]`}>
          <div className={`${textColor2} flex max-sm:justify-center gap-[20px]`}>
            <a target='blank' href="https://www.linkedin.com/in/georgios-kondylis-7b680a1a7/"><i className={`fa-brands fa-linkedin text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition1`}></i></a>
            <a target='blank' href="https://github.com/georgios-kondylis"><i className={`fa-brands fa-github text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition1`}></i></a>
            <a target='blank' href="https://www.facebook.com/Georgios1995Kondylis/"><i className={`fa-brands fa-facebook text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition1`}></i></a>
            <a target='blank' href="https://www.instagram.com/georgios.kondylis/"><i className={`fa-brands fa-instagram text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition1`}></i></a>
          </div>
         

          <div className={`${textColor} flex max-sm:justify-center gap-[20px]`}>
              <button className={`HeroBTN px-[10px] py-[5px] rounded-[4px] bg-[#f5f3dc] text-[black] ${!darkMode? 'border-[#262626] border-[1px] bg-transparent' : 'border-none'}`}><a href="#projects">Projects</a></button>
              <a href="/Gk_WebDeveloperCV.pdf" download
                className={`HeroBTN inline-flex items-center gap-2 px-[10px] py-[5px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] ${!darkMode && 'bg-[#171717] border-none'}`}
              >
                Download CV <DownloadIcon />
              </a>
          </div>

          <div className="flex  max-sm:mx-auto flex-col">
            <div className={`${textColor2} flex gap-[5px]`}><CheckIcon/><p className={`${textColor}`}> Certified Web Developer </p></div>
            <div className={`${textColor2} flex gap-[5px]`}><CheckIcon/><p className={`${textColor}`}>1000+ Hours of coding</p></div>
            <div className={`${textColor2} flex gap-[5px]`}><CheckIcon/><p className={`${textColor}`}>30+ Projects Completed</p></div>
          </div>
          
        </div>
        
      </div>

      {/* Image Section */}
      <div className="w-[60%] lg:w-[50%] xl:w-[40%] relative align-baseline flex justify-center rounded-3xl transition-all ease-in-out duration-700
                      max-lg:w-[70%] max-md:w-[80%]">
        <img src="/giochil.png" alt="Georgios" className="rounded-3xl w-[100%]" />
        <div id="FadeEffect" className={`absolute w-full h-full top-0 left-0`} style={{ backgroundImage: `linear-gradient(180deg, #00000000, #00000000, #00000000, ${darkMode ? '#121212' : '#00000000, #00000000,  #00000000, #00000000, #00000000, #00000000,  #00000000, #00000000, #00000000, #00000000, #f5f3dc'})`}}></div>
      </div>
    </div>
  );
};

export default HeroSection;

