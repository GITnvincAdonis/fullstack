import "./HomepageStyles.css";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Hovertext from "../HoverText/HoverText";

import SwipeButton from "../button/Swipebutton";
import { CImage } from "../Cloudinary/CloudinaryAssets";

export default function Homepage() {
  return (
    <>
      <div className="starter-background-container">
        <div className="starter-background">
          <CImage
            classNames={"b-cloud-image"}
            CloudinaryImageID="swrod2asmee1xk6hmpgp"
          ></CImage>
        </div>
      </div>

      <div className=" d-flex justify-content-end flex-column align-items-center starter-container">
        <h1 className="starter-text text-center ">THE SKINCARE BRAND</h1>
        <h4 className="starter-text text-center">
          we care about giving you the best looking skin
        </h4>
        <SwipeButton
          textContent={
            <Link to={"/home"}>
              <h2 className="m-0 p-0 intro-item-button-text">
                <Hovertext text="CHECK OUR PRODUCTS" offset={1.6}></Hovertext>
              </h2>
            </Link>
          }
        ></SwipeButton>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column shopping-option-container">
        <h2 className="option-text">SHOPPING OPTIONS</h2>
        <div className="shopping-options-wrapper d-flex justify-content-center">
          <div className="card text-bg-dark shopping-options">
            <CImage CloudinaryImageID="libs4amozqfjmwsp9xjc"></CImage>
            <div className="card-img-overlay d-flex align-items-end">
              <div>
                <h3 className=" card-title nav-labels text-white">
                  Single Items
                </h3>
                <Link to={"/home"} className="">
                  {" "}
                  <SwipeButton
                    textContent={
                      <h5 className="text-white p-0 m-0 swipe-button">
                        <Hovertext
                          text="Navigate to Single options"
                          offset={1.6}
                        ></Hovertext>
                      </h5>
                    }
                  ></SwipeButton>
                </Link>
              </div>
            </div>
          </div>
          <div className="card text-bg-dark shopping-options">
            <CImage CloudinaryImageID="v5eqwsliso9oehkixe0t"></CImage>
            <div className="card-img-overlay d-flex align-items-end">
              <div>
                <h3 className="nav-labels text-white">Skincare Bundles</h3>
                <SwipeButton
                  textContent={
                    <h5 className="p-0 m-0 text-white swipe-button">
                      <Hovertext
                        text="Navigate to bundle options"
                        offset={1.6}
                      ></Hovertext>
                    </h5>
                  }
                ></SwipeButton>
              </div>
            </div>
          </div>
          {/* <div
            onMouseEnter={() => {
              console.log("mouse enter");
              SetOnContainer(true);
            }}
            onMouseLeave={() => {
              console.log("mouse enter");
              SetOnContainer(false);
            }}
            className="shopping-options shopping-options-1 d-flex flex-column justify-content-end align-items-start p-3"
          >
            <div className="optimized-image-container">
              <CImage CloudinaryImageID="libs4amozqfjmwsp9xjc"></CImage>
            </div>

            <motion.div
              animate={
                onContainer
                  ? { y: "0px", opacity: 1 }
                  : { y: "-10px", opacity: 0 }
              }
              transition={{ type: "tween", ease: "circInOut" }}
            >
              <h3 className="nav-labels text-white">Single Items</h3>
              <Link to={"/home"} className="">
                {" "}
                <SwipeButton
                  textContent={
                    <h5 className="text-white p-0 m-0">
                      <Hovertext
                        text="Navigate to Single options"
                        offset={1.6}
                      ></Hovertext>
                    </h5>
                  }
                ></SwipeButton>
              </Link>
            </motion.div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
