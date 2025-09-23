import React from "react";

const SwichBtn = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className={`flex flex-row-reverse items-center justify-between w-[60px] px-[2px] py-[1.5px] rounded-[50px] h-[30px]`}
      style={{
        background: darkMode
          ? "linear-gradient(30deg,  #ffffff30, #282828, #282828, #ffffff20)"
          : "linear-gradient(30deg,  #00000090, #ffffff, #ffffff, #00000090)",
      }}
    >
      {darkMode? <img className="mr-[5px] w-[14px]  transition-all ease-in-out duration-300" src="/moon.png" alt="" /> : <img className="translate-x-[-34px] w-[18px]  transition-all ease-in-out duration-300 " src="/sun.png" alt="" /> }
      
      <div
        id="Circle"
        className="flex items-center justify-end w-[28px] h-[27px] rounded-full transition-translate ease-in-out duration-300"
        style={{
          background: darkMode
            ? "linear-gradient(150deg, #121212, #ffffff, #ffffff90, #121212)"
            : "linear-gradient(150deg,  #ffffff50, #121212, #121212, #ffffff50)",
          transform: darkMode? "translateX(1px) translateY(0.5px)" : "translateX(28px) translateY(0.5px)" ,
        }}>
      </div>
    </button>
  );
};

export default SwichBtn;
