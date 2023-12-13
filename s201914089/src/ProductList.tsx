// ProductList.tsx
import React from 'react';
import type { Product } from './types';
import ProductItem from './ProductItem';

type Props = {
  products: Product[];
  removeProduct: (id: number) => void;
};

function ProductList({ products, removeProduct }: Props) {
  const productItems = products.map((product) => (
    <ProductItem product={product} key={product.id} removeProduct={removeProduct} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>이름</td>
          <td>가격</td>
          <td></td>
        </tr>
      </thead>
      <tbody>{productItems}</tbody>
    </table>
  );
}

export default ProductList;
