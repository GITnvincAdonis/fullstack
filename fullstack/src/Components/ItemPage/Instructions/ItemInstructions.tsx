import "./ItemInstructionStyles.css";

export default function ItemInstruction() {
  return (
    <>
      <div className="d-flex flex-column">
        <Line />
        <Dropdown
          id={1}
          collapsedContent="Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger."
          buttonTitle="Instructions"
        ></Dropdown>
        <Line />
        <Dropdown
          id={2}
          collapsedContent="Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger."
          buttonTitle="Fax"
        ></Dropdown>
        <Line />
      </div>
    </>
  );
}

export function Dropdown(props: {
  id: number;
  collapsedContent: string;
  buttonTitle: string;
}) {
  const { id, collapsedContent, buttonTitle } = props;
  return (
    <>
      {" "}
      <p className="d-inline-flex gap-1">
        <button
          className="collapse-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapseExample" + id}
          aria-expanded="false"
          aria-controls={"collapseExample" + id}
        >
          {buttonTitle}
        </button>
      </p>
      <div className={"collapse"} id={"collapseExample" + id}>
        <div className="  instruction-text-container">
          {collapsedContent}
          {/* Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger. */}
        </div>
      </div>
    </>
  );
}
const Line = () => {
  return (
    <>
      {" "}
      <svg
        className="line-svg"
        height="1"
        viewBox="0 0 962 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 0.5H961.5" stroke="black" />
      </svg>
    </>
  );
};
