"use client";

import Reveal from "../../components/Reveal";
import Stagger from "../../components/Stagger";
import SkillCard from "../../components/SkillCard";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-28 px-6 text-white">

      {/* Profile Section */}
      <Reveal>
        <div className="flex flex-col items-center text-center mb-16">

          {/* Avatar */}
          <div className="
            w-40 h-40 rounded-full overflow-hidden mb-6
            border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.5)]
          ">
            <img
              src="https://avatars.githubusercontent.com/u/000000?v=4"
              alt="Kuldeep Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-extrabold mb-2">
            Kuldeep Kumar
          </h1>

          <p className="text-gray-300 max-w-xl">
            Full Stack Developer specializing in MERN Stack & Next.js.
            Passionate about building modern, fast, and beautiful applications.
          </p>
        </div>
      </Reveal>

      {/* Social Links */}
      <Reveal>
        <div className="flex justify-center gap-6 text-3xl mb-20">

          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kdk@example.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>
      </Reveal>

      {/* Stats Section */}
      <Stagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          <div className="
            bg-white/10 backdrop-blur-xl 
            border border-white/15 
            p-6 rounded-2xl text-center
          ">
            <h2 className="text-4xl font-bold text-blue-400">12+</h2>
            <p className="text-gray-300 mt-2">Completed Projects</p>
          </div>

          <div className="
            bg-white/10 backdrop-blur-xl 
            border border-white/15 
            p-6 rounded-2xl text-center
          ">
            <h2 className="text-4xl font-bold text-blue-400">2+</h2>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>

          <div className="
            bg-white/10 backdrop-blur-xl 
            border border-white/15 
            p-6 rounded-2xl text-center
          ">
            <h2 className="text-4xl font-bold text-blue-400">8+</h2>
            <p className="text-gray-300 mt-2">Technologies Mastered</p>
          </div>

        </div>
      </Stagger>

      {/* Two Column Intro */}
      <div className="grid md:grid-cols-2 gap-10">

        <Reveal>
          <div className="
            bg-white/10 backdrop-blur-xl 
            border border-white/15 
            rounded-2xl p-8 
          ">
            <h2 className="text-2xl font-semibold mb-3">Who Am I?</h2>
            <p className="text-gray-300 leading-relaxed">
              I am <span className="text-blue-400 font-semibold">Kuldeep Kumar</span>,
              a passionate Full Stack Developer who loves building elegant,
              high-performance applications.  
              I focus on MERN Stack & Next.js.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="
            bg-white/10 backdrop-blur-xl 
            border border-white/15 
            rounded-2xl p-8 
          ">
            <h2 className="text-2xl font-semibold mb-3">What I Do?</h2>
            <p className="text-gray-300 leading-relaxed">
              I create modern frontends with React + Tailwind and build powerful
              backend systems using Node.js, Express, and MongoDB, enhanced with
              clean UI design and animations.
            </p>
          </div>
        </Reveal>

      </div>

      {/* Skills Title */}
      <Reveal>
        <h2 className="text-3xl font-bold mt-20 mb-10 text-center">
          Skills
        </h2>
      </Reveal>

      {/* Skills Grid */}
      <Stagger>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          <SkillCard skill="React.js" />
          <SkillCard skill="Next.js" />
          <SkillCard skill="Node.js" />
          <SkillCard skill="MongoDB" />
          <SkillCard skill="C++" />
          <SkillCard skill="Tailwind CSS" />
          <SkillCard skill="JavaScript" />
          <SkillCard skill="Git & GitHub" />
          <SkillCard skill="Framer Motion" />
        </div>
      </Stagger>

    </div>
  );
}
