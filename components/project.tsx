"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  live,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 xl:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 dark:bg-white/10 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative xl:h-[20rem] hover:bg-gray-200 dark:hover:bg-white/20 transition">
        {/* Mobile: image on top */}
        <div className="block xl:hidden">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="w-full h-60 object-cover rounded-t-lg shadow-2xl mb-4 "
          />
        </div>

        <div className="pt-4 pb-7 px-5 xl:pt-10 xl:pl-10 xl:pr-2 xl:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 xl:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Minimal Links */}
          <div className="mt-4 flex gap-3 items-center">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 underline"
              >
                <FiExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-800 dark:text-gray-300 underline"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Desktop: Image always on right */}
        <div
          className="hidden xl:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2"
        >
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="w-full h-auto rounded-t-lg"
          />
        </div>
      </section>
    </motion.div>
  );
}
