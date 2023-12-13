// BookContainer.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { Product, AddProductFunc } from './types';
import ProductRoot from './ProductRoot';

function ProductContainer() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 서버에서 초기 데이터를 가져옴
    axios.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addProduct: AddProductFunc = (name: string, price: number) => {
    // 서버에 데이터를 추가
    axios.post('/products', { name, price })
      .then(response => setProducts([...products, response.data]))
      .catch(error => console.error('Error adding product:', error));
  };

  const removeProduct = (id: number) => {
    // 서버에서 데이터를 삭제
    axios.delete(`/products/${id}`)
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error('Error removing product:', error));
  };

  return <ProductRoot products={products} addProduct={addProduct} removeProduct={removeProduct} />;
}

export default ProductContainer;
