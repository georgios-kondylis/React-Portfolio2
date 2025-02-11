import React, { useState } from "react";
import SwichBtn from "./SwichBtn";
import { Button } from "@mui/material";
import { div } from "framer-motion/client";
import RateReviewIcon from '@mui/icons-material/RateReview';

const Navbar = ({ darkMode, setDarkMode, textColor, sideNavIsOpen, setSideNavIsOpen, toggleSideNav }) => {
  const margins_paddings = `max-sm:px-[20px] max-md:px-[40px] md:px-[60px] lg:px-[100px]`;

  const NavbarStyles = `fixed w-full h-[70px] 
  ${darkMode? 'bg-[rgba(23,23,23,1)]' : 'bg-[#eee4d9] shadow-[0_0_10px_rgba(0,0,0,0.3)]' } 
  border-b border-b-[rgba(225,225,225,0.3)]  
  flex gap-[20px] ${margins_paddings} items-center justify-between transition-all ease-in-out duration-700  z-50`

  return (
    <div
      id="NAVBAR"
      className={`${NavbarStyles}`}>

      {!sideNavIsOpen ?
       <div className={`w-[250px]`}>
         <img className={`w-full`} src={darkMode? `/logoWhite.png` : `/logoBlack.png`} alt="" />
       </div>
        : <div></div>}
      
      <div className={`${textColor} lg:mr-[70px] text-[1.2rem] max-lg:text-[1rem] flex items-center gap-4 max-lg:gap-[15px] max-lg:hidden transition-all ease-out duration-300`}> {/* Navlinks */}
        <a href="#home" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300 `}>Home</a>
        <a href="#about" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>About</a>
        <a href="#projects" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>Projects</a>
        <a href="#testimonials" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>Testimonials</a>
        <a href="#contact" className={`${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'}  hover:scale-110 transition-all ease-in-out duration-300`}>Contact</a>
      </div>

      <div className="flex items-center gap-[20px]">
          <SwichBtn darkMode={darkMode} setDarkMode={setDarkMode}/>
           <div className={`${textColor}  flex flex-col gap-[6px] lg:hidden cursor-pointer`} 
                onClick={toggleSideNav}>
              <span className={`${!darkMode? 'bg-black' : 'bg-white'} w-[25px] h-[2px] rounded-full  ${sideNavIsOpen ? 'rotate-45 translate-y-[8px]' : ''} transition-all ease-in-out duration-300`}></span>
              <span className={`${!darkMode? 'bg-black' : 'bg-white'} w-[25px] h-[2px] rounded-full ${sideNavIsOpen ? 'opacity-0' : ''} transition-all ease-in-out duration-300`}></span>
              <span className={`${!darkMode? 'bg-black' : 'bg-white'} w-[25px] h-[2px] rounded-full ${sideNavIsOpen ? '-rotate-45 translate-y-[-7px]' : ''} transition-all ease-in-out duration-300`}></span>
           </div>
      </div>
     
      {sideNavIsOpen && <div onClick={() => setSideNavIsOpen(false)} className={`fixed top-[70px] h-[100vh] left-0 bottom-0 right-0 bg-[#04040498] z-0`}></div> }

      {/* -------  sideNav  ------- */}
      <div className={`px-[5px] fixed top-0 left-0 ${!sideNavIsOpen ? 'right-[100%] opacity-0 pointer-events-none' :  'right-[60%]' } bottom-0 ${darkMode? 'bg-[#121212]' : 'bg-[#eee4d9]'}  z-50 transition-all ease-in-out duration-300 border-r border-r-[#5c5c5c49]
          flex flex-col items-start`}>
  
        <div className={`border-b pl-[10px] w-full flex items-center justify-start h-[70px] ${darkMode? 'border-b-[rgba(225,225,225,0.07)]' : 'border-b-[rgba(16,16,16,0.25)]'} `}>
          <img className="w-[170px]" src={`${darkMode? '/logoWhite.png' : '/logoBlack.png'}`} alt="" />
        </div> 
       
        <div className={`${!sideNavIsOpen ? ' opacity-0 pointer-events-none' :  '' } w-full ${textColor} max-md:text-[1rem] flex flex-col items-start gap-[5px] px-[0px] my-[20px]`}> {/* Navlinks */}
          <Button
            href="#home"
            fullWidth sx={{
              color: darkMode? 'white' : 'black',
              backgroundColor: 'transparent',
              paddingY: '5px',
              paddingX: '10px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                backgroundColor: darkMode ? '#222222' : '#00000032',
              },
            }}
            onClick={()=> setSideNavIsOpen(false)}
          >
            <i className="fa-solid fa-house-user"></i> Home
          </Button>

          <Button
            href="#about"
            fullWidth sx={{
              color: darkMode? 'white' : 'black',
              backgroundColor: 'transparent',
              paddingX: '10px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                backgroundColor: darkMode ? '#222222' : '#00000032',
              },
            }}
            onClick={()=> setSideNavIsOpen(false)}
          >
            <i className="fa-solid fa-address-card"></i>About
          </Button>

          <Button
            href="#projects"
            fullWidth sx={{
              color: darkMode? 'white' : 'black',
              backgroundColor: 'transparent',
              paddingTop: '7px',
              paddingBottom: '5px',
              paddingX: '10px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': { backgroundColor: darkMode ? '#222222' : '#00000032', },
            }}
            onClick={()=> setSideNavIsOpen(false)}
          >
          <i className="fa-solid fa-diagram-project"></i>Projects
          </Button>

          <Button
            href="#testimonials"
            fullWidth sx={{
              color: darkMode? 'white' : 'black',
              backgroundColor: 'transparent',
              paddingTop: '7px',
              paddingBottom: '5px',
              paddingX: '10px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {backgroundColor: darkMode ? '#222222' : '#00000032', },
            }}
          >
           <RateReviewIcon sx={{width: '18px'}}/>Testimonials
          </Button>

          <Button
            href="#contact"
            fullWidth sx={{
              color: darkMode? 'white' : 'black',
              backgroundColor: 'transparent',
              paddingTop: '7px',
              paddingBottom: '5px',
              paddingX: '10px',
              borderRadius: '6px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {backgroundColor: darkMode ? '#222222' : '#00000032',},
            }}
            onClick={()=> setSideNavIsOpen(false)}
          >
           <i className="fa-solid fa-message"></i>Contact
          </Button>
          {/* <br /><br />

          <a href="" className={`flex ml-[10px] items-center gap-[10px] ${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}> <i className="fa-solid fa-house-user"></i> Home</a>
          <a href="" className={`flex ml-[10px] items-center gap-[10px] ${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}> <i className="fa-solid fa-address-card"></i>About</a>
          <a href="" className={`flex ml-[10px] items-center gap-[10px] ${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}> <i className="fa-solid fa-diagram-project"></i>Projects</a>
          <a href="" className={`flex ml-[10px] items-center gap-[10px] ${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}> <i className="fa-solid fa-comments"></i>Testimonials</a>
          <a href="" className={`flex ml-[10px]  items-center gap-[10px] ${!darkMode? 'hover:text-[#4a4a4a]' : 'hover:text-[#f5f3dc]'} hover:translate-y-[-3px] hover:scale-110 transition-all ease-in-out duration-300`}> <i className="fa-solid fa-message"></i>Contact</a> */}
        </div>
      
      </div>  
    </div>
  );
};

export default Navbar;

// bg-[#eee4d9]



