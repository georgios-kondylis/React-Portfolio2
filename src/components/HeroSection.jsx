import React from "react";
import Typewriter from "./Typewriter";
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import { margins_paddings } from "../utils";

const HeroSection = ({ textColor, textColor2, darkMode }) => {
  return (
    <div id="home" className={`flex gap-[20px] min-h-[90vh] justify-between max-md:justify-center max-md:flex-col-reverse max-md:h-[100vh] items-center w-full ${margins_paddings} transition-all ease-in-out duration-300`}>
      {/* Text Section */}
      <div className="max-md:w-[100%] md:w-[50%] h-[450px] max-sm:h-[370px] flex flex-col justify-between gap-2 ">

        <div>
          <h1 className={`${textColor} sm:text-[2rem] md:text-[2rem] text-[1.5rem] font-bold transition-all ease-in-out duration-300`}>
            Hello! My name is Georgios Kondylis
          </h1>
          <Typewriter textColor={textColor} />
        </div>
       
       
        <div id="SOCIAL-MEDIA_BUTTONS_CHECKS" className={`flex flex-col gap-[20px]`}>
          <div className={`${textColor2} flex  max-sm:justify-center gap-[20px]`}>
            <a href=""><i className={`fa-brands fa-linkedin text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
            <a href=""><i className={`fa-brands fa-github text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
            <a href=""><i className={`fa-brands fa-facebook text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
            <a href=""><i className={`fa-brands fa-instagram text-[2rem] ${darkMode? 'hover:text-[#ffffff]' :'hover:text-[#4a4a4a]'} hover:scale-110 transition-all ease-in-out duration-300`}></i></a>
          </div>
         

          <div className={`${textColor} flex max-sm:justify-center gap-[20px]`}>
              <button className={`HeroBTN px-[10px] py-[5px] rounded-[4px] bg-[#f5f3dc] text-[black] ${!darkMode? 'border-[#262626] border-[1px] bg-transparent' : 'border-none'}`}>Projects</button>
              <button className={`HeroBTN px-[10px] py-[5px] rounded-[4px] border border-[#f5f3dc] text-[#f5f3dc] ${!darkMode && 'bg-[#171717] border-none'}`}>
                Download CV <DownloadIcon/>
              </button>
          </div>

          <div className="flex  max-sm:mx-auto flex-col">
            <div className={`${textColor2} flex gap-[5px]`}><CheckIcon/><p className={`${textColor}`}> Certified Web Developer </p></div>
            <div className={`${textColor2} flex gap-[5px]`}><CheckIcon/><p className={`${textColor}`}>500+ Hours of coding</p></div>
            <div className={`${textColor2} flex gap-[5px]`}><CheckIcon/><p className={`${textColor}`}>30+ Projects Completed</p></div>
          </div>
          
        </div>
        
      </div>

      {/* Image Section */}
      <div className="w-[60%] max-lg:w-[70%] lg:w-[50%] xl:w-[40%] max-md:w-[80%] relative align-baseline flex justify-center rounded-3xl transition-all ease-in-out duration-700">
        <img src="/giochil.png" alt="Georgios" className="rounded-3xl w-[100%]" />
        <div id="FadeEffect" className={`absolute w-full h-full top-0 left-0`} style={{ backgroundImage: `linear-gradient(180deg, #00000000, #00000000, #00000000, ${darkMode ? '#121212' : '#00000000, #00000000,  #00000000, #00000000, #00000000, #00000000,  #00000000, #00000000, #00000000, #00000000, #f5f3dc'})`}}></div>
      </div>
    </div>
  );
};

export default HeroSection;

