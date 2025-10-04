"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaAward, FaBookOpen } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { IoClose } from "react-icons/io5";

const Achievements = () => {
  const { ref } = useSectionInView("Achievements", 0.6);
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <motion.section
      ref={ref}
      id="achievements"
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Achievements & Research</SectionHeading>

      {/* Grid of Cards */}
      <div className="grid gap-6 sm:grid-cols-2 text-left mt-8">
        {/* LeetCode */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaCode className="text-3xl text-yellow-500" />
            <h3 className="text-xl font-semibold">LeetCode Progress</h3>
          </div>
          <p className="text-gray-700 dark:text-white/70 mt-1">
            Solved <span className="font-medium">250+ problems</span> across
            various topics, regularly participating in contests to sharpen
            problem-solving and algorithmic thinking.
          </p>
          <a
            href="https://leetcode.com/ankushchhabra02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline mt-2 inline-block"
          >
            View Profile →
          </a>
        </motion.div>

        {/* TCS iON NQT Result */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaAward className="text-3xl text-green-500" />
            <h3 className="text-xl font-semibold">TCS iON NQT – IT (2025)</h3>
          </div>
          <p className="text-gray-700 dark:text-white/70 mt-1 text-sm leading-relaxed">
            Strong performance across{" "}
            <span className="font-medium">Numerical, Verbal,</span> and{" "}
            <span className="font-medium">Reasoning Ability</span>.<br />
            Advanced Quantitative & Reasoning:{" "}
            <span className="font-medium">83.28%</span>
            <br />
            Programming & Hands-on (Java):{" "}
            <span className="font-medium">88.93%</span>
          </p>
          <button
            onClick={() => setActivePdf("/achievements/tcs.pdf")}
            className="text-blue-600 dark:text-blue-400 underline mt-2 inline-block"
          >
            View Result →
          </button>
        </motion.div>

        {/* Research Papers */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 shadow hover:shadow-md transition sm:col-span-2"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaBookOpen className="text-3xl text-purple-500" />
            <h3 className="text-xl font-semibold">
              Co-Authored Research Papers
            </h3>
          </div>
          <p className="text-gray-700 dark:text-white/70 mt-1">
            Co-authored two research papers exploring{" "}
            <span className="italic">smart automation systems</span> and{" "}
            <span className="italic">AI-driven biometric security</span>. These
            works integrate deep learning and IoT concepts to address real-world
            challenges in home automation and secure authentication.
          </p>

          <div className="flex gap-3 mt-3 flex-wrap">
            <button
              onClick={() => setActivePdf("/achievements/research1.pdf")}
              className="text-blue-600 dark:text-blue-400 underline text-sm text-left"
            >
              Paper 1: An Integrated Approach to Smart Home Automation —
              Arduino-Based Amazon Alexa Controlled System →
            </button>

            <button
              onClick={() => setActivePdf("/achievements/research2.pdf")}
              className="text-blue-600 dark:text-blue-400 underline text-sm text-left"
            >
              Paper 2: Secure Retinal-Iris Biometric Identification Using Deep
              Learning and Orca Predators Algorithm →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Shared Modal for PDFs */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setActivePdf(null)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                <IoClose size={28} />
              </button>

              <iframe
                src={activePdf}
                title="PDF Viewer"
                className="w-full h-[80vh] rounded-b-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Achievements;
