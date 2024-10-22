export default function QuantityController(props: { count: number }) {
  const { count } = props;
  return (
    <svg
      width="75"
      height="37"
      viewBox="0 0 99 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="97"
        height="47"
        rx="16"
        fill="#D9D9D9"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M50.9432 16.5455V34H48.8295V18.7614H48.7273L44.4659 21.5909V19.4432L48.8295 16.5455H50.9432Z"
        fill="black"
      />
      {count}
      <path
        d="M36.5682 22.9659V26.0909H23.8409V22.9659H36.5682Z"
        fill="black"
      />
    </svg>
  );
}
