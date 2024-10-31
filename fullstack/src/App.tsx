import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./Components/Hompage/Homepage";

import ProductPage from "./Components/ProductPage/ProductPage";
import ItemPage from "./Components/ItemPage/ItemPage";
import CheckoutPage from "./Components/Basket/CheckoutPage";

import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Client = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={Client}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<ProductPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
