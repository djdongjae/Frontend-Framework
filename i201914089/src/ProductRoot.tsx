import React from "react";
import "./ProductRoot.css";
import type * as types from "./types";
import ProductInput from "./ProductInput";
import ProductList from "./ProductList";

type Props = {
    productList: types.Product[],
    addProduct: types.AddProductFunc,
    deleteProduct: types.DeleteProductFunc
}

function ProductRoot({productList, addProduct, deleteProduct}: Props) {
    return (
        <div className="productRoot">
            <ProductInput addProduct={addProduct}></ProductInput>
            <ProductList productList={productList} deleteProduct={deleteProduct}></ProductList>
        </div>
    )
}

export default ProductRoot;