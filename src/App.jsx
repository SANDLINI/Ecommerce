import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./Pages/Cart/Cart";
import { SingleProductPage } from "./Pages/SingleProductPage/SingleProductPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleProductPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
