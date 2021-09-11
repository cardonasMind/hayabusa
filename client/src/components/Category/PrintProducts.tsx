import React from "react";

import ProductCard from "../ProductCard";

interface PrintProductsProps {
    products: [
        {
            category: string,
            id: string,
            name: string,
            price: number,
        }
    ]
}

const PrintProducts = ({ products }: PrintProductsProps) => {
    return (
        <div>
            {products.map(product => <ProductCard key={product.id} data={product} /> )}
        </div>
    )
}

export default PrintProducts;