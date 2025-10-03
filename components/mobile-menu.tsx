"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="fixed bottom-20 right-5 z-[1000]">
      {/* Floating Button */}
      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-md border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Floating Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 right-0 flex flex-col gap-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 border border-gray-300 dark:border-gray-700"
          >
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-sm font-medium transition",
                    activeSection === link.name
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setOpen(false); // close after click
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
