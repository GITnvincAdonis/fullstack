import "./ProductPageStyles.css";

import Card from "./productPageAssets/Card";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const products = [1, 1, 1, 1, 1, 1];
export default function ProductPage() {
  return (
    <>
      <Navbar></Navbar>

      <div className="product-page-container mb-5 ">
        <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>
        {products.map((_item, index) => {
          return (
            <span key={index}>
              <Card />
            </span>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
}
