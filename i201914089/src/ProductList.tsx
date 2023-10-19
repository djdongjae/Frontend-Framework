import React from "react";
import type * as types from "./types";
import ProductItem from "./ProductItem";

type Props = {
    productList: types.Product[],
    deleteProduct: types.DeleteProductFunc
}

function ProductList({productList, deleteProduct}: Props) {
    const trList = productList.map(product => <ProductItem product={product} key={product.id} deleteProduct={deleteProduct}/>);
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>제품명</td>
                    <td>가격</td>
                </tr>
            </thead>
            <tbody>
                {trList}
            </tbody>
        </table>
    )
}

export default ProductList