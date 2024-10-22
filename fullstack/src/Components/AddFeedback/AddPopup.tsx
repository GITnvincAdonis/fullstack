import { motion } from "framer-motion";
import "./AddPopupStyles.css";
import { useEffect } from "react";
import { useAddfeedback } from "../Utilities/Store";

export default function Popup() {
  const FeedbackBool = useAddfeedback((state) => state.isClicked);
  const Cancel = useAddfeedback((state) => state.toggleClickOn);

  useEffect(() => {
    let time: number | undefined;
    if (FeedbackBool) {
      time = setTimeout(() => {
        Cancel(false);
      }, 3000);
    }
    return () => {
      if (time) {
        clearTimeout(time);
        console.log("Timeout cleared");
      }
    };
  }, [FeedbackBool]);

  return (
    <>
      <div className="popup-container">
        <motion.div
          initial={{ y: "0px", opacity: 0 }}
          animate={
            FeedbackBool ? { y: "-50px", opacity: 1 } : { y: "0px", opacity: 0 }
          }
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "anticipate",
            //delay: Number(!FeedbackBool),
          }}
          className="popup-text"
        >
          item was added to cart
          <svg
            className="popup-exit"
            onClick={() => Cancel(false)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 2L2 26M2 2L26 26"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
