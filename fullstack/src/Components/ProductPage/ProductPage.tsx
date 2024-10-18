import "./ProductPageStyles.css";

import Card from "./productPageAssets/Card";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

import { useQuery } from "@tanstack/react-query";
import { GetItems } from "../APIs";
import { Key } from "react";

//const products = [1, 1, 1, 1, 1, 1];
export default function ProductPage() {
  const { data: info, isLoading } = useQuery({
    queryFn: () => GetItems(),
    queryKey: ["product-page-item"],
  });
  if (isLoading) {
    return <div>is loading....</div>;
  }


  return (
    <>
      <Navbar></Navbar>

      <div className="product-page-container mb-5 ">
        <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>
        {info?.map((_item: any, index: Key) => {
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
