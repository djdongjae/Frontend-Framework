import React, {useState} from "react";
import type * as types from "./types";
import ProductRoot from "./ProductRoot";

const data : types.Product[] = [
    {id: 1, name: "콜라", price: 1500},
    {id: 2, name: "우유", price: 2000},
    {id: 3, name: "맥주", price: 2500},
];

function ProductContainer() {
    const [productList, setProductList] = useState<types.Product[]>(data);

    const addProduct : types.AddProductFunc = (name: string, price: number) => {
        const lastIndex = productList.length - 1;
        const lastId = productList[lastIndex].id;
        const product = {id: lastId + 1, name: name, price: price};
        setProductList([...productList, product]);
    }

    const deleteProduct : types.DeleteProductFunc = (id: number) => {
        setProductList(productList.filter(product => product.id !== id));
    }

    return <ProductRoot productList={productList} addProduct={addProduct} deleteProduct={deleteProduct}></ProductRoot>;
    
}

export default ProductContainer;