import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typewriter = ({ textColor }) => {
  const [text] = useTypewriter({
    words: [
      "Im a full-stack MERN developer.",
      "I work with APIs and craft clean UIs.",
      "Skilled in React, Node.js & MongoDB.",
      "Building fast & responsive web apps.",
      "Expert in animations & UI/UX design.",
      "Writing clean, scalable, and secure code.",
      "Comfortable with routing & databases.",
    ],
    loop: {},
    typeSpeed: 100, // Slower typing
    deleteSpeed: 50, // Faster deleting
    delaySpeed: 2000, // Pause between words
  });

  return (
    <div className={`${textColor} text-[1.4rem] md:text-[2rem]`}>
      <span>{text}</span>
      <Cursor />
    </div>
  );
};

export default Typewriter;

/* <p>
        1️⃣ "Hey, I'm a full-stack MERN developer!"
        3️⃣ "I work with APIs and craft clean UIs with Figma."
        4️⃣ "Skilled in HTML, CSS, JavaScript, and modern web tools!"
      </p> */
