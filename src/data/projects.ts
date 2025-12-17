import Tenzies from "../assets/tenzies.png";
import BookStore from "../assets/bookstore.png";
import ThingsToDo from "../assets/Thingstodo.png";
import Portfolio from "../assets/portfolio.png";
import ProfileCraft from "../assets/profileCraft.jpeg";
import Recibook from "../assets/Recibook.png";
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
    name: "Recibook",
    image: Recibook,
    description: "recipeAppDiscription",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    ],
    app: "https://recibook-rho.vercel.app/",
    github: null,
  },
  {
    id: 2,
    name: "Book Store ",
    image: BookStore,
    description: "bookStoreAppDiscription",
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
    id: 3,
    name: "Profile Craft",
    image: ProfileCraft,
    description: "portfolioWebsitForClient",
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
    id: 4,
    name: "Personal WebSite",
    image: Portfolio,
    description: "personalPrtfolioWebsite",
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
    id: 5,
    name: "Things To Do",
    image: ThingsToDo,
    description: "thingsToDoProjectExplanation",
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
    id: 6,
    name: "Tenzies Game ",
    image: Tenzies,
    description: "tenziesGameProjectExplanation",
    stack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    ],
    app: "https://ashagaire.github.io/Tenzies-game/",
    github:
      "https://github.com/ashagaire/React_CodeCamp/tree/new-place/tenzies-game",
  },

  // {
  //   id: 7,
  //   name: "Discussion Forum",
  //   image: null,
  //   description: "discussionForumProjectExplanation",

  //   stack: [
  // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  // "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  // https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg,
  // https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg,
  // https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg

  //   ],
  //   app: null,
  //   github: "https://github.com/ashagaire/Course-discussion-forum",
  // },
  // {
  //   id: 8,
  //   name: "Kojh ",
  //   image: null,
  //   description: "kojhProjectExplanation",

  //   stack: [
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg",
  //     "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  //   ],
  //   app: null,
  //   github: "https://github.com/ashagaire/Kojh",
  // },
];
