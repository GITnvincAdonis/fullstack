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

interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
  image_pub_id: string;
}

export default function ItemPage() {
  const [retrievedPagedItem, setItem] = useState<itemInfo>();

  const PageID = usePageItemStore((state) => state.ID);

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
  useEffect(() => {
    console.log("state item");
    console.log(retrievedPagedItem);
    console.log([retrievedPagedItem].flat(1));
  }, [retrievedPagedItem]);
  useEffect(() => {
    return () => {
      SetLoading(false);
    };
  }, []);
  const [isLoaded, SetLoading] = useState(false);

  function handleLoading() {
    SetLoading(true);
  }

  useEffect(() => {
    console.log("is loaded?: " + isLoaded);
  }, [isLoaded]);
  return (
    <>
      {retrievedPagedItem && (
        <>
          <Navbar></Navbar>
          <div className="loader-wrapper">
            <motion.div
              animate={!isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 3 }}
            >
              <PageLoader></PageLoader>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={!isLoaded ? { opacity: 0 } : { opacity: 1 }}
          >
            <div className=" product-item-container">
              <CImage
                loadFunc={handleLoading}
                CloudinaryImageID={`${retrievedPagedItem.image_pub_id}`}
                image_size={1900}
                classNames="item-image"
              ></CImage>

              <div className="item-body d-flex flex-column align-items-start ">
                <h1 className="item-name">{retrievedPagedItem.name}</h1>
                <Review reviewNumber={retrievedPagedItem.review_count}></Review>
                <h3 className="product-price m-0">
                  ${retrievedPagedItem.price}
                </h3>
                <h3>ingredient list</h3>
                <p className="ingredient-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati saepe distinctio minima officia quisquam voluptate
                  blanditiis sunt, laborum est eos sapiente magnam recusandae a
                  odit molestias sit tempore numquam quidem. In voluptates,
                  veritatis sed soluta dolor autem animi eaque nobis. Officiis
                  quisquam inventore voluptatem, doloribus, dignissimos
                  explicabo incidunt magni provident officia quod, at ea eaque
                  tempore ipsum vero. Facilis, quasi?
                </p>
                <ItemInstruction></ItemInstruction>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
