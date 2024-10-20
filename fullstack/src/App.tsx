import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./Components/Hompage/Homepage";
import Navbar from "./Components/NavBar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import ItemPage from "./Components/ItemPage/ItemPage";
import CheckoutPage from "./Components/Basket/CheckoutPage";

import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Client = new QueryClient();
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
        <Route
          path="/home"
          element={
            <QueryClientProvider client={Client}>
              <ProductPage />
            </QueryClientProvider>
          }
        />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
