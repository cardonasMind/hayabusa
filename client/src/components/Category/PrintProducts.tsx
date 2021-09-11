import React from "react";

import ProductCard from "../ProductCard";

const PrintProducts = ({ products }) => (
    <div>
        {products.map(product => <ProductCard key={product.id} data={product} /> )}
    </div>
)

export default PrintProducts;