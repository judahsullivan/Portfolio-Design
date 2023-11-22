import { motion } from "framer-motion";
import { useEffect } from "react";

export default function MouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <motion.path
          initial={{
            y: -35,
          }}
          animate={{
            y: 35,
          }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
          }}
          d="M12 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z"
        />
        <motion.path
          fill-rule="evenodd"
          d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0V8Zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0Z"
          clip-rule="evenodd"
        />
      </g>
    </svg>
  );
}
