import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db, collection, getDocs } from "../services/firebase";

const ItemListContainer = ({ greeting }) => {
const { categoryId } = useParams();
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const categoryNames = {
    electronics: "Electrónica 💻",
    ropa: "Ropa 👕",
    hogar: "Hogar 🏠",
};

useEffect(() => {
    console.log("categoryId obtenido:", categoryId);
    const fetchProducts = async () => {
    setLoading(true);
    try {
        console.log("Cargando productos desde Firebase...");
        const querySnapshot = await getDocs(collection(db, "productos"));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        console.log("Productos obtenidos:", items);

        items.sort((a, b) => {
            if (a.category === b.category) {
              return a.price - b.price;  // Ordena por precio dentro de la misma categoría
            }
            return a.category.localeCompare(b.category);  // Ordena por categoría
        });

        if (categoryId) {
        const filteredItems = items.filter(item => item.category === categoryId);
        console.log(`Filtrando productos de la categoría: ${categoryId}`, filteredItems);
        setProducts(filteredItems);
        } else {
        setProducts(items);
        }
    } catch (error) {
        console.error("Error al obtener productos:", error);
    } finally {
        setLoading(false);
    }
    };

    fetchProducts();
}, [categoryId]);

return (
    <div className="container mt-4">
    {categoryId ? (
    <h1 className="text-center">{categoryNames[categoryId]}</h1>
    ) : (
    greeting && <h1 className="text-center">{greeting}</h1>
    )}
    {loading ? (
        <p>Cargando productos...</p>
    ) : products.length > 0 ? (
        <ItemList products={products} />
    ) : (
        <p>No hay productos disponibles en esta categoría.</p>
    )}
    </div>
);
};

export default ItemListContainer;