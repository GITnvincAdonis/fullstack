import { useEffect, useState } from "react";
import { useCheckoutData } from "../Utilities/Store";
import "./controlStyles.css";

export default function QuantityController(props: {
  count: number;
  id: number;
}) {
  const { count, id } = props;
  const [localNumber, SetLocalNumber] = useState(count);
  const incrementAsync = useCheckoutData((state) => state.incrementAsync);
  const decrement = useCheckoutData((state) => state.decrement);

  useEffect(() => {
    if (count) SetLocalNumber(count);
    else SetLocalNumber(0);
  }, [count]);

  return (
    <>
      <span className="d-flex justify-content-center align-items-center control-container">
        <span
          onClick={() => {
            incrementAsync(id);
          }}
        >
          <AddControl></AddControl>
        </span>
        <div className="item-count border">{localNumber}</div>

        <span
          onClick={() => {
            decrement(id);
          }}
        >
          <DecrementControl></DecrementControl>
        </span>
      </span>
    </>
  );
}

const AddControl = () => {
  return (
    <>
      <svg
        className="border control-buttons"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2V30M2 16H30"
          stroke="#1E1E1E"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
const DecrementControl = () => {
  return (
    <>
      <svg
        className="border control-buttons"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 16.9999H22.6666M31.1666 16.9999C31.1666 24.824 24.824 31.1666 16.9999 31.1666C9.17588 31.1666 2.83325 24.824 2.83325 16.9999C2.83325 9.17588 9.17588 2.83325 16.9999 2.83325C24.824 2.83325 31.1666 9.17588 31.1666 16.9999Z"
          stroke="#1E1E1E"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
