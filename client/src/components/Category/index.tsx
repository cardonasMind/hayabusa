import React from "react";

import Link from "next/link";

import PrintProducts from "./PrintProducts";

interface CategoryProps {
    data: {
        id: string
        name: string
        products: [
            {
                category: string,
                id: string,
                name: string,
                price: number
            }
        ]
    }
}

const Category = ({ data }: CategoryProps) => {
    const { id, name, products } = data;

    return (
        <div className="mx-10 my-20">
            <div className="mb-5 flex items-baseline gap-2">
                <h1 className="text-2xl text-gray-500">{name}</h1>
                <div className="text-blue-400 hover:text-blue-500"><Link href={`/category/${id}`}>Ver todo</Link></div>
            </div>

            <PrintProducts products={products} />
        </div>
    )
}

export default Category;