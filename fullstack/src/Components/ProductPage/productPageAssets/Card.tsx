import "./CardStyles.css";

import Review from "../../Review/Reveiw";
import AddSVG from "../../SVGs/Add";
import { Link } from "react-router-dom";
import { AddToLocalArray } from "../../Utilities/CheckoutObject";
export default function Card(props: {
  id: number;
  name: string;
  price: number;
  starCount: number;
  reviewNumber: number;
}) {
  const { id, name, price, starCount, reviewNumber } = props;
  console.log(starCount);
  const { addItem, itemArray } = AddToLocalArray();
  return (
    <>
      <div className="card-container ">
        <div className="card-image-container">
          <div className="add-button-mega-container">
            <div className="add-button-container">
              <button
                onClick={() => {
                  addItem(id);
                  console.log(itemArray);

                  console.log("clicked: " + id);
                }}
                className="add-button "
              >
                <AddSVG></AddSVG>
              </button>
            </div>
          </div>

          <img src="" alt="" className="border card-image" />
        </div>

        <div className="card-body ">
          <Review reviewNumber={reviewNumber}></Review>
          <Link to={"/item"} className="product-hyperlinks">
            <h3 className="product-name m-0 mt-2">{name}</h3>
            <h3 className="product-price m-0">{`$${price}`}</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
