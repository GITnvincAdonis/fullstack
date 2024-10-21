import "./Slider.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import QuantityController from "../../SVGs/QuantityController";
import { useMenuContext } from "../../Contexts/Contexts";
import Exitbutton from "../../SVGs/Exit";
import Hovertext from "../../HoverText/HoverText";
import SwipeButton from "../../button/Swipebutton";
import { useCheckoutData } from "../../Utilities/Store";
import { useMutation, useQueries } from "@tanstack/react-query";
import { GetAnItem } from "../../APIs";
interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
}

export default function Slider(props: { toggle: any }) {
  const { toggle } = props;
  const menuinView = useMenuContext();

  const [visible, toggleVisible] = useState(true);

  const Checkoutitems = useCheckoutData((state) => state.fdata);
  const CheckoutCount = useCheckoutData((state) => state.fdata_count);

  const AddToCart = useCheckoutData((state) => state.incrementAsync);
  const Decrement = useCheckoutData((state) => state.decrement);

  useEffect(() => {
    const unsubscribe = useCheckoutData.subscribe((state, prevState) => {
      if (prevState.fdata_count != state.fdata_count) {
        console.log(
          `previous State: ${prevState.fdata_count}, current State: ${state.fdata_count}`
        );
        updateCart();
        console.log(data);
      }
    });

    // Return a cleanup function that calls unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);


  
  const Newqueries = useQueries({
    queries: Checkoutitems.map((item) => ({
      queryFn: () => GetAnItem(item.id),
      queryKey: ["item", item.id],
      staleTime: Infinity,
    })),
  });

  const { mutateAsync: updateCart } = useMutation({
    mutationFn: async () => console.log("mutated"),
    mutationKey: ["item"],
  });

  const isLoading = Newqueries.some((query) => query.isLoading);
  const isError = Newqueries.some((query) => query.isError);
  const data = Newqueries.map((query) => query.data).filter(
    Boolean
  ) as itemInfo[];

  // Use specific state variables as dependencies, not the whole `queries` object
  if (isLoading) console.log("some things are loading");
  if (isError) console.log("error somewhere");
  if (!isError && data) console.log(data);










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
          <span>
            <div>item count: {CheckoutCount}</div>
            {Checkoutitems.map((item) => {
              return (
                <>
                  <div>
                    id: {item.id}/ id count: {item.count}
                  </div>
                </>
              );
            })}
          </span>
          <button
            onClick={() => {
              AddToCart(2);
            }}
          >
            increment id 2
          </button>
          <button
            onClick={() => {
              Decrement(2);
            }}
          >
            decrement id 2
          </button>
          <button
            onClick={() => {
              AddToCart(3);
            }}
          >
            increment id 3
          </button>
          <button
            onClick={() => {
              Decrement(3);
            }}
          >
            decrement id 3
          </button>
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
            <SliderItem name={"wa"} price={1}></SliderItem>
            <SliderItem name={"wa"} price={1}></SliderItem>;
            <SliderItem name={"wa"} price={1}></SliderItem>;
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

const SliderItem = (props: { name: string; price: number }) => {
  const { name, price } = props;
  return (
    <div className="d-flex py-2">
      <QuantityController></QuantityController>
      <div className="ms-3">
        <h3 className="slider-item-name">{name}</h3>
        <h3 className="slider-item-price">${price}</h3>
      </div>
    </div>
  );
};
