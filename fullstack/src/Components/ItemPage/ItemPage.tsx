import "./ItemPageStyles.css";
import Navbar from "../NavBar/Navbar";
import Review from "../Review/Reveiw";
import ItemInstruction from "./Instructions/ItemInstructions";
import { usePageItemStore } from "../Utilities/PagedItemStore";
import { useQuery } from "@tanstack/react-query";
import { GetAnItem } from "../APIs";
import { useEffect, useState } from "react";
import { CImage } from "../Cloudinary/CloudinaryAssets";

import { motion } from "framer-motion";
import PageLoader from "../PageLoader";
import { useSearchParams } from "react-router-dom";
import SwipeButton from "../button/Swipebutton";
import { useAddfeedback, useCheckoutData } from "../Utilities/Store";

interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
  image_pub_id: string;
}

export default function ItemPage() {
  const PageID = usePageItemStore((state) => state.ID);
  const [searchbarParams, setSearchParams] = useSearchParams({ ID: "" });

  //inital
  const retrievedPagedItem = useFetchItem(
    Number(searchbarParams.get("ID")) || PageID
  );
  useEffect(() => {
    const strippedURLID = searchbarParams.get("ID");
    if (!strippedURLID) {
      setSearchParams(
        (prev) => {
          prev.set("ID", `${PageID}`);
          return prev;
        },
        { replace: true }
      );
    }
  }, [PageID, searchbarParams]);

  //state for loader
  const [loadedIms, SetLoading] = useState(false);
  function handleLoading() {
    SetLoading(true);
  }
  //default value setting
  useEffect(() => {
    SetLoading(false);
    return () => {
      SetLoading(false);
    };
  }, []);

  const AddToCart = useCheckoutData((state) => state.incrementAsync);
  const toggleAddFeedback = useAddfeedback((state) => state.toggleClickOn);

  return (
    <>
      <Navbar></Navbar>

      <motion.div
        initial={{ opacity: 1 }}
        animate={!loadedIms ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2 }}
      >
        <PageLoader></PageLoader>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={!loadedIms ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className=" product-item-container">
          <CImage
            loadFunc={handleLoading}
            CloudinaryImageID={`${retrievedPagedItem?.image_pub_id}`}
            image_size={1900}
            classNames="item-image"
          ></CImage>

          <div className="item-body d-flex flex-column align-items-start ">
            <h1 className="item-name">{retrievedPagedItem?.name}</h1>
            <Review reviewNumber={retrievedPagedItem?.review_count}></Review>
            <h3 className="product-price mt-2">${retrievedPagedItem?.price}</h3>

            <div
              onClick={() => {
                AddToCart(Number(searchbarParams.get("ID")) || PageID);
              }}
              className="border mt-3"
            >
              <span
                onClick={() => {
                  toggleAddFeedback(true);
                }}
              >
                <SwipeButton textContent={<div>Add to Cart</div>}></SwipeButton>
              </span>
            </div>

            <h3>ingredient list</h3>
            <p className="ingredient-list">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              saepe distinctio minima officia quisquam voluptate blanditiis
              sunt, laborum est eos sapiente magnam recusandae a odit molestias
              sit tempore numquam quidem. In voluptates, veritatis sed soluta
              dolor autem animi eaque nobis. Officiis quisquam inventore
              voluptatem, doloribus, dignissimos explicabo incidunt magni
              provident officia quod, at ea eaque tempore ipsum vero. Facilis,
              quasi?
            </p>
            <ItemInstruction></ItemInstruction>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function useFetchItem(URLID: number) {
  const [retrievedPagedItem, setItem] = useState<itemInfo>();

  //DATA FETCHING
  const { data, isError, isLoading, error } = useQuery({
    queryFn: async () => GetAnItem(URLID),
    queryKey: ["fetchedID"],
  });
  useEffect(() => {
    if (isError) {
      console.log(error.message);
    }
    if (isLoading) {
      console.log("loading");
    }

    if (data) {
      console.log("paged item");
      console.log(data);
      setItem(data[0]);
    }
  }, [data]);
  return retrievedPagedItem;
}
