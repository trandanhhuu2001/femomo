import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (productToAdd) => {
    const existingProduct = selectedProducts.find(
      (product) => product.id === productToAdd.id
    );

    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại, cập nhật số lượng và tổng tiền
      const updatedProducts = selectedProducts.map((product) => {
        if (product.id === productToAdd.id) {
          return {
            ...product,
            quantity: product.quantity + productToAdd.quantity,
            totalPrice:
              product.totalPrice + productToAdd.quantity * productToAdd.price,
          };
        }
        return product;
      });
      setSelectedProducts(updatedProducts);
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới vào danh sách
      setSelectedProducts([
        ...selectedProducts,
        {
          ...productToAdd,
          totalPrice: productToAdd.quantity * productToAdd.price,
        },
      ]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      const updatedProducts = selectedProducts.filter(
        (product) => product.id !== productId
      );
      setSelectedProducts(updatedProducts);
    } else {
      const updatedProducts = selectedProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: newQuantity,
            totalPrice: newQuantity * product.price,
          };
        }
        return product;
      });
      setSelectedProducts(updatedProducts);
    }
  };
  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProduct, updateQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
