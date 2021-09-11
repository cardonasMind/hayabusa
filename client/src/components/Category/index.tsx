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
        <div className="bg-yellow-400">
            <h1>{name} <a href={`/category/${id}`}>View all</a></h1>

            <PrintProducts products={products} />
        </div>
    )
}

export default Category;