import { useEffect, useState } from "react";
import { useCheckoutData } from "../Utilities/Store";

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
      <span
        onClick={() => {
          incrementAsync(id);
        }}
      >
        <AddControl></AddControl>
      </span>

      {localNumber}

      <span
        onClick={() => {
          decrement(id);
        }}
      >
        <DecrementControl></DecrementControl>
      </span>
    </>
  );
}

const AddControl = () => {
  return (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.5682 22.9659V26.0909H23.8409V22.9659H36.5682Z"
          fill="black"
        ></path>
      </svg>
    </>
  );
};
const DecrementControl = () => {
  return (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.95455 11.8068V0.556818H6.86364V11.8068H4.95455ZM0.284091 7.13636V5.22727H11.5341V7.13636H0.284091Z"
          fill="black"
        />
      </svg>
    </>
  );
};
