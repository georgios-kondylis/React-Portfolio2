import appleFull from "./assets/Project_pics/applebig.png";
import brainwavefull from "./assets/Project_pics/Brainwave.png";
import spotify from "./assets/Project_pics/spotiBig.png";
import L_O from "./assets/Project_pics/lotusOlivePC.png";
import flagapp from "./assets/Project_pics/flagsPC.png";
import pong from "./assets/Project_pics/pong2.mp4";
import snake from "./assets/Project_pics/snake.mp4";
import klarna from "./assets/Project_pics/klarna.jpg";
import passGen2 from "./assets/Project_pics/pass2.png";
import financeApp from "./assets/Project_pics/P_Finance_App.png"
import upendi from "./assets/Project_pics/upendi.png"

import css from "./assets/icons/cssicon.png";
import html from "./assets/icons/htmlicon.png";
import js from "./assets/icons/jsicon.png";
import react from "./assets/icons/reacticon.png";
import tailwind from "./assets/icons/tailwindicon.png";
import node from "./assets/icons/node3.png";
import gsap from "./assets/icons/gsapicon.svg";
import restApi from "./assets/icons/RESTapi.png";
import threeJS from "./assets/icons/3js.png";
import MUI from "./assets/icons/MUI.png";
import Mongo from "./assets/icons/mongo.jpg";
import framermotion from "./assets/icons/framermotionicon.svg";

export const projects = [
  {
    id: 1,
    name: "Personal Finace App",
    live: "https://georgiospersonalfinanceapp.vercel.app/sign-in",
    img: financeApp,
    repo: "https://github.com/georgios-kondylis/PersonalFinanceApp",
    skillImages: [react, tailwind, MUI, restApi, Mongo, framermotion ],
    description:
      "Personal Finace App allows you to track your balance, budgets, transactions, and recurring bills effortlessly. Create savings pots and stay in control of your finances with interactive charts!",
  },
  {
    id: 2,
    name: "Upendi Coffee Shop",
    live: "https://coffee-shop-new-zeta.vercel.app/",
    repo: "https://github.com/georgios-kondylis/coffeeShopNew",
    skillImages: [react, tailwind, restApi, Mongo, framermotion],
    img: upendi,
    description:
      "Developed a full-stack coffee shop app with secure authentication, profile management, and personalized ordering. Users receive email confirmations and can leave reviews with text and images. Utilized Cloudinary for image storage and RESTful APIs for full CRUD functionality.",
  },
  {
    id: 3,
    name: "Klarna Checkout",
    live: "https://klarna.onrender.com/",
    repo: "https://github.com/georgios-kondylis/Klarna",
    skillImages: [node, js],
    img: klarna,
    description:
      "I built a web service integrating the Klarna Checkout API using Node.js and Express. The project features real API calls to create a working checkout solution, simulating a real purchase process with products from the FakeStore API.",
  },
  {
    id: 4,
    name: "Lotus & Olive Restaurant",
    live: "https://georgios-kondylis.github.io/Lotus-Olive-Restaurant/",
    repo: "https://github.com/georgios-kondylis/Lotus-Olive-Restaurant",
    skillImages: [html, css, js],
    img: L_O,
    description:
      "Modern restaurant website with a functional table booking form.",
  },
  {
    id: 5,
    name: "Apple Clone",
    live: "https://giorgosogamiastsreact.netlify.app//",
    img: appleFull,
    repo: "https://github.com/georgios-kondylis/Georgios_Apple",
    skillImages: [react, tailwind, gsap, threeJS],
    description:
      "An Apple clone featuring an interactive 3D iPhone model and a video slider with a dynamic progress bar",
  },
  {
    id: 6,
   name: "Spotify Clone",
    live: "https://inquisitive-valkyrie-b87165.netlify.app/",
    repo: "https://github.com/georgios-kondylis/Spotify_Clone.",
    skillImages: [react, MUI, restApi],
    img: spotify,
    description:
      "Clone of Spotify's interface with custom features, utilizing auth keys and API tokens for user interaction.",
  },
  {
    id: 7,
    name: "Flag App",
    live: "https://georgios-the-flagapp-techover.netlify.app/",
    repo: "https://github.com/georgios-kondylis/CountryApp",
    skillImages: [react, tailwind, restApi],
    img: flagapp,
    description:
      "Developed an API-driven application that dynamically renders country information, including flags, by fetching data from a database using dynamic routing and API requests.",
  },
  {
    id: 8,
    name: "Pong Game",
    live: "https://georgios-kondylis.github.io/Pong-Game/Ping_Pong.html",
    repo: "https://github.com/georgios-kondylis/Pong-Game",
    skillImages: [html, css, js],
    video: pong,
    description:
      "A smooth, two-player Pong game with a fun and interactive gameplay experience.",
  },
  {
    id: 9,
    name: "Snake Game",
    live: "https://georgios-kondylis.github.io/Snake_game/snake.html",
    repo: "https://github.com/georgios-kondylis/Snake_game",
    skillImages: [html, css, js],
    video: snake,
    description:
      "A classic Snake game built using JavaScript and arrays for dynamic gameplay.",
  },
  {
    id: 10,
    name: "Brainwave",
    live: "https://brainwave-georgios.netlify.app/",
    repo: "https://github.com/georgios-kondylis/Brainwave",
    skillImages: [react, tailwind, gsap],
    img: brainwavefull,
    description:
      "Brainwave is Futuristic UI design project, still in progress, focusing on front-end development.",
  },
  {
    id: 11,
    name: "Password Generator",
    live: "https://georgios-kondylis.github.io/PasswordGenerator/starter-code/index.html",
    repo: "https://github.com/georgios-kondylis/PasswordGenerator",
    skillImages: [react, tailwind, gsap],
    img: passGen2,
    description:
      "An app that generates secure random passwords based on user-selected filters.",
  },
];

export const testimonials = [
  {
    name: "Marcus Pousete",
    img: "/MP-bg.png",
    title: "Instructor at Techover Academy",
    stars: ["1", "2", "3", "4", "5"],
    review: "Georgios is an incredibly committed and hardworking developer. He quickly grasps new concepts and applies them effectively in his projects. His technical skills, especially in React, Node.js, and MongoDB, are impressive, and he consistently delivers high quality work. Georgios ability to learn fast, adapt, and solve problems with a positive attitude makes him a valuable asset to any team. I'm confident he will continue to excel in his career."
  },
  {
    name: "Pashalis V.",
    img: "/pas.jpg",
    title: "Executive Chef at Lotus & Olive",
    stars: ["1", "2", "3", "4", "5"],
    review: "Georgios has an incredible eye for detail, and that reflects in his coding. His ability to create smooth, visually appealing websites is impressive. I have no doubt that the same discipline and creativity he applies in programming would make him excel in any field he chooses."
  },
  {
    name: "Paraschos K.",
    img: "/paras.jpg",
    title: "Owner of New Center Restaurant",
    stars: ["1", "2", "3", "4", "5"],
    review: "Georgios built the website for my restaurant, and the results were beyond expectations. Not only did it look modern and professional, but it also made booking tables much easier for our customers. Since launching the website, we’ve seen a significant increase in online reservations. His work truly made a difference in our business!"
  },
];


export const margins_paddings = `max-sm:px-[20px] max-md:px-[40px] md:px-[60px] lg:px-[100px]`;
