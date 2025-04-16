import Tenzies from "../assets/tenzies.png";
import BookStore from "../assets/bookstore.png";
import ThingsToDo from "../assets/Thingstodo.png";
import Portfolio from "../assets/portfolio.png";
interface ProjectsProps {
  name: string;
  image: string;
  description: string;
  stack: string[];
  app: string;
  github: string;
}

export const projectsList: ProjectsProps[] = [
  {
    name: "Book Store ",
    image: BookStore,
    description:
      "A full-stack MERN application for managing books with CRUD operations.",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],

    app: "https://bookstore-vwcs.onrender.com/",
    github: "https://github.com/ashagaire/BookStore-MERN-Stack-Project",
  },

  {
    name: "Things To Do",
    image: ThingsToDo,
    description: "A full-stack todo list application in React JavaScript.",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    app: "https://things-to-do-394b5.firebaseapp.com/",
    github: "https://github.com/ashagaire/React-Task-Tracker",
  },
  {
    name: "Tenzies Game ",
    image: Tenzies,
    description: "Single page Tenzies game application in React JavaScript.",

    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    ],
    app: "https://ashagaire.github.io/Tenzies-game/",
    github:
      "https://github.com/ashagaire/React_CodeCamp/tree/new-place/tenzies-game",
  },
  {
    name: "Portfolio WebSite",
    image: Portfolio,
    description: "Personal portfolio website in React TypeScript.",

    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    app: "https://ashagaire.github.io/ReactInfoSite/",
    github: "https://github.com/ashagaire/ReactInfoSite",
  },
];
