import "./CardStyles.css";

import Review from "../../Review/Reveiw";
import AddSVG from "../../SVGs/Add";
import { Link } from "react-router-dom";
import { useCheckoutData } from "../../Utilities/Store";

export default function Card(props: {
  id: number;
  name: string;
  price: number;
  starCount: number;
  reviewNumber: number;
}) {
  const { id, name, price, starCount, reviewNumber } = props;
  console.log(starCount + id);
  const AddToCart = useCheckoutData((state) => state.incrementAsync);
  return (
    <>
      <div className="card-container ">
        <div className="card-image-container">
          <div className="add-button-mega-container">
            <div className="add-button-container">
              <button
                onClick={() => {
                  AddToCart(id);
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
