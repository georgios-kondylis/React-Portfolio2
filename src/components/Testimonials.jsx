import React from "react";
import { testimonials } from "../utils";
import { margins_paddings } from "../utils";
import { motion } from 'framer-motion';

const Testimonials = ({ textColor, darkMode }) => {
  return (
    <div id="testimonials" className={` ${margins_paddings} flex py-[20px] justify-center flex-wrap gap-[20px]`}>
      
      <h1 className={`w-full mx-auto text-[2.5rem] text-center max-sm:text-[1.8rem] HEADER-mb ${textColor}`}>
         Testimonials
      </h1>

      {testimonials.map((test, i) => (
        <motion.div key={i} className={`bg-textBg mb-[45px] overflowY-auto rounded-xl min-w-[300px] max-w-[500px] h-[300px] relative flex flex-1 flex-col justify-start items-center w-full text-white`}
          initial={{opacity:0, y: '50px'}}
          whileInView={{opacity:1, y: '0px'}}
          viewport={{margin: '-100px'}}
          transition={{ duration: 0.7 }}
        >

          {test.img && 
          <div className="absolute top-[-60px] left-[20px] rounded-full w-[110px] h-[110px] flex items-center justify-center">
            <img className={`w-full h-full  object-[center_0%] rounded-full object-cover p-[5px] 
                ${darkMode 
                  ? 'bg-[linear-gradient(to_top,#141414_42%,transparent_100%)]' 
                  : 'bg-[linear-gradient(to_top,#f5f3dc_40%,transparent_100%)]'} 
              `} src={test.img}  alt="" />
          </div>}
         
          <h1 className="absolute top-[10px] right-[20px]">
            {test.name}
          </h1>
          <h1 className="absolute text-[0.7rem] top-[33px] right-[20px]">
            {test.title}
          </h1>
         
          <div className="absolute top-[60px] right-[20px] flex gap-[5px] flex-row">
            {test.stars.map((star,i) => (
             <img key={i} className="w-[17px]" src="/star.png" alt=""></img>
            ))}
          </div>
          <p className="absolute top-[85px] p-[15px] max-h-[200px] overflow-y-auto">
            {test.review}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;


{/*
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i> 
 <i class="absolute text-[1.3rem] left-[125px] top-[12px] fa-solid fa-quote-left"></i>
*/}