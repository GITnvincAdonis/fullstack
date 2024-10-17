import "./CheckoutPageStyles.css";
import Navbar from "../NavBar/Navbar";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { Dropdown } from "../ItemPage/Instructions/ItemInstructions";
import Hovertext from "../HoverText/HoverText";
import SwipeButton from "../button/Swipebutton";

export default function CheckoutPage() {
  const list = [1, 1, 1, 1];
  return (
    <>
      <Navbar />
      <div className="checkout-container ">
        <div className="c">
          <div className="checkout-items d-flex flex-column ">
            <h3 className="checkout-title ">{"CHECKOUT ITEMS"}</h3>
            {list.map((_item, index) => {
              return (
                <span key={index}>
                  <CheckoutItem />
                </span>
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
