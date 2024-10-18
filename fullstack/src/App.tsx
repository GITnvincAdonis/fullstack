import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./Components/Hompage/Homepage";
import Navbar from "./Components/NavBar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import ItemPage from "./Components/ItemPage/ItemPage";
import CheckoutPage from "./Components/Basket/CheckoutPage";

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://fullstack-production-95cf.up.railway.app/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Optional, only if you're using credentials
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(import.meta.env.REACT_APP_BACKEND_URL);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
        <Route path="/home" element={<ProductPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
