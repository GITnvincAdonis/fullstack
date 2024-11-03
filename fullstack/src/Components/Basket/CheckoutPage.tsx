import "./CheckoutPageStyles.css";
import Navbar from "../NavBar/Navbar";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { Dropdown } from "../ItemPage/Instructions/ItemInstructions";
import Hovertext from "../HoverText/HoverText";
import SwipeButton from "../button/Swipebutton";
import { useCartItem } from "../Utilities/Store";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <div
        className="modal fade "
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="true"
      >
        <div
          className="modal-dialog-scrollable modal-dialog-centered modal-dialog "
          style={{ zIndex: -100 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-2" id="exampleModalLabel">
                IN DEVELOPMENT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              SAAS configuration in development. Project thus far is only a
              proof of concept
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
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
              {CartItems.length === 0 && (
                <div className="empty-cart-placeholder  d-flex flex-column justify-content-center align-items-center">
                  <div className="fs-1">CART EMPTY</div>
                  <div className="mb-4">return to Product page</div>
                  <SwipeButton
                    textContent={
                      <Link to={"/home"}>
                        <h5 className="text-black m-0 p-1 intro-item-button-text">
                          <Hovertext
                            text={"CHECK OUR PRODUCTS"}
                            offset={1.5}
                          ></Hovertext>
                        </h5>
                      </Link>
                    }
                  ></SwipeButton>
                </div>
              )}
            </motion.div>
          </div>
          <div className="payment-wrapper border">
            <div className="payment-container p-5">
              <h3 className="list-item-total">SUB-TOTAL</h3>
              <h4 className="list-item-shipping">*excludes shipping</h4>
              <h3 className="list-item-price m-0">${totalCost}</h3>

              <div className="credit-checkout ">
                <button
                  className="modal-container"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <SwipeButton
                    textContent={
                      <Hovertext text="Checkout" offset={1.5}></Hovertext>
                    }
                  ></SwipeButton>
                </button>
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
