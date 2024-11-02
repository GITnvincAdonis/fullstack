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

interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
  image_pub_id: string;
}

export default function ItemPage() {
  const retrievedPagedItem = FetchFunctionality();
  const PageID = usePageItemStore((state) => state.ID);
  //state for loader
  const [loadedIms, SetLoading] = useState(false);

  const [searchbarParams, setSearchParams] = useSearchParams({ ID: "" });
  setSearchParams((prev) => {
    prev.set("ID", `${PageID}`);
    return prev;
  });

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

  const [secondItem, setSecondItem] = useState<itemInfo>();
  if (!retrievedPagedItem) {
    const urlID = searchbarParams.get("ID");
    const secondaryItem = URLFetchFunctionality(Number(urlID ? urlID : 0));
    if (secondaryItem) setSecondItem(secondaryItem);
  }
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
            CloudinaryImageID={`${
              retrievedPagedItem
                ? retrievedPagedItem.image_pub_id
                : secondItem?.image_pub_id
            }`}
            image_size={1900}
            classNames="item-image"
          ></CImage>

          <div className="item-body d-flex flex-column align-items-start ">
            <h1 className="item-name">
              {retrievedPagedItem ? retrievedPagedItem.name : secondItem?.name}
            </h1>
            <Review
              reviewNumber={
                retrievedPagedItem
                  ? retrievedPagedItem.review_count
                  : secondItem?.review_count
              }
            ></Review>
            <h3 className="product-price m-0">
              $
              {retrievedPagedItem
                ? retrievedPagedItem.price
                : secondItem?.price}
            </h3>
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

function FetchFunctionality() {
  const [retrievedPagedItem, setItem] = useState<itemInfo>();
  const PageID = usePageItemStore((state) => state.ID);
  //DATA FETCHING
  const { data, isError, isLoading, error } = useQuery({
    queryFn: async () => GetAnItem(PageID),
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
function URLFetchFunctionality(ID: number) {
  const [retrievedPagedItem, setItem] = useState<itemInfo>();

  //DATA FETCHING
  const { data, isError, isLoading, error } = useQuery({
    queryFn: async () => GetAnItem(ID),
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
