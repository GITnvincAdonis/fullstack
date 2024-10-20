import "./Slider.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import QuantityController from "../../SVGs/QuantityController";
import { useMenuContext } from "../../Contexts/Contexts";
import Exitbutton from "../../SVGs/Exit";
import Hovertext from "../../HoverText/HoverText";
import SwipeButton from "../../button/Swipebutton";
import { CheckOutDataContainer } from "../../Utilities/CheckoutObject";

export default function Slider(props: { toggle: any }) {
  const { toggle } = props;
  const menuinView = useMenuContext();

  const [visible, toggleVisible] = useState(true);

  console.log(CheckOutDataContainer());

  return (
    <>
      <div className="slider-mega-container">
        <motion.div
          initial={{ x: "200%", borderRadius: "190%", scaleX: 3 }}
          animate={
            menuinView
              ? { x: 0, borderRadius: "0%", scaleX: 1 }
              : { x: "200%", borderRadius: "190%", scaleX: 3 }
          }
          onAnimationStart={() => {
            toggleVisible(false);
          }}
          onAnimationComplete={() => {
            toggleVisible(true);
          }}
          transition={{
            duration: 0.71,
            type: "tween",
            ease: "easeInOut",
          }}
          className="slider-container "
        >
          <button onClick={() => {}}>ada</button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="slider-title d-flex justify-content-between">
              Checkout Items{" "}
              <div onClick={() => toggle(!menuinView)} className="mx-4">
                <Exitbutton></Exitbutton>
              </div>
            </h2>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="d-flex justify-content-around slider-bottom-container"
          >
            <div>
              <h3 className="slider-item-total">SUB-TOTAL</h3>
              <h3 className="slider-item-price m-0">$---,---,---</h3>
            </div>
            <Link to="/Checkout">
              <SwipeButton
                textContent={
                  <Hovertext text="Go to Checkout" offset={1.5}></Hovertext>
                }
              ></SwipeButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

const SliderItem = () => {
  return (
    <div className="d-flex py-2">
      <QuantityController></QuantityController>
      <div className="ms-3">
        <h3 className="slider-item-name">Item Name.....</h3>
        <h3 className="slider-item-price">$---,---,---</h3>
      </div>
    </div>
  );
};
