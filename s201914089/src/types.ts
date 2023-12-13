// types.ts
export type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  export type AddProductFunc = (name: string, price: number) => void;
  