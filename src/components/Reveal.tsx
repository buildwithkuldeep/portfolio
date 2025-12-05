"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      custom={delay}
      initial="hidden"
      animate={controls}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}
