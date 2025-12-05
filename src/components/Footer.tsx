"use client";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-400">
      <p>© {new Date().getFullYear()} Kuldeep Kumar | Full Stack Developer</p>

      {/* GitHub Link */}
      <div className="mt-3 flex justify-center">
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          className="text-gray-400 hover:text-blue-400 transition text-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
