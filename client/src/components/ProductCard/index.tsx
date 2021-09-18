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
            <div className="bg-white">
                <img src={`${data.images[0].formats.small.url}`} />
                <p className="text-xl">$ {price}</p>
                {data.freeShipping && <p className="text-green-400 font-bold">Envío gratis</p>}
                <p>{name}</p>
            </div>
        </Link>
    );
}

export default ProductCard;