import "./PageLoaderStyles.css";
export default function PageLoader() {
  return (
    <>
      <div
        className="vh-100 vw-100 position-fixed d-flex justify-content-center align-items-center loader"
        style={{ zIndex: "130", backgroundColor: "white" }}
      >
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
