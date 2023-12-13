// App.tsx
import React from 'react';
import ProductContainer from './ProductContainer';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <ProductContainer />
    </div>
  );
}

export default App;
