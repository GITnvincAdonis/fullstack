import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./Components/Hompage/Homepage";
import Navbar from "./Components/NavBar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import ItemPage from "./Components/ItemPage/ItemPage";
import CheckoutPage from "./Components/Basket/CheckoutPage";

import { Route, Routes } from "react-router-dom";

function App() {
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
