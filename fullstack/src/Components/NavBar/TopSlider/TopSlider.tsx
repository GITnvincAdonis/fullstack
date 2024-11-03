import "./TopSliderStyles.css";
import { SearchIcon } from "../../SVGs/NavbarSVG";
import { useQuery } from "@tanstack/react-query";
import { GetSearchItems } from "../../APIs";
import { useSearchMenuContext } from "../../Contexts/Contexts";
import { motion } from "framer-motion";
import { useState } from "react";
import { CImage } from "../../Cloudinary/CloudinaryAssets";
import SwipeButton from "../../button/Swipebutton";
import AddSVG from "../../SVGs/Add";
import { Link } from "react-router-dom";
import { usePageItemStore } from "../../Utilities/PagedItemStore";
import { useAddfeedback, useCheckoutData } from "../../Utilities/Store";

export default function TopSlider() {
  const SearchInView = useSearchMenuContext();

  const [searchString, setSearchString] = useState("");
  const { data, isError, error, isLoading } = useQuery({
    queryFn: async () => GetSearchItems(searchString),
    queryKey: ["searchItem", searchString],
  });

  if (isError) return <div>{`error: ${error}`}</div>;
  if (isLoading) console.log("search loading");

  const SetPagedItemID = usePageItemStore((state) => state.setID);
  const AddToCart = useCheckoutData((state) => state.incrementAsync);
  const toggleAddFeedback = useAddfeedback((state) => state.toggleClickOn);

  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        animate={SearchInView ? { y: 0 } : { y: "-100%" }}
        transition={{ duration: 0.51, type: "tween", ease: "easeInOut" }}
        className="search-slider-container"
      >
        <div className="search-slider d-flex flex-column">
          <div className="d-flex ">
            <SearchIcon size={40} />
            <input
              className="form-control no-border input-form"
              placeholder="Search"
              onChange={(e) => {
                setSearchString(e.target.value || "");
              }}
            />
          </div>

          <div className="mt-4 d-flex flex-column">
            {data?.map((item) => {
              return (
                <>
                  <CImage
                    classNames="search-item-image"
                    image_size={100}
                    CloudinaryImageID={item.image_pub_id}
                  ></CImage>
                  <div className="ms-4">
                    <h5 className="search-item-name">{item.name}</h5>
                    <div className="d-flex align-items-center">
                      <Link
                        to={"/item/"}
                        onClick={() => {
                          SetPagedItemID(item.id);
                        }}
                        className="product-hyperlinks"
                      >
                        <SwipeButton
                          textContent={
                            <div className="pb-1 m-0 search-item-nav-text">
                              Inspect
                            </div>
                          }
                        />
                      </Link>

                      <div
                        onClick={() => {
                          AddToCart(item.id);
                          toggleAddFeedback(true);
                        }}
                        className="m-2"
                      >
                        <AddSVG></AddSVG>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <motion.div
          animate={SearchInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.61 * Number(SearchInView) }}
          className="blur-filter"
        ></motion.div>
      </motion.div>
    </>
  );
}
