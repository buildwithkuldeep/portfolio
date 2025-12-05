"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <Link href="/" className="text-lg font-bold">
          Kuldeep.dev
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className="relative">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`px-2 py-1 ${active ? "text-blue-600 font-semibold" : "text-gray-700"}`}
                >
                  {l.label}
                </motion.span>

                {/* animated underline */}
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-blue-600 rounded"
                    style={{ bottom: -8 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/70 backdrop-blur-sm px-6 py-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-2" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
