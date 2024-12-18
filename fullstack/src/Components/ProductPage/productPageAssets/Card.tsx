import "./CardStyles.css";

import Review from "../../Review/Reveiw";
import AddSVG from "../../SVGs/Add";
import { Link } from "react-router-dom";
import { useAddfeedback, useCheckoutData } from "../../Utilities/Store";
import { motion } from "framer-motion";
import { CImage } from "../../Cloudinary/CloudinaryAssets";
import { usePageItemStore } from "../../Utilities/PagedItemStore";
import SwipeButton from "../../button/Swipebutton";

export default function Card(props: {
  id: number;
  name: string;
  price: number;
  starCount: number;
  reviewNumber: number;
  image_pub_id: string;
  image_fn: CallableFunction;
}) {
  const { id, name, price, starCount, reviewNumber, image_pub_id, image_fn } =
    props;
  console.log(starCount + id);
  const AddToCart = useCheckoutData((state) => state.incrementAsync);

  const toggleAddFeedback = useAddfeedback((state) => state.toggleClickOn);

  const SetPagedItemID = usePageItemStore((state) => state.setID);
  return (
    <>
      <div className="card-container ">
        <div className="card-image-container">
          <div className="add-button-mega-container">
            <div className="add-button-container">
              <div
                onClick={() => {
                  AddToCart(id);
                }}
                className="add-button "
              >
                <span
                  onClick={() => {
                    toggleAddFeedback(true);
                  }}
                >
                  <AddSVG></AddSVG>
                </span>
              </div>
            </div>
          </div>
          <div className="cloud-card-image-container">
            <CImage
              loadFunc={image_fn}
              image_size={1000}
              classNames=" card-image"
              CloudinaryImageID={image_pub_id}
            ></CImage>
          </div>
        </div>

        <div className="card-body ">
          <Review reviewNumber={reviewNumber}></Review>

          <h3 className="product-name m-0 mt-2">{name}</h3>
          <h3 className="product-price m-0">{`$${price}`}</h3>

          <Link
            to={"/item/"}
            onClick={() => {
              SetPagedItemID(id);
            }}
            className="product-hyperlinks"
          >
            <div className="mt-2 d-flex justify-content-center">
              <SwipeButton
                textContent={
                  <div className="paged-item-button-text ">Inspect item</div>
                }
              ></SwipeButton>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export function DefaultCard() {
  return (
    <>
      <div className="card-container ">
        <div className="card-image-container border ">
          <div className="placeholder col-7 glow-container placeholder-wave">
            <span className="placeholder w-100  placeholder-wrapper"></span>
          </div>
        </div>

        <div className="card-body pt-4 ">
          <Link to={"/item"} className="product-hyperlinks">
            <div className="placeholder-wave">
              <span className="placeholder col-6  placeholder-wrapper"></span>
            </div>

            <div className="placeholder-wave">
              <span className="placeholder w-100  placeholder-wrapper"></span>
            </div>
            <div className="placeholder-wave">
              <motion.span className="placeholder w-25  placeholder-wrapper"></motion.span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
