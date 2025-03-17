
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db, doc, getDoc } from "../services/firebase";

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
    const fetchProduct = async (itemId) => {
        if (!itemId) {
        console.error("Error: itemId es undefined");
        return null;
        }
    
        try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.error("No se encontró el producto en Firebase");
        }
        } catch (error) {
        console.error("Error al obtener el producto:", error);
        }
    };

    fetchProduct();
}, [itemId]);

return (
    <div className="container mt-4">
    {product ? <ItemDetail product={product} /> : <p>Cargando detalles del producto...</p>}
    </div>
);
};

export default ItemDetailContainer;