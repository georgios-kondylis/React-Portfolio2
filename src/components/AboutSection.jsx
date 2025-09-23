import React from "react";
import Skills from "./Skills";
import { motion } from 'framer-motion';

const AboutSection = ({ textColor, darkMode }) => {
  return (
    <div id="about"
      className="py-[60px] max-sm:py-[10px] max-md:mt-[100px] px-[20px] md:px-[60px] lg:px-[100px]"
    >
      <motion.div
        // onViewportEnter={() => console.log('enter')}   WORKS WIYHOUT ERRORS 👍🏽
        // onViewportLeave={() => console.log('left')}
        initial={{opacity:0, y: '50px'}}
        whileInView={{opacity:1, y: '0px'}}
        viewport={{amount: 1}}
        transition={{ duration: 0.7 }}> {/* Add a 0.7-second duration */}

        <h1 className={`${textColor} mx-auto text-[2.5rem] text-center max-sm:text-[1.8rem] HEADER-mb`}>
           Professional Background 
        </h1>
      </motion.div>

      <div className="grid justify-end grid-cols-1 md:grid-cols-[40%_60%] gap-[15px] w-full items-start"> 

        {/* Left Column - Image */}
        <motion.div className="flex justify-center"
                    initial={{opacity:0, y: '50px'}}
                    whileInView={{opacity:1, y: '0px'}}
                    viewport={{margin: '-100px'}}
                    transition={{ duration: 0.7 }}
        >
          <img className={`w-full ${darkMode? '':'border-[#313131] border-[4px]'} max-w-[450px] h-auto object-contain rounded-lg`} src="/LinkedInPIC.jpg" alt="Profile"/>
        </motion.div>

        {/* Right Column - Skills & Text */}
        <div className="grid justify-between grid-rows-auto gap-[15px] w-full h-full">
          {/* Top Row - Skills */}
          <motion.div className="min-h-[100px]"
             initial={{opacity:0, y: '50px'}}
             whileInView={{opacity:1, y: '0px'}}
            viewport={{margin: '-100px'}}
            transition={{ duration: 0.7 }}
          >
            <Skills textColor={textColor} darkMode={darkMode} />
          </motion.div>

          {/* Bottom Row - Text */}
          <motion.div
            initial={{opacity:0, y: '50px'}}
            whileInView={{opacity:1, y: '0px'}}
            viewport={{margin: '-100px'}}
            transition={{ duration: 0.7 }}
          >
            <p className={`rounded-lg bg-textBg px-[20px] py-[10px] text-[1.2rem] text-white leading-relaxed max-h-[380px] overflow-y-auto`}>
            As a Full-Stack Developer, I’m passionate about creating seamless, user-centric experiences that drive results. <br /> I write clean, scalable code, optimize UI performance, and structure projects for maximum efficiency.  <br /> With a keen eye for design and animation, I strive to build high-performing applications that are both functional and intuitive.
            I’m skilled in both front-end and back-end development, using Git for version control to ensure smooth collaboration and project management. <br />
            For me, coding is more than just building—it's about crafting intuitive experiences that engage users and deliver real value.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


