import "./ProductPageStyles.css";

import Card from "./productPageAssets/Card";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

import { useQuery } from "@tanstack/react-query";
import { GetItems } from "../APIs";

//const products = [1, 1, 1, 1, 1, 1];
export default function ProductPage() {
  const {
    data: info,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => GetItems(),
    queryKey: ["product-page-item"],
    staleTime: Infinity,
  });

  if (isError) return <div>{`error: ${error}`}</div>;
  if (isLoading) return <div>is loading....</div>;

  return (
    <>
      <Navbar></Navbar>

      <div className="product-page-container mb-5 ">
        <h1 className="product-page-title ">SHOP _SPECIFIC_ PRODUCTS</h1>
        
        {info?.map((info) => {
          console.log("star count " + info.starcount);
          console.log("review count" + info.review_count);

          return (
            <span>
              <Card
                id={info.id}
                name={info.name}
                price={info.price}
                starCount={info.starcount}
                reviewNumber={info.review_count}
              />
            </span>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
}
