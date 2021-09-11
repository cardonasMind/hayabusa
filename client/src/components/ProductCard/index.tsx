import React from "react";

interface ProductCardProps {
    data: {
        category: string,
        id: string,
        name: string,
        price: number,
    }
}

const ProductCard = ({ data }: ProductCardProps) => {
    const { price, name } = data;

    return (
        <div className="bg-yellow-600">
            <p>$ {price}</p>
            <p>{name}</p>
        </div>
    );
}

export default ProductCard;