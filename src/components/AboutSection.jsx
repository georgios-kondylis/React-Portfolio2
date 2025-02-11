import React from "react";
import Skills from "./Skills";

const AboutSection = ({ textColor, darkMode }) => {
  return (
    <div id="about"
      className="py-[60px] max-sm:py-[10px] max-md:mt-[100px] px-[20px] md:px-[60px] lg:px-[100px]"
    >
      <h1 className={`${textColor} mx-auto text-[2.5rem] text-center max-sm:text-[1.8rem] HEADER-mb`}>
      Professional Background 
      </h1>

      <div className="grid justify-end grid-cols-1 md:grid-cols-[40%_60%] gap-[15px] w-full items-start">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <img className={`w-full ${darkMode? '':'border-[#313131] border-[4px]'} max-w-[450px] h-auto object-contain rounded-lg`} src="/LinkedInPIC.jpg" alt="Profile"/>
        </div>

        {/* Right Column - Skills & Text */}
        <div className="grid justify-between grid-rows-auto gap-[15px] w-full h-full">
          {/* Top Row - Skills */}
          <div className="min-h-[100px]">
            <Skills textColor={textColor} darkMode={darkMode} />
          </div>

          {/* Bottom Row - Text */}
          <p className={`rounded-lg bg-textBg px-[20px] py-[10px] text-[1.2rem] text-white leading-relaxed max-h-[380px] overflow-y-auto`}>
          As a Full-Stack Developer, I’m passionate about creating seamless, user-centric experiences that drive results. <br /> I write clean, scalable code, optimize UI performance, and structure projects for maximum efficiency.  <br /> With a keen eye for design and animation, I strive to build high-performing applications that are both functional and intuitive.
          I’m skilled in both front-end and back-end development, using Git for version control to ensure smooth collaboration and project management. <br />
          For me, coding is more than just building—it's about crafting intuitive experiences that engage users and deliver real value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;



// Hi, I’m a Full-Stack Developer and UI/UX Designer with a passion for creating functional and user-friendly digital experiences.  
// <br /><br />
// With a year of hands-on coding, I’m constantly learning and evolving. I love problem-solving, design, and animation, whether it's debugging tricky errors or refining UI details.  
// <br /><br />
// I write clean, maintainable code and structure projects for scalability and collaboration. From working with APIs to optimizing UI performance, I handle both front-end and back-end to build seamless, high-performing applications while using Git for version control.  
// <br /><br />
// For me, coding is more than writing code; it's about crafting experiences, solving problems, and bringing ideas to life.





// <div className={`absolute z-10 bg-[#141414] w-[128px] h-[20px] left-[-6px] top-[20px] rounded-md`}></div>