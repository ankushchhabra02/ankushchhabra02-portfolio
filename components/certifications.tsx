"use client";
import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(certificationsData[0]);
  const [width, setWidth] = useState(0);
  //   const carouselRef = useRef(null);
  const { ref } = useSectionInView("Certifications");

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert((prev) => {
        const currentIndex = certificationsData.findIndex(
          (c) => c.id === prev.id
        );
        const nextIndex = (currentIndex + 1) % certificationsData.length;
        return certificationsData[nextIndex];
      });
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[85rem] scroll-mt-28 px-4 sm:px-0"
    >
      <SectionHeading>My Certifications</SectionHeading>

      {/* Main Certificate Display */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.a
            key={activeCert.id}
            href={activeCert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
          >
            {/* Wrapper div controls size */}
            <div className="max-w-[1200px] mx-auto h-[290px] sm:h-[600px] relative">
              <Image
                src={activeCert.url}
                alt={activeCert.title}
                fill // make Image fill parent
                className="object-contain" // maintain aspect ratio
                priority
              />
            </div>
            {/* <h4 className="text-center text-lg font-semibold p-4">
              {activeCert.title}
            </h4> */}
          </motion.a>
        </AnimatePresence>
      </div>
      {/* Carousel */}
      <motion.div className="mt-6 overflow-hidden" ref={carouselRef}>
        <motion.div
          className="flex gap-4 "
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              className={`flex-shrink-0 p-1 rounded-md border-2 ${
                cert.id === activeCert.id
                  ? "border-blue-500 dark:border-blue-400"
                  : "border-transparent"
              }`}
              onClick={() => setActiveCert(cert)}
            >
              <Image
                src={cert.url}
                alt={cert.title}
                width={160}
                height={80}
                className="object-cover rounded-md w-28 h-16 sm:w-40 sm:h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
