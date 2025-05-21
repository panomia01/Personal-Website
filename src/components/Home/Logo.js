import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 pt-[20px]">
      <MotionLink
        href="/"
        className="flex items-center justify-center px-4 py-1 text-xl font-bold text-black dark:text-white border-2 border-cyan-400 rounded-full shadow-md hover:shadow-cyan-400 hover:scale-105 transition-all duration-300"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 12px rgba(34,211,238,0.7)", // cyan glow
          transition: { duration: 0.3 },
        }}
      >
        Zhan Wen
      </MotionLink>
    </div>
  );
};

export default Logo;
