import React from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import LaxmiChitFund from "@/public/laxmichitfund.png";
import Ecommerce from "@/public/ecommerce.png";
import SubscriptionTracker from "@/public/subscriptiontracker.png";
import ExpertBuddy from "@/public/expertbuddy.png";
import Todo from "@/public/todo.png";
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "B.E. in Computer Science and Engineering",
    location: "Chandigarh University, Punjab",
    description:
      "Pursuing a Bachelor's degree with a CGPA of 7.67. Gained strong fundamentals in computer science and hands-on experience through projects, hackathons, and developer communities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Intermediate  (CBSE)",
    location: "Vidhyanjali Academy, Kota",
    description:
      "Completed senior secondary education with 75.8% in the PCM stream. Developed strong analytical and mathematical skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "High School (ICSE)",
    location: "Sacred Heart Hr. Sec. School, Mathura",
    description:
      "Completed high school with 80.4%. Built a solid foundation in science, English, and computer applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2019",
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
