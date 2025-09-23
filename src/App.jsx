import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const toggleSideNav = () => {
    setSideNavIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeSideNav = () => {
      if(window.innerWidth > 640) {
        setSideNavIsOpen(false)
      }
    }
    closeSideNav() // Run once on mount to check initial width

    window.addEventListener('resize', closeSideNav);
    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", closeSideNav);
  },[])

  const [darkMode, setDarkMode] = useState(true);
  const textColor = darkMode ? "text-white" : "text-black";
  const textColor2 = darkMode ? "text-[#f5f3dc]" : "text-black";

  return (
    <BrowserRouter>
      <div
        id="BACKGROUND-FIXED"
        className={`${darkMode ? "bg-[#121212] bg-cover bg-center bg-fixed" : "bg-[url('/beigeBG.jpg')] bg-cover bg-center bg-fixed"} w-full h-full overflow-x-hidden`}
        style={darkMode ? { backgroundImage: "url('/Swatch.png'), url('/grid-peice.png')" } : {}}
      >
        {/* Always show the Navbar on the / route */}
        <Navbar
          sideNavIsOpen={sideNavIsOpen}
          setSideNavIsOpen={setSideNavIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          textColor={textColor}
          toggleSideNav={toggleSideNav}
        />
        {/* Routes */}
        <Routes>
          {/* Index route to render Home under the Navbar */}
          <Route
            index
            element={
              <Home
                sideNavIsOpen={sideNavIsOpen}
                setSideNavIsOpen={setSideNavIsOpen}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                textColor={textColor}
                textColor2={textColor2}
                toggleSideNav={toggleSideNav} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


// <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f5f3dc] to-transparent"></div>

//               NOTES



// Core MERN Stack Skills
// ✅ React.js – Strong understanding of hooks (useState, useEffect), component-based architecture, and state management (like Redux or Zustand).
// ✅ Node.js & Express.js – Building fast, scalable backends and handling middleware, authentication, and APIs.
// ✅ MongoDB & Mongoose – NoSQL database management, schema design, and aggregation.
// ✅ RESTful APIs & GraphQL – Knowing how to build and consume APIs is a must. GraphQL is a big plus.
// ✅ Routing & Navigation – Using React Router effectively for single-page applications.

// 💡 Advanced & Trending Skills
// 🔥 Authentication & Security – JWT, OAuth, and security best practices to protect APIs and users.
// 🔥 Performance Optimization – Lazy loading, memoization (useMemo, useCallback), and efficient state management.
// 🔥 TypeScript – More companies are moving to TypeScript for better code safety.
// 🔥 Testing – Writing unit and integration tests using Jest, Mocha, or Cypress.
// 🔥 Docker & Deployment – Knowing Docker, AWS, or Vercel/Netlify helps you deploy and scale apps.
// 🔥 WebSockets & Real-time Apps – If you want to build real-time apps (chats, notifications, live updates).
// 🔥 Microservices & Serverless – A big trend in backend development for scalability.

// 🛠 Bonus Skills That Make You Stand Out
// 🔹 Next.js – Many companies prefer Next.js for SEO-friendly and optimized React apps.
// 🔹 CI/CD & DevOps – Basic GitHub Actions, CI/CD pipelines for smooth deployments.
// 🔹 GraphQL – More companies are switching from REST to GraphQL for API efficiency.
// 🔹 AI/ML Integration – Some companies want AI-powered features (like Chatbots, automation).

// 📌 What You Should Focus On First:
// 1️⃣ Master React.js & State Management (Redux, Zustand)
// 2️⃣ Get comfortable with APIs (CRUD, authentication, third-party APIs)
// 3️⃣ Improve backend skills (Node.js, Express, MongoDB, JWT authentication)
// 4️⃣ Learn deployment (Vercel, Netlify, DigitalOcean, or AWS basics)
// 5️⃣ Practice building full-stack apps (Portfolio projects matter a lot)



//                             CV TEXT 

// Hi, I’m Georgios, a Full-Stack Developer and UI/UX Designer with a
// deep passion for building beautiful, functional, and user-centered
// digital experiences. With one year of hands-on coding experience, I’m
// constantly learning, evolving, and pushing my skills to the next
// level. I thrive on problem solving, design, and animation, and I
// embrace every challenge whether it's debugging tricky errors or
// refining the tiniest UI detail. No matter the project, I bring 100%
// dedication, creativity, and attention to detail. I write clean,
// maintainable code and structure projects efficiently, making them easy
// to scale and collaborate on. Whether it’s working with APIs, setting
// up dynamic routing, or optimizing UI performance, I’m comfortable
// handling both the front-end and back-end to create seamless,
// high performing applications. For me, coding isn't just about writing
// lines of code it's about crafting experiences, solving problems, and
// bringing ideas to life.