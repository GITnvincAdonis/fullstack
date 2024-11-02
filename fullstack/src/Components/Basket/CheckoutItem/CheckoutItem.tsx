import "./CheckoutItemStyles.css";
import QuantityController from "../../SVGs/QuantityController";
import { CImage } from "../../Cloudinary/CloudinaryAssets";

export default function CheckoutItem(props: {
  name: string;
  price: number;
  id: number;
  count: number;
  image_pub_id: string;
  image_fn: CallableFunction;
}) {
  const { name, price, id, count, image_pub_id, image_fn } = props;

  return (
    <>
      <div className="d-inline-flex m-1 ">
        <CImage
          loadFunc={image_fn}
          image_size={300}
          classNames="c-item-image"
          CloudinaryImageID={image_pub_id}
        ></CImage>

        <div className="item-info">
          <h3 className="c-item-name">{name}</h3>
          <h3 className="c-item-size">Size</h3>
          <h3 className="c-item-price m-0">${price}</h3>
          <div className="item-count-wrapper ">
            <Mypath></Mypath>
            <div className="checkout-control border">
              <QuantityController id={id} count={count}></QuantityController>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const Mypath = () => {
  return (
    <>
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.1"
          x="0.5"
          y="0.5"
          width="27"
          height="23"
          rx="11.5"
          fill="#D9D9D9"
          stroke="black"
        />
        <path
          d="M8.625 8.25016H9.70833M9.70833 8.25016H18.375M9.70833 8.25016V15.8335C9.70833 16.1208 9.82247 16.3964 10.0256 16.5995C10.2288 16.8027 10.5043 16.9168 10.7917 16.9168H16.2083C16.4957 16.9168 16.7712 16.8027 16.9744 16.5995C17.1775 16.3964 17.2917 16.1208 17.2917 15.8335V8.25016M11.3333 8.25016V7.16683C11.3333 6.87951 11.4475 6.60396 11.6506 6.4008C11.8538 6.19763 12.1293 6.0835 12.4167 6.0835H14.5833C14.8707 6.0835 15.1462 6.19763 15.3494 6.4008C15.5525 6.60396 15.6667 6.87951 15.6667 7.16683V8.25016M12.4167 10.9585V14.2085M14.5833 10.9585V14.2085"
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
