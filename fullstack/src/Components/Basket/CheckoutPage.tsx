import "./CheckoutPageStyles.css";
import Navbar from "../NavBar/Navbar";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { Dropdown } from "../ItemPage/Instructions/ItemInstructions";
import Hovertext from "../HoverText/HoverText";
import SwipeButton from "../button/Swipebutton";
import { useCartItem } from "../Utilities/Store";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type checkoutItem = {
  id: number;
  count: number;
};
export default function CheckoutPage() {
  const { localdata: CartItems, Checkoutitems: CountedData } = useCartItem();

  const [localData, setlocalData] = useState<checkoutItem[]>(CountedData);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const DefaultItem: checkoutItem[] = [{ id: 1, count: 1 }];
    if (CountedData) {
      setlocalData(CountedData);
    } else setlocalData(DefaultItem);
  }, [CountedData]);

  useEffect(() => {
    if (CartItems) {
      let total = 0;
      CartItems.map((_item, index) => {
        const iPrice = CartItems.flat(1)[index].price;
        const ICount = localData.flat(1)[index].count;
        total += iPrice * ICount;
      });
      setTotalCost(total);
    }
  }, [CartItems, CountedData, localData]);
  return (
    <>
      <Navbar />
      <div className="checkout-container ">
        <div className="c">
          <div className="checkout-items d-flex flex-column align-items-start ">
            <h3 className="checkout-title ">{"CHECKOUT ITEMS"}</h3>

            <motion.div className="d-flex flex-column ">
              {CartItems.flat(1).map((cart_item, index) => {
                console.log(localData.flat(1));
                const itemCount = localData.flat(1)[index].count;
                const id = localData.flat(1)[index].id;

                return (
                  <>
                    <span key={index}>
                      <CheckoutItem
                        name={cart_item.name}
                        price={cart_item.price}
                        count={itemCount}
                        id={id}
                        image_pub_id={cart_item.image_pub_id}
                      />
                    </span>
                  </>
                );
              })}
            </motion.div>
          </div>
          <div className="payment-wrapper border">
            <div className="payment-container p-5">
              <h3 className="list-item-total">SUB-TOTAL</h3>
              <h4 className="list-item-shipping">*excludes shipping</h4>
              <h3 className="list-item-price m-0">${totalCost}</h3>

              <div className="credit-checkout ">
                <SwipeButton
                  textContent={
                    <Hovertext text="Checkout" offset={1.5}></Hovertext>
                  }
                ></SwipeButton>
              </div>
              <div className="credit-cards-container border mb-5">
                <div className="credit-card"></div>
                <div className="credit-card"></div>
                <div className="credit-card"></div>
                <div className="credit-card"></div>
                <div className="credit-card"></div>
                <div className="credit-card"></div>
                <div className="credit-card"></div>
                <div className="credit-card"></div>
              </div>
              <Dropdown
                id={3}
                collapsedContent="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              eius, illum, corrupti aliquid numquam minus debitis dolore ab
              cupiditate rem quos ducimus eum blanditiis culpa iure, neque ipsam
              
              "
                buttonTitle="SHIPPING INFO"
              ></Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
