"use client";

import Reveal from "../../components/Reveal";
import Stagger from "../../components/Stagger";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <div className="relative">

      {/* Soft Background */}
      <div className="absolute inset-0 bg-linear-to-b
from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-28 relative z-10 text-white">

        {/* Title */}
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 text-center max-w-xl mx-auto mb-16">
            A selection of applications I’ve built using MERN, Next.js, clean UI, and modern web architecture.
          </p>
        </Reveal>

        {/* TWO-COLUMN GRID */}
        <Stagger>
          <div className="grid md:grid-cols-2 gap-10">

            <ProjectCard
              title="Task Manager App"
              desc="Full MERN stack task manager with authentication, CRUD, and modern UI."
              image="/project-placeholder.png"
              url="#"
            />

            <ProjectCard
              title="Authentication System"
              desc="JWT auth backend using Node.js, Express, MongoDB, and secure hashing."
              image="/project-placeholder.png"
              url="#"
            />

            <ProjectCard
              title="URL Shortener"
              desc="A Node.js + MongoDB URL shortener with QR code support and analytics."
              image="/project-placeholder.png"
              url="#"
            />

            <ProjectCard
              title="Portfolio Website"
              desc="A modern developer portfolio built with Next.js, Tailwind v4, and Framer Motion."
              image="/project-placeholder.png"
              url="#"
            />

          </div>
        </Stagger>

      </div>
    </div>
  );
}
