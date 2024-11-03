import "./Slider.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import QuantityController from "../../SVGs/QuantityController";
import { useMenuContext } from "../../Contexts/Contexts";
import Exitbutton from "../../SVGs/Exit";
import Hovertext from "../../HoverText/HoverText";
import SwipeButton from "../../button/Swipebutton";
import { useCartItem } from "../../Utilities/Store";

type checkoutItem = {
  id: number;
  count: number;
};
export default function Slider(props: { toggle: any }) {
  const { toggle } = props;
  const menuinView = useMenuContext();
  const [visible, toggleVisible] = useState(true);

  const { localdata: CartItems, Checkoutitems: CountedData } = useCartItem();
  const [localData, setlocalData] = useState<checkoutItem[]>(CountedData);

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const DefaultItem: checkoutItem[] = [
      {
        id: 1,
        count: 1,
      },
    ];

    if (CountedData) {
      setlocalData(CountedData);
    } else setlocalData(DefaultItem);
  }, [CountedData]);

  useEffect(() => {
    if (CartItems) {
      let total = 0;
      console.log(CartItems.length);
      CartItems.map((_item, index) => {
        const iPrice = CartItems.flat(1)[index].price;
        const ICount = localData.flat(1)[index].count;
        console.log("item total");
        console.log(iPrice * ICount);
        total += iPrice * ICount;
      });
      setTotalCost(total);
    }
  }, [CartItems, CountedData]);

  return (
    <>
      <motion.div
        initial={{ x: "200%" }}
        animate={menuinView ? { x: 0 } : { x: "200%" }}
        transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
        className="slider-mega-container"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.51 * Number(visible),
            delay: 0.01 * Number(visible),
          }}
          className="slider-tint"
        ></motion.div>

        <motion.div
          initial={{ borderRadius: "190%", scaleX: 3 }}
          animate={
            menuinView
              ? { borderRadius: "0%", scaleX: 1 }
              : { borderRadius: "190%", scaleX: 3 }
          }
          onAnimationStart={() => toggleVisible(false)}
          onAnimationComplete={() => toggleVisible(true)}
          transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
          className="slider-container"
        >
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

            {CartItems.flat(1).map((cart_item, index) => {
              //console.log(localData.flat(1));
              //console.log(localData.flat(1)[index].count);
              const id = localData.flat(1)[index].id;

              //console.log(localData.flat(1)[index].count * cart_item.price);
              return (
                <>
                  <SliderItem
                    count={localData.flat(1)[index].count}
                    id={id}
                    name={cart_item.name}
                    price={cart_item.price}
                  ></SliderItem>
                </>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="d-flex justify-content-around slider-bottom-container"
          >
            <div>
              <h3 className="slider-item-total">SUB-TOTAL</h3>
              <h3 className="slider-item-price m-0">${totalCost}</h3>
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
      </motion.div>
    </>
  );
}

const SliderItem = (props: {
  name: string;
  price: number;
  id: number;
  count: number;
}) => {
  const { name, price, id, count } = props;

  return (
    <div className="d-flex py-2">
      <QuantityController id={id} count={count}></QuantityController>

      <div className="ms-3">
        <h3 className="slider-item-name">{name}</h3>
        <h3 className="slider-item-price">${price}</h3>
      </div>
    </div>
  );
};
