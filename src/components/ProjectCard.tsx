"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function ProjectCard({
  title,
  desc,
  image,
  url,
}: {
  title: string;
  desc: string;
  image?: string;
  url?: string;
}) {
  return (
    <Reveal>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.25 }}
        className="
          bg-white/10 backdrop-blur-xl 
          border border-white/10 
          rounded-2xl overflow-hidden
          shadow-[0_0_25px_rgba(0,0,0,0.25)]
          hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
          transition-all duration-300
        "
      >
        {/* Image */}
        {image && (
          <div className="h-40 w-full overflow-hidden bg-black/20">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-all duration-500"
            />
          </div>
        )}

        {/* Text */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            {desc}
          </p>

          <a
            href={url || "#"}
            target="_blank"
            className="
              inline-block px-5 py-2 rounded-lg
              bg-blue-600 hover:bg-blue-700
              text-white font-medium text-sm shadow-md
            "
          >
            View Project
          </a>
        </div>
      </motion.div>
    </Reveal>
  );
}
