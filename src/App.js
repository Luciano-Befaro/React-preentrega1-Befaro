import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";


function App() {

return (
    <Router>
    <NavBar />
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Tienda UrbanMarket " />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </Router>
);
}

export default App;