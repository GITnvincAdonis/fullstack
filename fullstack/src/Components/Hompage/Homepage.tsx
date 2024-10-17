import "./HomepageStyles.css";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Hovertext from "../HoverText/HoverText";

import SwipeButton from "../button/Swipebutton";

export default function Homepage() {
  return (
    <>
      <div className="starter-background-container">
        <div className="starter-background"></div>
      </div>

      <div className=" d-flex justify-content-end flex-column align-items-center starter-container">
        <h1 className="starter-text text-center ">THE SKINCARE BRAND</h1>
        <h4 className="starter-text text-center">
          we care about giving you the best looking skin
        </h4>
        <SwipeButton
          textContent={
            <h2 className="m-0 p-0 intro-item-button-text">
              <Hovertext text="CHECK OUR PRODUCTS" offset={1.6}></Hovertext>
            </h2>
          }
        ></SwipeButton>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column shopping-option-container">
        <h2 className="option-text">SHOPPING OPTIONS</h2>
        <div className="shopping-options-wrapper d-flex justify-content-center">
          <div className="shopping-options d-flex flex-column justify-content-end align-items-start p-3">
            <h3 className="nav-labels">Single Items</h3>
            <Link to={"/home"}>
              {" "}
              <SwipeButton
                textContent={
                  <Hovertext
                    text="Navigate to Single options"
                    offset={1.6}
                  ></Hovertext>
                }
              ></SwipeButton>
            </Link>
          </div>
          <div className="shopping-options d-flex flex-column justify-content-end align-items-start p-3">
            <h3 className="nav-labels">Skincare Bundles</h3>
            <SwipeButton
              textContent={
                <Hovertext
                  text="Navigate to bundle options"
                  offset={1.6}
                ></Hovertext>
              }
            ></SwipeButton>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
