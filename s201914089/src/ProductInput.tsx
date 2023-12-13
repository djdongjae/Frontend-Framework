// ProductInput.tsx
import React, { ChangeEvent, useState } from 'react';
import type { AddProductFunc } from './types';

type Props = {
  addProduct: AddProductFunc;
};

function ProductInput({ addProduct }: Props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onPriceChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPrice(Number(e.target.value));
  const onAddClick = () => {
    addProduct(name, price);
    setName('');
    setPrice(0);
  };

  return (
    <div>
      <input type='text' value={name} onChange={onNameChange} placeholder='제목을 입력하세요' />
      <input type='number' value={price} onChange={onPriceChange} placeholder='가격을 입력하세요' />
      <button onClick={onAddClick}>추가</button>
    </div>
  );
}

export default ProductInput;
