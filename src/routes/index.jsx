import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../component/navbar";
import NotFound from "../component/NotFound";
import Cart from "../component/CartContainer";
import ItemDetailContainer from "../component/ItemDetailContainer";
import ItemListContainer from "../component/container/ItemListContainer";

const Routing = () => {
  return (
    <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default Routing;