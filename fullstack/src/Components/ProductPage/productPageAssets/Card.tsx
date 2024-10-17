import "./CardStyles.css";

import Review from "../../Review/Reveiw";
import AddSVG from "../../SVGs/Add";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <>
      <div className="card-container ">
        <div className="card-image-container">
          <div className="add-button-mega-container">
            <div className="add-button-container">
              <button
                onClick={() => {
                  console.log("clicked");
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
          <Review></Review>
          <Link to={"/item"} className="product-hyperlinks">
            <h3 className="product-name m-0 mt-2">PRODUCT NAME</h3>
            <h3 className="product-price m-0">$---,---,---</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
