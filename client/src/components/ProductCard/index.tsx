import React from "react";

import Link from "next/link";

interface ProductCardProps {
    data: {
        category: string,
        id: string,
        name: string,
        price: number
    }
}

const ProductCard = ({ data }: ProductCardProps) => {
    const { price, name } = data;

    console.log(data)

    return (
        <Link href={`/product/${data.id}`}>
            <div className="bg-white cursor-pointer rounded shadow-md hover:shadow-lg">
                <div className="bg-gray-300 h-40" />

                <div className="p-4">
                    <div className="mb-2">
                        <p className="text-xl">$ {price}</p>
                        {data.freeShipping && <p className="text-sm text-green-500">Envío gratis</p>}
                    </div>
                    <p className="text-gray-600">{name}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;