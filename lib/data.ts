import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import LaxmiChitFund from "@/public/laxmichitfund.png";
import Ecommerce from "@/public/ecommerce.png";
import SubscriptionTracker from "@/public/subscriptiontracker.png";
import ExpertBuddy from "@/public/expertbuddy.png";
import Todo from "@/public/todo.png";

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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
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
      "SubscriptionTracker-API is a secure, scalable backend for managing user subscriptions. It features JWT auth, email renewal reminders, global error handling, and Arcjet bot protection.",
    tags: ["Node", "Express", "MongoDB", "JWT", "Upstash"],
    imageUrl: SubscriptionTracker,
    link: "https://github.com/ankushchhabra02/SubscriptionTracker-API",
  },
  {
    title: "Todo App",
    description:
      "Todo App is a task management tool built with React and Redux. It allows users to add, edit, and delete tasks with smooth state handling and a clean, responsive UI.",
    tags: ["React", "Redux", "Tailwind", "CRUD"],
    imageUrl: Todo,
    link: "https://github.com/ankushchhabra02/todo-reduxToolkit",
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
