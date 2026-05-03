
import hike from "../assets/hobby-hike.jpg";
import lake from "../assets/hobby-lake.jpg";
import bike from "../assets/hobby-bike.jpg";
import BookStore from "../assets/bookstore.png";
import ProfileCraft from "../assets/profileCraft.jpeg";
import ThingsToDo from "../assets/Thingstodo.png";
import Tenzies from "../assets/tenzies.png";

export const site = {
  name: "Asha Gaire",
  initials: "AG",
  role: "Full-stack Developer & UI Designer",
  location: "Espoo, Finland",
  email: "ashagairefi@outlook.com",
  phone: "+358 45 101 5962",
  cvUrl: "/CV_Asha_Gaire.pdf",
  bookingUrl: "https://calendly.com/", // replace with your link
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    medium: "https://medium.com/@ashagaire",
  },
  tagline:
    "I design and build fast, accessible web apps with React, Next.js and .NET — from idea to launch.",
  available: "Available for select projects · 2026",
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  cover: string;
  highlights: string[];
  /** bento span hint */
  size?: "sm" | "md" | "lg";
  /** Short narrative used on the work cards */
  what?: string;
  why?: string[];
  how?: string[];
};

export const projects: Project[] = [
  {
    slug: "helsinki-spice",
    title: "Helsinki Spice",
    year: "2025",
    role: "Design & Full-stack",
    summary: "A restaurant brand brought to life — from Figma sketches to a live Next.js app with admin dashboard.",
    description:
      "A responsive restaurant web app designed in Figma and built with Next.js, TypeScript and Tailwind. Backed by Prisma + PostgreSQL with secure admin authentication and CRUD for menu management.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Material UI", "Prisma", "PostgreSQL", "Vercel"],
    cover:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format&fit=crop",
    highlights: [
      "Designed responsive UI in Figma before development",
      "Built secure admin authentication & menu CRUD",
      "SSR with Next.js for SEO and performance",
      "Deployed on Vercel with PostgreSQL via Prisma",
    ],
    liveUrl: "#",
    size: "lg",
  },
  {
    slug: "recibook",
    title: "Recibook",
    year: "2024",
    role: "Frontend & DB",
    summary: "A cookbook for the modern kitchen — built with an Agile team end-to-end.",
    description:
      "A recipe discovery and cookbook application built in an Agile team. Responsive frontend with Tailwind and Material UI, integrated with PostgreSQL through Prisma.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    cover:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&q=80&auto=format&fit=crop",
    highlights: [
      "Agile team collaboration with shared design system",
      "User-generated content with relational data model",
      "Responsive UI optimised for mobile cooking",
    ],
    liveUrl: "#",
    size: "md",
  },
  {
    slug: "phoneroster",
    title: "PhoneRoster Refactor",
    year: "2026",
    role: "Frontend Developer",
    summary: "Refactored a tangled Next.js codebase into a calm, reusable component system.",
    description:
      "Refactored the PhoneRoster.com frontend with Next.js, TypeScript and Tailwind to improve maintainability and structure.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop",
    highlights: [
      "Consolidated component library for consistency",
      "Improved type safety and developer experience",
      "Shipped new features driven by user feedback",
    ],
    size: "sm",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    year: "2026",
    role: "Design & Build",
    summary: "A single design system that doubles as resume and brand — the site you're on now.",
    description:
      "Designed and built to act as both a resume and a service brand. Unified design tokens, light/dark theme, and motion baked in.",
    stack: ["TanStack Start", "React", "Tailwind v4", "Framer Motion"],
    cover:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=80&auto=format&fit=crop",
    highlights: [
      "Single design-token source eliminates theme drift",
      "Light/dark with system preference + override",
      "SEO-friendly per-route metadata",
    ],
    size: "md",
  },
  {
    slug: "book-store",
    title: "Book Store",
    year: "2023",
    role: "Full-stack Developer",
    summary: "Full-stack MERN application for managing books with CRUD operations.",
    description: "Full-stack MERN application for managing books with CRUD operations.",
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    cover: BookStore,
    highlights: ["CRUD operations", "REST API", "Database management"],
    liveUrl: "https://bookstore-vwcs.onrender.com/",
    repoUrl: "https://github.com/ashagaire/BookStore-MERN-Stack-Project",
    size: "md",
  },
  {
    slug: "profile-craft",
    title: "Profile Craft",
    year: "2023",
    role: "Frontend Developer",
    summary: "Portfolio website for client in React TypeScript.",
    description: "Portfolio website for client in React TypeScript.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
    cover: ProfileCraft,
    highlights: ["Responsive UI", "Client portfolio", "Modern design"],
    liveUrl: "https://paudelarjun.com.np/",
    size: "sm",
  },
  {
    slug: "things-to-do",
    title: "Things To Do",
    year: "2022",
    role: "Full-stack Developer",
    summary: "Full-stack todo list application in React JavaScript.",
    description: "Full-stack todo list application in React JavaScript.",
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase"],
    cover: ThingsToDo,
    highlights: ["Task management", "Real-time updates", "User authentication"],
    liveUrl: "https://things-to-do-394b5.firebaseapp.com/",
    repoUrl: "https://github.com/ashagaire/React-Task-Tracker",
    size: "md",
  },
  {
    slug: "tenzies-game",
    title: "Tenzies Game",
    year: "2022",
    role: "Frontend Developer",
    summary: "Single page Tenzies game application in React JavaScript.",
    description: "Single page Tenzies game application in React JavaScript.",
    stack: ["React", "JavaScript", "CSS3"],
    cover: Tenzies,
    highlights: ["Interactive gameplay", "State management", "CSS animations"],
    liveUrl: "https://ashagaire.github.io/Tenzies-game/",
    repoUrl: "https://github.com/ashagaire/React_CodeCamp/tree/new-place/tenzies-game",
    size: "sm",
  },
];

export const experiences = [
  {
    company: "Nepal Go Association Ry",
    role: "Frontend Developer",
    period: "Feb 2026 – Present",
    bullets: [
      "Refactored PhoneRoster.com frontend using Next.js, TypeScript and Tailwind.",
      "Built reusable UI components and shipped new user-driven features.",
    ],
  },
  {
    company: "Codecontrol Oy",
    role: "Full-Stack Developer Trainee",
    period: "Aug 2024 – Jan 2025",
    bullets: [
      "Built responsive UIs from Figma using React, TypeScript and Tailwind.",
      "Implemented backend with .NET and Entity Framework Core.",
      "Integrated REST APIs with PostgreSQL.",
    ],
  },
  {
    company: "BearIT Oy",
    role: "Software Developer Trainee",
    period: "Mar 2024 – Nov 2024",
    bullets: [
      "Worked in an Agile team on an electricity pricing system.",
      "Used Python for prediction models; learned Git workflows.",
    ],
  },
  {
    company: "Tuspe Design Oy",
    role: "Frontend Developer Intern",
    period: "Feb 2024 – Mar 2024",
    bullets: [
      "Frontend development using SvelteKit and Tailwind CSS.",
    ],
  },
  {
    company: "SAMK Pori",
    role: "Research Internship",
    period: "Aug 2023 – Jan 2024",
    bullets: [
      "Data analysis and implementing machine learning models in synthetic LIBS datasets.",
      "Designing web apps in ReactJS.",
    ],
  },
  {
    company: "Freelance",
    role: "Technical Documentation (Python)",
    period: "Mar 2020 – Oct 2020",
    bullets: [
      "Major contribution in chapters \"Data Wrangling\" and \"Model Development and Evaluation\".",
      "Published in \"Hands-On Exploratory Data Analysis with Python eBook\" by Packt Publication.",
    ],
  },
  {
    company: "SoftEdge Nepal",
    role: "Web Developer",
    period: "Apr 2019 – Jan 2020",
    bullets: [
      "Developed web apps with ASP.NET.",
      "Implemented CRUD with PostgreSQL.",
    ],
  },
];

export const education = [
  {
    school: "Hive Helsinki",
    program: "Software Engineering Program",
    period: "2026 – 2027",
    location: "Helsinki, Finland",
    featured: true,
  },
  {
    school: "Aalto University (Open Studies)",
    program: "Web Software Development, WWW Applications",
    period: "2025",
    location: "Espoo, Finland",
  },
  {
    school: "Tribhuvan University",
    program: "B.Sc. Computer Science & Information Technology",
    period: "2014 – 2019",
    location: "Nepal",
  },
];

/** Tools as a constellation: grouped by category, with positions for the SVG layout. */
export type Tool = { name: string; icon: string; group: "frontend" | "backend" | "design" | "tools" };
export const tools: Tool[] = [
  { name: "TypeScript", icon: "typescript/typescript-original.svg", group: "frontend" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg", group: "frontend" },
  { name: "React", icon: "react/react-original.svg", group: "frontend" },
  { name: "Next.js", icon: "nextjs/nextjs-original.svg", group: "frontend" },
  { name: "Svelte", icon: "svelte/svelte-original.svg", group: "frontend" },
  { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg", group: "frontend" },
  { name: "Material UI", icon: "materialui/materialui-original.svg", group: "frontend" },
  { name: "HTML5", icon: "html5/html5-original.svg", group: "frontend" },
  { name: "CSS3", icon: "css3/css3-original.svg", group: "frontend" },
  { name: ".NET", icon: "dot-net/dot-net-original.svg", group: "backend" },
  { name: "C#", icon: "csharp/csharp-original.svg", group: "backend" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg", group: "backend" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg", group: "backend" },
  { name: "Prisma", icon: "prisma/prisma-original.svg", group: "backend" },
  { name: "Python", icon: "python/python-original.svg", group: "backend" },
  { name: "Figma", icon: "figma/figma-original.svg", group: "design" },
  { name: "Canva", icon: "canva/canva-original.svg", group: "design" },
  { name: "Docker", icon: "docker/docker-original.svg", group: "tools" },
  { name: "Git", icon: "git/git-original.svg", group: "tools" },
  { name: "GitHub", icon: "github/github-original.svg", group: "tools" },
  { name: "VS Code", icon: "vscode/vscode-original.svg", group: "tools" },
  { name: "Vercel", icon: "vercel/vercel-original.svg", group: "tools" },
  { name: "Firebase", icon: "firebase/firebase-plain.svg", group: "tools" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Nepali", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "Finnish", level: "B1" },
];

export const services = [
  {
    slug: "web-development",
    title: "Marketing Sites that Convert",
    tagline: "A focused web presence that earns clicks and tells your story clearly.",
    duration: "1–2 weeks",
    deliverables: [
      "Discovery + Figma design",
      "Responsive Next.js / React build",
      "SEO basics + analytics",
      "Domain & deployment",
      "30 days post-launch support",
    ],
    notIncluded: ["Heavy e-commerce", "Custom CMS"],
  },
  {
    slug: "web-application",
    title: "Full-stack Product MVPs",
    tagline: "From an idea on a napkin to a live product with auth, database and admin.",
    duration: "3–6 weeks",
    deliverables: [
      "Discovery & scope workshop",
      "End-to-end design in Figma",
      "Next.js + .NET / Node backend",
      "PostgreSQL & authentication",
      "Admin dashboard & deployment",
      "60 days post-launch support",
    ],
    notIncluded: ["Native mobile apps"],
  },
  {
    slug: "ux-design",
    title: "Design Sprints & Systems",
    tagline: "A short, intense week to ship a polished interface and a system you can grow into.",
    duration: "1 week",
    deliverables: [
      "Brand & component tokens",
      "Up to 8 screens in Figma",
      "Interactive prototype",
      "Design handoff for developers",
    ],
    notIncluded: ["Implementation (offered separately)"],
  },
];

/** Medium articles written ~2017–2018 around ML & data science. */
export const articles = [
  {
    title: "Getting started with Linear Regression in Python",
    excerpt: "A gentle, practical intro to linear regression with scikit-learn — built for curious beginners.",
    date: "2018-03-14",
    tag: "Machine Learning",
    href: "https://medium.com/@ashagaire",
  },
  {
    title: "K-Means Clustering, explained with a small dataset",
    excerpt: "Walking through K-Means step by step with a tiny dataset and Matplotlib visualisations.",
    date: "2018-01-22",
    tag: "Data Science",
    href: "https://medium.com/@ashagaire",
  },
  {
    title: "Why I started writing about data science",
    excerpt: "A note from 2017 — long before ChatGPT — on learning in public and sharing notes as you go.",
    date: "2017-11-06",
    tag: "Notes",
    href: "https://medium.com/@ashagaire",
  },
];


export const hobbies = {
  blurb:
    "When I'm offline, I'm usually outside — long forest walks around Espoo, weekend hikes, and slow bike rides by the lakes. The Finnish outdoors is my reset button between deep work sessions.",
  images: [
    { src: hike, alt: "Hiking through a Finnish forest at golden hour", caption: "Trail running, Nuuksio" },
    { src: lake, alt: "Misty Nordic lake at dawn", caption: "Quiet mornings by the lake" },
    { src: bike, alt: "Bike resting on a wooden forest bridge", caption: "Weekend rides" },
  ],
};

/** Kept for back-compat with skills.tsx if used elsewhere. */
export const skills = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Material UI"],
  Backend: [".NET", "ASP.NET", "Entity Framework Core", "PostgreSQL", "Prisma"],
  Design: ["Figma", "Canva", "Design Systems"],
  Tools: ["GitHub", "Docker", "Vercel", "Firebase", "Agile"],
};

/** Kept for back-compat with notes/blog routes. */
export const posts = [
  {
    slug: "designing-for-developer-credibility",
    title: "Designing a portfolio that reads as both resume and brand",
    excerpt:
      "How I rebuilt my portfolio with a single design system to fix the inconsistent-theme problem once and for all.",
    date: "2026-05-01",
    readingMinutes: 5,
    body: "When my portfolio started looking like a patchwork of UI libraries, I knew the problem wasn't visual — it was structural.",
  },
  {
    slug: "from-figma-to-nextjs-without-friction",
    title: "From Figma to Next.js without the handoff friction",
    excerpt:
      "A small workflow that keeps design tokens, components and code in sync as the project grows.",
    date: "2026-04-12",
    readingMinutes: 4,
    body: "The biggest cost in design-to-code isn't pixels — it's drift.",
  },
];
