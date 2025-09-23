import React, { useState } from "react";
import css from "../assets/icons/cssicon.png";
import html from "../assets/icons/htmlicon.png";
import js from "../assets/icons/jsicon.png";
import nextjs from "../assets/icons/nextjsicon.png";
import react from "../assets/icons/reacticon.png";
import typescript from "../assets/icons/Typescript.png"
import tailwind from "../assets/icons/tailwindicon.png";
import node3 from "../assets/icons/node3.png";
import expressicon from "../assets/icons/expressicon.png";
import gsap from "../assets/icons/gsapicon.svg";
import framermotion from "../assets/icons/framermotionicon.svg";
import figma from "../assets/icons/figmaicon.png";
import mongo from "../assets/icons/mongodbicon.png";
import canva from "../assets/icons/canvaicon.png";
import restApi from "../assets/icons/RESTapi.png"

const Skills = ({textColor, darkMode}) => {
  const [dispayedSkills, setDispayedSkills] = useState("Frontend");

  const skills = {
    'Frontend': [
      { img: html, name: "HTML" },
      { img: css, name: "CSS" },
      { img: tailwind, name: "Tailwind CSS" },
      { img: js, name: "JavaScript" },
      { img: react, name: "React" },
      { img: typescript, name: "Typescript" },
      { img: nextjs, name: "Next.js" },
      { img: gsap, name: "GSAP" },
      { img: framermotion, name: "Fr.Motion" },
      ,
    ],
    'Backend': [
      { img: node3, name: "Node.js" },
      { img: expressicon, name: "Express.js" },
      { img: mongo, name: "MongoDB" },
      { img: restApi, name: "Rest API" },
    ],
    'UI/UX': [
      { img: figma, name: "Figma" },
      { img: canva, name: "Canva" },
    ],
  };

  return (
    <div
      id="about"
      className="bg-transparent flex flex-col"
    >
      {/* Buttons to switch skills category */}
      <div className={`text-white pb-[5px] rounded-md w-full flex justify-around gap-1 mb-[15px]`}>
        {Object.keys(skills).map((category, i) => (
          <div key={i} className="relative ">
            <button key={i} className={`${dispayedSkills === category? `${textColor} text-[1.1rem] ` : `${darkMode? ' text-[#8a8a8ab8]':' text-[#2d2d2db8]'} transition-all ease-in-out duration-300` }`}
              onClick={() => setDispayedSkills(category)} // Fix applied here
            >
              {category.toUpperCase()}
            </button>
            {dispayedSkills === category &&  
            <div className={`absolute bottom-0 left-0 w-[90%] h-[2px] bg-gradient-to-r ${darkMode? 'from-[#f5f3dc]' : 'from-[#000000]'} to-transparent`}></div>}
          </div>
        ))}
      </div>

      {/* Display selected skills */}
      <div className={`w-full md:min-w-[400px] relative flex flex-wrap justify-center text-white bg-textBg max-md:p-[10px] md:p-[25px] rounded-lg max-h-[400px] gap-[20px]`}>
        {skills[dispayedSkills].map((skill, i) => (
          <div key={i} className="flex items-center gap-2">
            {skill.name === "Next.js" ? (
              <div className="rounded-full w-[40px] h-[40px] bg-white">
                <img className="w-[40px] object-contain rounded-full border" src={nextjs} alt="" />
              </div>
            ) : (
              <img
                className={`${skill.name === 'MongoDB'? 'w-[26px] max-sm:w-[20px]' :'w-[40px] max-sm:w-[34px]'} object-contain`}
                src={skill.img} alt={skill.name}
              />
            )}
            <p className="max-supersmall:hidden">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
