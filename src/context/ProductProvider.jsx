import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  return (
    <ProductContext.Provider value={{ selectedProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
