"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey! I'm <span className="font-medium">Ankush Chhabra</span>, a
        passionate{" "}
        <span className="font-medium">Full-Stack MERN Developer</span> who loves
        building <span className="italic">clean, scalable, and performant</span>{" "}
        web applications. I specialize in creating full-stack solutions using{" "}
        <span className="font-medium">
          MongoDB, Express.js, React (Next.js), and Node.js
        </span>
        .
      </p>
      I’ve worked on a variety of projects—from e-commerce platforms to tools
      like a <span className="font-medium">weather app</span> and a{" "}
      <span className="font-medium">subscription tracker API</span>. Whether
      it's designing intuitive frontends or building robust backend APIs,{" "}
      <span className="italic">
        I enjoy bringing ideas to life through code
      </span>
      . While pursuing a degree in{" "}
      <span className="font-medium">Computer Science and Engineering</span>, I
      dove deep into full-stack development and honed my skills through{" "}
      <span className="font-medium">
        real-world projects, hackathons, and certifications
      </span>
      . <span className="italic">My favorite part of programming</span> is
      solving problems and creating smooth user experiences with{" "}
      <span className="italic">efficient and well-structured code</span>.
      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , but I’m also familiar with{" "}
        <span className="font-medium">
          TypeScript, Express.js, Tailwind CSS
        </span>
        , and tools like{" "}
        <span className="font-medium">Postman, Figma, and Git</span>. I'm always
        eager to learn new technologies and best practices to grow as a
        developer.
      </p>
      <p className="mb-3">
        I am currently looking for a{" "}
        <span className="font-medium">
          full-time role as a software developer
        </span>{" "}
        where I can contribute, learn, and build meaningful products.
      </p>
      <p>
        <span className="italic">When I’m not coding</span>, you’ll find me
        exploring new tech trends, sharpening my{" "}
        <span className="font-medium">DSA skills on LeetCode</span>, or engaging
        with <span className="font-medium">developer communities</span> and
        staying connected with fellow tech enthusiasts. I also enjoy listening
        to music, diving into{" "}
        <span className="font-medium">design inspirations</span>, and staying
        curious about the world around me.
      </p>
    </motion.section>
  );
};

export default About;
