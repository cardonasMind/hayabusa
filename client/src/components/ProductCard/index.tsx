import React from "react";

const ProductCard = ({ data }) => (
    <div className="bg-yellow-600">
        <p>$ {data.price}</p>
        <p>{data.name}</p>
    </div>
);

export default ProductCard;