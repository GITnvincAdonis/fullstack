import { motion } from "framer-motion";
import { useState } from "react";
import "./HoverTextStyles.css";

export default function Hovertext(props: { text: string; offset: number }) {
  const { text, offset } = props;
  const splitText = text.split("").map((char, index) => (
    <span key={index} style={{ whiteSpace: "pre" }}>
      {char}
    </span>
  ));

  const [on, toggleOn] = useState(false);
  return (
    <>
      <span className="d-flex text-span">
        {splitText.map((item, index) => {
          return (
            <motion.div
              onMouseEnter={() => {
                toggleOn(true);
              }}
              onMouseLeave={() => {
                toggleOn(false);
              }}
              className=""
              key={"item" + index}
              animate={on ? { y: `-${offset}rem` } : { y: 0 }}
              transition={{
                delay: (0.2 / text.length) * index,
                duration: 0.3,
              }}
            >
              <div className="top-text-slider">{item}</div>
              <div className="bottom-text-slider">{item}</div>
            </motion.div>
          );
        })}
      </span>
    </>
  );
}
