import "./ProductPageStyles.css";

import Card from "./productPageAssets/Card";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

import { useQuery } from "@tanstack/react-query";
import { GetItems } from "../APIs";
import { Key, useState } from "react";

interface itemInfo {
  id: number;
  name: string;
  price: number;
  starCount: number;
}

function setCards(info: any) {
  const dataContainer = info.map(
    (item: { id: number; name: string; price: number; stars: number }) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      starCount: item.stars,
    })
  );
  return dataContainer;
}

//const products = [1, 1, 1, 1, 1, 1];
export default function ProductPage() {
  const [objects, SetObjects] = useState<itemInfo[]>([]);
  const {
    data: info,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      await GetItems();
      SetObjects(setCards(info));
    },
    queryKey: ["product-page-item"],
    staleTime: Infinity,
  });
  if (isError) {
    return <div>{`error: ${error}`}</div>;
  }
  if (isLoading) {
    return <div>is loading....</div>;
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="product-page-container mb-5 ">
        <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>
        {objects?.map((item: any, index: Key) => {
          const name = item.name;
          const id = item.id;
          const price = item.price;
          const stars = item.starCount;
          console.log(id);
          return (
            <span key={index}>
              <Card name={name} price={price} starCount={stars} />
            </span>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
}
