import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { projects } from "../utils";
import mongoDB from "../assets/icons/mongodbicon.png";


const Projects = ({ textColor, darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 1 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / projectsPerPage);

  return (
    <div id="projects" className="w-full px-4 md:px-12 lg:px-24 flex flex-col justify-center items-center py-[60px] text-white">
      <motion.div 
          initial={{opacity:0, y: '50px'}}
          whileInView={{opacity:1, y: '0px'}}
          viewport={{margin: '-100px'}}
          transition={{ duration: 0.7 }}
       >
        <h1 className={`${textColor} HEADER-mb text-[2.5rem] max-sm:text-[1.8rem] font-extrabold mb-6`}>
          Projects
        </h1>
      </motion.div>

      {/* Grid Container */}
      <motion.div className="overflow-hidden w-full"
           initial={{opacity:0, y: '50px'}}
           whileInView={{opacity:1, y: '0px'}}
           viewport={{margin: '-100px'}}
           transition={{ duration: 0.7 }}
      >
        <div
          className="grid transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            gridTemplateColumns: `repeat(${totalSlides}, 100%)`,
          }}
        >
          {[...Array(totalSlides)].map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="pb-[30px] grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full "
            >
              {projects
                .slice(
                  slideIndex * projectsPerPage,
                  (slideIndex + 1) * projectsPerPage
                )
                .map((project) => (
                  <div key={project.id}  className="relative max-sm:h-fit flex flex-col items-center px-[1px] w-full " >
                    <h1 className={`${textColor} text-[1.4rem] mb-2 transition-all duration-300 ease-in-out`} >
                      {project.name}
                    </h1>
                    <div className="relative overflow-hidden rounded-lg"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {project.video ? (
                        <video autoPlay muted loop src={project.video}></video>
                      ) : (
                        <img className="rounded-lg w-full"
                          src={project.img}
                          alt={project.name}
                        />
                      )}
                      
                     {hoveredProject === project.id ?  <div className={`absolute inset-0 backdrop-blur-sm w-full flex flex-col justify-center items-center text-white transition-all duration-700 ease-in-out`} ></div> : null} 

                      <div className={`absolute inset-0 bg-[#000000cb] w-full flex flex-col justify-center items-center text-white transition1
                          ${ hoveredProject === project.id
                              ? "translate-y-[0px] opacity-100"
                              : "translate-y-full opacity-0"
                          }`} >
                        <h1 className="text-[1rem] overflow-y-auto max-h-[70%] font-semibold p-[10px] text-center">
                          {project.description}
                        </h1>

                        <div className="absolute flex gap-[10px] p-[20px] bottom-0 left-0">
                          {project.skillImages?.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              className={`object-contain max-sm:w-[30px] w-[20px] lg:w-[30px]`}
                            />
                          ))}
                        </div>

                        
                          <div className="absolute flex gap-[15px] p-[20px] bottom-0 right-0">
                            <a href={project.live} target="_blank">
                              {" "}
                              <i className="hover:text-[#f5f3dc] hover:scale-125 transition-all duration-300 ease-in-out text-[1.4rem] fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a href={project.repo} target="_blank">
                              <i className="hover:text-[#f5f3dc] hover:scale-125 text-[1.4rem] transition-all duration-300 ease-in-out fa-brands fa-github"></i>
                            </a>
                          </div>
                       
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="w-full py-6 flex gap-[15px] max-sm:gap-[8px] justify-center">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-8 rounded-full transition-all duration-300
              ${
                currentSlide === index
                  ? `bg-[#f5f3dc] ${
                      !darkMode ? "border-[3px] border-[#303030] bg-transparent" : ""
                    } text-black scale-110`
                  : "bg-[#303030]"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
