import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a mi tienda!" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;