import { motion } from "framer-motion";

export default function Exitbutton() {
  return (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 2L2 26M2 2L26 26"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
