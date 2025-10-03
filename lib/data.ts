import React from "react";
import {
  FaCloud,
  FaCode,
  FaCogs,
  FaDatabase,
  FaJava,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import LaxmiChitFund from "@/public/laxmichitfund.png";
import Ecommerce from "@/public/ecommerce.png";
import SubscriptionTracker from "@/public/subscriptiontracker.png";
import ExpertBuddy from "@/public/expertbuddy.png";
import Yappr from "@/public/yappr.png";
import Aangan from "@/public/aangan.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiPostman,
  SiMysql,
  SiJsonwebtokens,
  SiVercel,
  SiFramer,
  SiRazorpay,
  SiShadcnui,
  SiMaterialdesign,
  SiHeadlessui,
  SiDaisyui,
  SiSocketdotio,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiZod,
  SiAxios,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Frontend Developer Intern",
    location: "Remote – ExpertBuddy",
    description:
      "Built SEO-optimized pages with structured data, dynamic sitemaps, and reusable UI components in Next.js 15 using Tailwind, Shadcn/UI, and Mantine. Improved render performance by 40% and collaborated in Agile teams with Git and daily standups.",
    icon: React.createElement(LuBriefcase),
    date: "May 2025 – Present",
  },
  {
    title: "Frontend Developer (Freelance)",
    location: "Remote – Pichku.com",
    description:
      "Redesigned UI with CSS Grid, Flexbox, and SASS, improving page speed by 20%. Ensured responsive design, accessibility, and consistency across browsers and devices.",
    icon: React.createElement(FaReact),
    date: "Mar 2023 – May 2023",
  },
  {
    title: "B.E. in Computer Science and Engineering",
    location: "Chandigarh University, Punjab",
    description:
      "Graduated with a CGPA of 7.67. Developed strong computer science fundamentals and gained practical experience through projects, hackathons, and developer communities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 – 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Yappr",
    description:
      "Yappr is a real-time chat application built with MERN stack, Socket.io, and Zustand. It features JWT auth, user tracking, themes, and a sleek UI with TailwindCSS + DaisyUI.",
    tags: ["MERN", "Socket.io", "TailwindCSS", "Zustand", "JWT", "Axios"],
    imageUrl: Yappr,
    link: "https://github.com/ankushchhabra02/yappr",
    live: "https://yappr.onrender.com/",
  },
  {
    title: "LaxmiChitFund",
    description:
      "LaxmiChitFund is a modern crowdfunding system built with Next.js, leveraging both client-side and server-side rendering.",
    tags: ["Next.js", "MongoDB", "Tailwind", "Auth.js", "Razorpay API"],
    imageUrl: LaxmiChitFund,
    link: "https://github.com/ankushchhabra02/LaxmiChitFund",
    live: "https://laxmi-chit-fund.vercel.app/",
  },
  {
    title: "Aangan – Real Estate App",
    description:
      "A mobile-first real estate application built with React Native, Expo, and Appwrite. It allows users to browse, search, filter, and favorite properties with a smooth, modern experience.",
    tags: ["React Native", "TypeScript", "Expo", "Tailwind CSS", "Appwrite"],
    imageUrl: Aangan, // import your screenshot or preview image
    link: "https://github.com/ankushchhabra02/Aangan",
    live: "", // optional: if you publish Expo build, you can put the link here
  },
  {
    title: "Subscription Tracker API",
    description:
      "SubscriptionTracker-API is a secure backend for managing subscriptions with JWT auth, email reminders, and bot protection.",
    tags: ["Node", "Express", "MongoDB", "JWT", "Upstash"],
    imageUrl: SubscriptionTracker,
    link: "https://github.com/ankushchhabra02/SubscriptionTracker-API",
    live: "",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional E-Commerce Website provides users with a seamless shopping experience, including product browsing, cart management.",
    tags: ["React", "Express", "MongoDB", , "Context API", "JWT"],
    imageUrl: Ecommerce,
    link: "https://github.com/ankushchhabra02/e-commerce-frontend",
    live: "https://e-commerce-frontend-ten-sigma.vercel.app/",
  },
  {
    title: "Expert Buddy",
    description:
      "This project is a Next.js v15-based implementation of a Figma design. It includes responsive UI components built with Tailwind CSS, ShadCN/UI, Mantine, MagicUI, and Headless UI.",
    tags: ["Next.js", "Auth.js", "Tailwind", "ShadCN/UI", "Headless UI"],
    imageUrl: ExpertBuddy,
    link: "https://github.com/ankushchhabra02/nextjs-home-assignment",
    live: "https://nextjs-home-assignment.vercel.app/",
  },
] as const;

type Skill = {
  name: string;
  icon: React.ReactNode;
};

export const categorizedSkills: Record<
  string,
  { icon: React.ReactNode; skills: Skill[] }
> = {
  "Frontend Frameworks & UI": {
    icon: React.createElement(FaReact),
    skills: [
      { name: "React", icon: React.createElement(FaReact) },
      { name: "Next.js", icon: React.createElement(SiNextdotjs) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
      { name: "React Native", icon: React.createElement(FaReact) },
      { name: "ShadCN", icon: React.createElement(SiShadcnui) },
      { name: "Material UI", icon: React.createElement(SiMaterialdesign) },
      { name: "Headless UI", icon: React.createElement(SiHeadlessui) },
      { name: "DaisyUI", icon: React.createElement(SiDaisyui) },
    ],
  },
  "State Management & Libraries": {
    icon: React.createElement(FaCogs),
    skills: [
      { name: "Redux", icon: React.createElement(SiRedux) },
      { name: "Context API", icon: React.createElement(FaCogs) },
      { name: "Socket.IO", icon: React.createElement(SiSocketdotio) },
      { name: "Framer Motion", icon: React.createElement(SiFramer) },
      { name: "Zod", icon: React.createElement(SiZod) },
      { name: "Axios", icon: React.createElement(SiAxios) },
    ],
  },
  Backend: {
    icon: React.createElement(FaServer),
    skills: [
      { name: "Node.js", icon: React.createElement(FaNodeJs) },
      { name: "Express.js", icon: React.createElement(SiExpress) },
      { name: "JWT Auth", icon: React.createElement(SiJsonwebtokens) },
      { name: "Razorpay", icon: React.createElement(SiRazorpay) },
    ],
  },
  Languages: {
    icon: React.createElement(FaCode),
    skills: [
      { name: "HTML", icon: React.createElement(FaHtml5) },
      { name: "CSS", icon: React.createElement(FaCss3Alt) },
      { name: "JavaScript", icon: React.createElement(FaJs) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "Java", icon: React.createElement(FaJava) },
      { name: "Python", icon: React.createElement(FaPython) },
    ],
  },
  Databases: {
    icon: React.createElement(FaDatabase),
    skills: [
      { name: "MongoDB", icon: React.createElement(SiMongodb) },
      { name: "MySQL", icon: React.createElement(SiMysql) },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
      { name: "Redis", icon: React.createElement(SiRedis) },
      { name: "Firebase", icon: React.createElement(SiFirebase) },
    ],
  },
  "DevOps, Cloud & Tools": {
    icon: React.createElement(FaCloud),
    skills: [
      { name: "Git", icon: React.createElement(FaGitAlt) },
      { name: "Postman", icon: React.createElement(SiPostman) },
      { name: "Figma", icon: React.createElement(FaFigma) },
      { name: "Docker", icon: React.createElement(SiDocker) },
      { name: "CI/CD Pipelines", icon: React.createElement(FaTools) },
      { name: "AWS", icon: React.createElement(SiAmazon) },
      { name: "Vercel", icon: React.createElement(SiVercel) },
    ],
  },
};
export const certificationsData = [
  {
    id: "1",
    title: "IBM Full-Stack Developer Specialization",
    url: "/certificates/IBMFullstackSpecialization.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LCRRFGFKF9X2",
  },
  {
    id: "2",
    title: "Vihaan Hackathon",
    url: "/certificates/Vihaan.png",
    link: "https://certificate.givemycertificate.com/c/5a86f933-c38b-45e1-830b-b608685f39e4",
  },
  {
    id: "3",
    title: "Meta Principles of UX/UI Design",
    url: "/certificates/Meta.png",
    link: "https://www.coursera.org/account/accomplishments/verify/8JT9UAGV2HJ2",
  },
  {
    id: "4",
    title: "Infosys ReactJS Certification",
    url: "/certificates/ReactJS.png",
    // link: "",
  },
  {
    id: "5",
    title: "Infosys Angular Certification",
    url: "/certificates/Angular.png",
    // link: "",
  },
  {
    id: "6",
    title: "Infosys Typescript Certification",
    url: "/certificates/Typescript.png",
    // link: "",
  },
  {
    id: "7",
    title: "Java as a Second Language",
    url: "/certificates/Java.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/XVWAC94FQMFZ",
  },

  // Add more certifications here
];
