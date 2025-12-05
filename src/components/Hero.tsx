"use client";

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto text-center pt-32 pb-20 px-4">

      <Reveal>
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 
                        rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.25)]">

          <Reveal>
            <h1 className="text-5xl font-extrabold mb-6">
              Hi, I'm <span className="text-blue-400">Kuldeep Kumar</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xl text-gray-400 mb-8">
              Full Stack Developer • MERN Stack • Next.js • C++
            </p>
          </Reveal>

          <div className="flex justify-center gap-6">
            <Reveal delay={0.25}>
              <a
                href="/projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl 
                           text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              >
                View Projects
              </a>
            </Reveal>

            <Reveal delay={0.35}>
              <a
                href="/contact"
                className="px-6 py-3 border border-gray-600 hover:bg-white/10 
                           rounded-xl transition-all"
              >
                Contact Me
              </a>
            </Reveal>
          </div>

        </div>
      </Reveal>

    </section>
  );
}
