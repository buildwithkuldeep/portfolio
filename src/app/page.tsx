"use client";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
                      bg-blue-600/20 blur-[180px] rounded-full pointer-events-none" />

      {/* Hero Container */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-32 text-center text-white">

        <Reveal>
          <motion.div
            className="
              backdrop-blur-2xl bg-white/5 border border-white/15 
              rounded-3xl p-14 md:p-16 shadow-[0_0_60px_rgba(0,0,0,0.4)]
            "
          >
            {/* Small Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-300 mb-4"
            >
              Welcome to my world 👋
            </motion.p>

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(66,153,225,0.6)]">
                Kuldeep Kumar
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 mt-6 text-lg md:text-xl"
            >
              Full Stack Developer • MERN Stack • Next.js • C++
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex justify-center gap-4 mt-10"
            >
              <a
                href="/projects"
                className="
                  px-7 py-3 rounded-xl text-white font-semibold
                  bg-blue-600 hover:bg-blue-700 
                  shadow-[0_0_25px_rgba(59,130,246,0.6)]
                  transition-all
                "
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="
                  px-7 py-3 rounded-xl font-semibold text-white
                  border border-white/25 hover:bg-white/10
                  transition-all
                "
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </Reveal>

      </section>
    </div>
  );
}
