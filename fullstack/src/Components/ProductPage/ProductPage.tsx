import "./ProductPageStyles.css";

import Card from "./productPageAssets/Card";
import { DefaultCard } from "./productPageAssets/Card";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

import { useQuery } from "@tanstack/react-query";
import { GetItems } from "../APIs";
import { CVid } from "../Cloudinary/CloudinaryAssets";
import { useState } from "react";
import { motion } from "framer-motion";

//const products = [1, 1, 1, 1, 1, 1];
export default function ProductPage() {
  const {
    data: info,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => GetItems(),
    queryKey: ["product-page-item"],
    staleTime: Infinity,
  });
  const [loadedCards, SetLoadedCards] = useState(0);

  function IncremementLoadCards() {
    SetLoadedCards((prev) => prev + 1);
  }
  if (isError) return <div>{`error: ${error}`}</div>;

  if (isLoading)
    return (
      <>
        <Navbar></Navbar>

        <div className="product-page-container mb-5 ">
          <div className=" top-gradient-container">
            <div className="top-gradient"></div>
          </div>
          <div className=" d-flex justify-content-center align-items-center vid-placeholder-wrapper ">
            <div className=" placeholder vid-placeholder placeholder-wave"></div>
          </div>
          <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>

          <DefaultCard />
          <DefaultCard />
          <DefaultCard />
          <DefaultCard />
          <DefaultCard />
          <DefaultCard />
        </div>
        <Footer></Footer>
      </>
    );

  return (
    <>
      {info && loadedCards < info.length && (
        <>
          <Navbar></Navbar>

          <div className="product-page-container mb-5 ">
            <div className=" top-gradient-container">
              <div className="top-gradient"></div>
            </div>
            <div className=" d-flex justify-content-center align-items-center vid-placeholder-wrapper ">
              <div className=" placeholder vid-placeholder placeholder-wave"></div>
            </div>
            <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>

            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
          </div>
          <Footer></Footer>
        </>
      )}
      <motion.div
        animate={
          info && loadedCards < info.length ? { opacity: 0 } : { opacity: 1 }
        }
      >
        <Navbar></Navbar>

        <div className="product-page-container mb-5 ">
          <div className=" top-gradient-container">
            <div className="top-gradient"></div>
          </div>
          <div className=" d-flex justify-content-center align-items-center  video-mega-container ">
            <CVid
              classNames={"video-container m-0"}
              CloudinaryVideoID="y8iuviswnbl0epscimhb"
            ></CVid>
          </div>

          <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>
         
          {info?.map((info) => {
            console.log("star count " + info.starcount);
            console.log("review count" + info.review_count);

            return (
              <span>
                <Card
                  image_fn={IncremementLoadCards}
                  id={info.id}
                  name={info.name}
                  price={info.price}
                  starCount={info.starcount}
                  reviewNumber={info.review_count}
                  image_pub_id={info.image_pub_id}
                />
              </span>
            );
          })}
        </div>
        <Footer></Footer>
      </motion.div>
    </>
  );
}
