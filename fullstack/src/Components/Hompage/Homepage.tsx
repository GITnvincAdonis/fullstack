import "./HomepageStyles.css";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Hovertext from "../HoverText/HoverText";

import SwipeButton from "../button/Swipebutton";
import { CImage } from "../Cloudinary/CloudinaryAssets";
import { useEffect, useState } from "react";
import PageLoader from "../PageLoader";
import { motion } from "framer-motion";
import Navbar from "../NavBar/Navbar";

export default function Homepage() {
  const [loadedImages, IncrementLoadedImages] = useState(0);
  const handleImageLoad = () => {
    console.log(loadedImages);
    IncrementLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(loadedImages);
  }, [loadedImages]);

  return (
    <>
      <div className="loader-wrapper">
        <motion.div
          animate={loadedImages < 3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <PageLoader></PageLoader>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loadedImages >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <>
          <Navbar />
          <div className=" starter-background-container  ">
            <div className="starter-background">
              <CImage
                loadFunc={handleImageLoad}
                image_size={1900}
                classNames={"b-cloud-image"}
                CloudinaryImageID="swrod2asmee1xk6hmpgp"
              ></CImage>
            </div>
          </div>

          <div className=" starter-container">
            <h1 className="starter-text text-center ">THE SKINCARE BRAND</h1>
            <h4 className="starter-text  pb-4">
              we care about giving you the best looking skin
            </h4>
            <SwipeButton
              textContent={
                <Link to={"/home"}>
                  <h2 className="text-white m-0 p-0 intro-item-button-text">
                    <Hovertext
                      text="CHECK OUR PRODUCTS"
                      offset={1.6}
                    ></Hovertext>
                  </h2>
                </Link>
              }
            ></SwipeButton>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column shopping-option-container">
            <h2 className="option-text  text-center">SHOPPING OPTIONS</h2>
            <div className="shopping-options-wrapper border d-flex justify-content-center">
              <div className="card text-bg-dark shopping-options">
                <CImage
                  loadFunc={handleImageLoad}
                  image_size={1000}
           
                  CloudinaryImageID="libs4amozqfjmwsp9xjc"
                ></CImage>

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
                <CImage
                  loadFunc={handleImageLoad}
                  image_size={1000}
                  
                  CloudinaryImageID="v5eqwsliso9oehkixe0t"
                ></CImage>

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
            </div>
          </div>
          <Footer />
        </>
      </motion.div>
    </>
  );
}
