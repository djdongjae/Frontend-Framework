import React from "react";
import type * as types from "./types";

type Props = {
    product: types.Product,
    deleteProduct: types.DeleteProductFunc
}

function ProductItem({product, deleteProduct}: Props) {
    const onClick = () => {
        if (window.confirm("삭제하시겠습니까?"))
            deleteProduct(product.id);
    }
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
                {product.price}
                <span onClick={onClick}>x</span>
            </td>
        </tr>
    )
}

export default ProductItem;