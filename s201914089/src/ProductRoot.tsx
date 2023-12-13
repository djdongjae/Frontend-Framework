// ProductRoot.tsx
import React from 'react';
import './ProductRoot.css';
import type { Product, AddProductFunc } from './types';
import ProductInput from './ProductInput';
import ProductList from './ProductList';

type Props = {
  products: Product[];
  addProduct: AddProductFunc;
  removeProduct: (id: number) => void;
};

function ProductRoot({ products, addProduct, removeProduct }: Props) {
  return (
    <div className="productRoot">
      <h1>제품 목록</h1>
      <ProductInput addProduct={addProduct} />
      <ProductList products={products} removeProduct={removeProduct} />
    </div>
  );
}

export default ProductRoot;
