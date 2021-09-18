import React from "react";

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
            <h1 className="text-2xl">{name} <a className="text-base text-blue-400 font-bold" href={`/category/${id}`}>View all</a></h1>

            <PrintProducts products={products} />
        </div>
    )
}

export default Category;