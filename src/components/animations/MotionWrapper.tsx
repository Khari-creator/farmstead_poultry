"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function MotionWrapper({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}