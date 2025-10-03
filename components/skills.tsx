"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { categorizedSkills } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[85rem] scroll-mt-28 px-4 sm:px-0"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {Object.entries(categorizedSkills).map(
          ([category, { icon, skills }]) => (
            <div
              key={category}
              className="bg-gray-100 dark:bg-white/10 rounded-xl p-6 shadow-lg"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">{icon}</span> {category}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 rounded-xl flex items-center gap-2 text-sm"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
