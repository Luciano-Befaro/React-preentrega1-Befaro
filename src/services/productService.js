const mockProducts = [
    { id: "1", name: "Producto A", category: "electronics", description: "Descripción del Producto A" },
    { id: "2", name: "Producto B", category: "ropa", description: "Descripción del Producto B" },
    { id: "3", name: "Producto C", category: "hogar", description: "Descripción del Producto C" }
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(categoryId ? mockProducts.filter((p) => p.category === categoryId) : mockProducts);
    }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(mockProducts.find((p) => p.id === id));
    }, 1000);
    });
};