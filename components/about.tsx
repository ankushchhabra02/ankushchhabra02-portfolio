"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaUserGraduate,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSocketdotio,
  SiRazorpay,
} from "react-icons/si";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.3);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Short bio */}
      <p className="mb-6">
        Hi! I’m <span className="font-medium">Ankush Chhabra</span>, a{" "}
        <span className="font-medium">Full-Stack Developer</span> with hands-on
        experience in building{" "}
        <span className="italic">scalable, performant, and user-friendly</span>{" "}
        applications. During my{" "}
        <span className="font-medium">6-month internship at ExpertBuddy</span>,
        I worked on <span className="font-medium">SEO optimization (SSR)</span>,{" "}
        <span className="font-medium">real-time systems with sockets</span>, and
        achieved <span className="font-medium">90+ Lighthouse scores</span>{" "}
        while building a scalable group lessons booking system.
      </p>

      <p className="mb-6">
        Beyond my internship, I’ve built impactful projects like{" "}
        <span className="font-medium">Yappr</span> (a real-time chat app with{" "}
        <SiSocketdotio className="inline text-gray-600" title="Socket.io" />{" "}
        Socket.io) and <span className="font-medium">LaxmiChitFund</span> (a
        crowdfunding platform with{" "}
        <SiRazorpay className="inline text-blue-600" title="Razorpay" />{" "}
        Razorpay integration). My focus is always on{" "}
        <span className="italic">performance, security, and usability</span>.
      </p>

      <p className="mb-10">
        I’ve solved{" "}
        <span className="font-medium">250+ problems on LeetCode</span>,
        qualified <span className="font-medium">TCS NQT (Java 88.9%)</span>, and
        I’m passionate about building products that balance{" "}
        <span className="italic">speed, scalability, and user experience</span>.
        Currently, I’m open to{" "}
        <span className="font-medium">SDE/Software Engineer roles</span> where I
        can contribute my full-stack expertise while continuing to grow.
      </p>

      {/* Tech stack icons */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-4xl mb-12">
        <FaReact title="React" className="text-sky-500" />
        <SiNextdotjs title="Next.js" className="text-black dark:text-white" />
        <FaNodeJs title="Node.js" className="text-green-600" />
        <SiMongodb title="MongoDB" className="text-green-500" />
        <SiTypescript title="TypeScript" className="text-blue-500" />
        <SiTailwindcss title="Tailwind CSS" className="text-cyan-500" />
        <FaGitAlt title="Git" className="text-orange-500" />
      </div>

      {/* Mini timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
        <motion.div
          className="p-5 rounded-lg bg-white/50 dark:bg-white/10 shadow"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="flex items-center gap-2 font-semibold">
            <FaUserGraduate className="text-indigo-600" /> Education
          </h3>
          <p className="text-sm mt-1">
            B.Tech in <span className="font-medium">Computer Science</span>,
            where I discovered and honed my passion for full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="p-5 rounded-lg bg-white/50 dark:bg-white/10 shadow"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="flex items-center gap-2 font-semibold">
            <FaProjectDiagram className="text-green-600" /> Projects
          </h3>
          <p className="text-sm mt-1">
            Created <span className="font-medium">Yappr</span> (real-time chat)
            and <span className="font-medium">LaxmiChitFund</span> (crowdfunding
            platform) alongside multiple side projects focused on performance &
            usability.
          </p>
        </motion.div>

        <motion.div
          className="p-5 rounded-lg bg-white/50 dark:bg-white/10 shadow"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="flex items-center gap-2 font-semibold">
            <FaLaptopCode className="text-red-600" /> Today
          </h3>
          <p className="text-sm mt-1">
            Solving <span className="font-medium">DSA problems</span>, exploring{" "}
            <span className="font-medium">new technologies</span>, and seeking{" "}
            <span className="font-medium">SDE opportunities</span>.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
