import Tenzies from "../assets/tenzies.png";
import BookStore from "../assets/bookstore.png";
import ThingsToDo from "../assets/Thingstodo.png";
import Portfolio from "../assets/portfolio.png";
import ProfileCraft from "../assets/profileCraft.jpeg";

export interface ProjectsProps {
  id: number;
  name: string;
  image: string;
  description: string;
  stack: string[];
  app: string;
  github: string;
}

export const projectsList: ProjectsProps[] = [
  {
    id: 1,
    name: "Profile Craft",
    image: ProfileCraft,
    description: "Portfolio website for cient in React TypeScript.",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    ],
    app: "https://paudelarjun.com.np/",
    github: null,
  },
  {
    id: 2,
    name: "Personal WebSite",
    image: Portfolio,
    description: "Personal portfolio website in React TypeScript.",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    ],
    app: "https://ashagaire.com.np/",
    github: "https://github.com/ashagaire/Personal-Portfolio",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
];
