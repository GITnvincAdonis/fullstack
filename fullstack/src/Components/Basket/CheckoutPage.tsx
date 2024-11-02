import "./CheckoutPageStyles.css";
import Navbar from "../NavBar/Navbar";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { Dropdown } from "../ItemPage/Instructions/ItemInstructions";
import Hovertext from "../HoverText/HoverText";
import SwipeButton from "../button/Swipebutton";
import { useCartItem } from "../Utilities/Store";
import { useEffect, useState } from "react";

type checkoutItem = {
  id: number;
  count: number;
};
export default function CheckoutPage() {
  const { localdata: CartItems, Checkoutitems: CountedData } = useCartItem();
  const [localData, setlocalData] = useState<checkoutItem[]>(CountedData);

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
  const [loadedItems, setLoadedItems] = useState(0);
  function incrementLoadedItems() {
    setLoadedItems((prev) => prev + 1);
  }
  return (
    <>
      <Navbar />
      <div className="checkout-container ">
        <div className="c">
          <div className="checkout-items d-flex flex-column ">
            <h3 className="checkout-title ">{"CHECKOUT ITEMS"}</h3>
            {CartItems.length > 0 && loadedItems != CartItems.length && (
              <>
                <Itemplaceholder />
                <Itemplaceholder />
                <Itemplaceholder />
                <Itemplaceholder />
              </>
            )}
            {loadedItems == CartItems.length &&
              CartItems.flat(1).map((cart_item, index) => {
                console.log(localData.flat(1));
                console.log(localData.flat(1)[index].count);
                const id = localData.flat(1)[index].id;

                return (
                  <>
                    <span key={index}>
                      <CheckoutItem
                        image_fn={incrementLoadedItems}
                        name={cart_item.name}
                        price={cart_item.price}
                        count={localData.flat(1)[index].count}
                        id={id}
                        image_pub_id={cart_item.image_pub_id}
                      />
                    </span>
                  </>
                );
              })}
          </div>
          <div className="payment-wrapper">
            <div className="payment-container border p-5">
              <h3 className="list-item-total">SUB-TOTAL</h3>
              <h4 className="list-item-shipping">*excludes shipping</h4>
              <h3 className="list-item-price m-0">$---,---,---</h3>

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
const Itemplaceholder = () => {
  return (
    <>
      <div className="d-flex placeholder-container">
        {" "}
        <div className="placeholder placeholder-wave placeholder-image" />
        <div className="placeholder-body d-flex flex-column align-items-start">
          <span className="placeholder placeholder-wave col-12 placeholder-lg lg-place "></span>
          <span className="placeholder placeholder-wave col-12 placeholder-lg lg-place mt-1"></span>
          <span className="placeholder placeholder-wave col-12 placeholder-lg lg-place mt-3"></span>
        </div>
      </div>
    </>
  );
};
