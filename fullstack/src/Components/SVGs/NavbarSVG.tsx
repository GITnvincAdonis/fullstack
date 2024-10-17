export default function NavbarSVGs() {


  return (
    <>
      <div>
        {" "}
        <span
        //   onClick={() => {
        //     toggleSearch(!ToggleSearchState);
        //   }}
        >
          {/* onClick=
          {() => {
            toggle(!ToggleState);
          }} */}
          <SearchIcon size={15}></SearchIcon>
        </span>
      </div>
    </>
  );
}
export const SearchIcon = (props: { size: number }) => {
  const { size } = props;
  return (
    <svg
      className="p-0 mx-2 bar-svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.75 27.75L21.5875 21.5875M24.9167 13.5833C24.9167 19.8426 19.8426 24.9167 13.5833 24.9167C7.32411 24.9167 2.25 19.8426 2.25 13.5833C2.25 7.32411 7.32411 2.25 13.5833 2.25C19.8426 2.25 24.9167 7.32411 24.9167 13.5833Z"
        stroke="#1E1E1E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const BagIcon = () => {
  return (
    <>
      <svg
        className="p-0 me-4 bar-svg"
        width="15"
        height="15"
        viewBox="0 0 30 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 8.49998L6.5 2.83331H23.5L27.75 8.49998M2.25 8.49998V28.3333C2.25 29.0848 2.54851 29.8054 3.07986 30.3368C3.61122 30.8681 4.33189 31.1666 5.08333 31.1666H24.9167C25.6681 31.1666 26.3888 30.8681 26.9201 30.3368C27.4515 29.8054 27.75 29.0848 27.75 28.3333V8.49998M2.25 8.49998H27.75M20.6667 14.1666C20.6667 15.6695 20.0696 17.1109 19.0069 18.1736C17.9442 19.2363 16.5029 19.8333 15 19.8333C13.4971 19.8333 12.0558 19.2363 10.9931 18.1736C9.93035 17.1109 9.33333 15.6695 9.33333 14.1666"
          stroke="#1E1E1E"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
