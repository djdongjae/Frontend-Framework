// ProductItem.tsx
import React from 'react';
import type { Product } from './types';

type Props = {
  product: Product;
  removeProduct: (id: number) => void;
};

function ProductItem({ product, removeProduct }: Props) {
  // 삭제 버튼 클릭 이벤트 핸들러
  const handleRemoveClick = (id: number) => {
    // 사용자에게 삭제를 확인
    if (window.confirm('삭제하시겠습니까?')) {
      removeProduct(id);
    }
  };

  return (
    <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
            <button onClick={() => handleRemoveClick(product.id)}>삭제</button>
        </td>
    </tr>
  );
}

export default ProductItem;
