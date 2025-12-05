"use client";

import { motion } from "framer-motion";

export default function Stagger({
  children,
  delay = 0.15,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
