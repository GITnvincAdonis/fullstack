import { motion } from "framer-motion";
import "./SwipeButtonStyles.css";
import { useState } from "react";
export default function SwipeButton(props: { textContent: any }) {
  const { textContent } = props;
  const [onButton, toggleOnState] = useState(false);
  return (
    <>
      <div className="button-wrapper">
        <button
          className="button-container p-0"
          onMouseEnter={() => {
            toggleOnState(true);
          }}
          onMouseLeave={() => {
            toggleOnState(false);
          }}
        >
          <motion.div
            animate={onButton ? { x: "0%" } : { x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="swipe-container d-flex justify-content-center align-items-center"
          >
            <motion.div
              animate={
                onButton ? { borderRadius: "0" } : { borderRadius: "50rem" }
              }
              transition={{ duration: 0.2 }}
              className="swipe-container-mech p-3"
            ></motion.div>
          </motion.div>
          <motion.div className="slide-text m-0 px-3 p-2">
            {textContent}
          </motion.div>
        </button>
      </div>
    </>
  );
}
