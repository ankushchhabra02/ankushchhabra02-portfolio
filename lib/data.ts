import React from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import LaxmiChitFund from "@/public/laxmichitfund.png";
import Ecommerce from "@/public/ecommerce.png";
import SubscriptionTracker from "@/public/subscriptiontracker.png";
import ExpertBuddy from "@/public/expertbuddy.png";
import Yappr from "@/public/yappr.png";
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
  },
  {
    title: "LaxmiChitFund",
    description:
      "LaxmiChitFund is a modern crowdfunding system built with Next.js, leveraging both client-side and server-side rendering.",
    tags: ["Next.js", "MongoDB", "Tailwind", "Auth.js", "Razorpay API"],
    imageUrl: LaxmiChitFund,
    link: "https://github.com/ankushchhabra02/LaxmiChitFund",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional E-Commerce Website provides users with a seamless shopping experience, including product browsing, cart management.",
    tags: ["React", "Express", "MongoDB", , "Context API", "JWT"],
    imageUrl: Ecommerce,
    link: "https://github.com/ankushchhabra02/e-commerce-frontend",
  },
  {
    title: "Subscription Tracker API",
    description:
      "SubscriptionTracker-API is a secure backend for managing subscriptions with JWT auth, email reminders, and bot protection.",
    tags: ["Node", "Express", "MongoDB", "JWT", "Upstash"],
    imageUrl: SubscriptionTracker,
    link: "https://github.com/ankushchhabra02/SubscriptionTracker-API",
  },

  {
    title: "Expert Buddy",
    description:
      "This project is a Next.js v15-based implementation of a Figma design. It includes responsive UI components built with Tailwind CSS, ShadCN/UI, Mantine, MagicUI, and Headless UI.",
    tags: ["Next.js", "Auth.js", "Tailwind", "ShadCN/UI", "Headless UI"],
    imageUrl: ExpertBuddy,
    link: "https://github.com/ankushchhabra02/nextjs-home-assignment",
  },
] as const;

type Skill = {
  name: string;
  icon: React.ReactNode;
};

export const skillsData: Skill[] = [
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(FaCss3Alt) },
  { name: "JavaScript", icon: React.createElement(FaJs) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "React", icon: React.createElement(FaReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Node.js", icon: React.createElement(FaNodeJs) },
  { name: "Express.js", icon: React.createElement(SiExpress) },
  { name: "Redux", icon: React.createElement(SiRedux) },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
  { name: "MongoDB", icon: React.createElement(SiMongodb) },
  { name: "MySQL", icon: React.createElement(SiMysql) },
  { name: "JWT Auth", icon: React.createElement(SiJsonwebtokens) },
  { name: "Razorpay", icon: React.createElement(SiRazorpay) },
  { name: "Git", icon: React.createElement(FaGitAlt) },
  { name: "Postman", icon: React.createElement(SiPostman) },
  { name: "Figma", icon: React.createElement(FaFigma) },
  { name: "Framer Motion", icon: React.createElement(SiFramer) },
  { name: "Vercel", icon: React.createElement(SiVercel) },
  { name: "Python", icon: React.createElement(FaPython) },
];
