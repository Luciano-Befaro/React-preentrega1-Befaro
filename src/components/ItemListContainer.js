import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const mockProducts = [
{ id: "1", name: "Auriculares, Logitech", category: "electronics", description: "Con un diseño revolucionario, acústica avanzada y comodidad ergonómica, la estación base A50 INALÁMBRICO + ofrece una experiencia de juego inolvidable." },
{ id: "2", name: "Campera, AirJordan", category: "ropa", description: "Mejora tu estilo en el frío con Air Jordan. Repelente al agua y equipada con nuestra tecnología aislante Therma-FIT y aislamiento de plumón, esta amplia campera te permite combinar calidez y comodidad con estilo. El gorro extraíble, el cuello alto y el cierre bidireccional te permiten personalizar la cobertura para que los días fríos nunca te sorprendan." },
{ id: "3", name: "Sillon, Forrado Cuero", category: "hogar", description: "El Sofá Emery combina líneas rectas y sencillas con un diseño inconfundible, caracterizado por su aspecto flotante, ligero y distintivo. El sofá descansa sobre 2 bases de diseño elegante y sofisticado en un acabado de acero pulido. Con asientos de gran profundidad, ofrece un confort excepcional, ideal para relajarse o utilizarlo como cama en situaciones inesperadas. El Sofá Emery es la elección perfecta para quienes buscan durabilidad y estilo en un espacio moderno." }
];

const getProducts = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
    if (categoryId) {
        resolve(mockProducts.filter((prod) => prod.category === categoryId));
    } else {
        resolve(mockProducts);
    }
    }, 1000);
});
};

const ItemListContainer = ({ greeting }) => {
const { categoryId } = useParams();
const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts(categoryId).then((data) => setProducts(data));
}, [categoryId]);

return (
    <div className="container mt-4">
    <h2>{greeting}</h2>
    {categoryId && <h3>Categoría: {categoryId}</h3>}
    <ul>
        {products.map((product) => (
        <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
        </li>
        ))}
    </ul>
    </div>
);
};

export default ItemListContainer;