import { Button, Card, InputNumber, List } from "antd";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};
function ContentSideBar() {
  const { selectedProducts, updateQuantity } = useContext(ProductContext);
  const [moneyItems, setMoneyItems] = useState([
    { denomination: 10000, quantity: 0 },
    { denomination: 20000, quantity: 0 },
    { denomination: 50000, quantity: 0 },
    { denomination: 100000, quantity: 0 },
    { denomination: 200000, quantity: 0 },
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const updateQuantityMonney = (index, newQuantity) => {
    const newMoneyItems = [...moneyItems];
    newMoneyItems[index].quantity = newQuantity;
    setMoneyItems(newMoneyItems);
    // Tính toán tổng tiền
    calculateTotal(newMoneyItems);
  };
  const calculateTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.denomination * item.quantity;
    });
    setTotalAmount(total);
  };
  const handleChangeQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <Card>
      <List
        dataSource={moneyItems}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
              <span>{formatCurrency(item.denomination)}</span>
              <div>
                <Button
                  type="text"
                  disabled={item.quantity <= 0}
                  onClick={() => updateQuantityMonney(index, item.quantity - 1)}
                >
                  -
                </Button>
                <InputNumber
                  min={0}
                  value={item.quantity}
                  onChange={(value) => updateQuantityMonney(index, value)}
                />
                <Button
                  type="text"
                  onClick={() => updateQuantityMonney(index, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </List.Item>
        )}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Tổng tiền: {formatCurrency(totalAmount)}</h3>
      </div>
      <List
        header={<div>Sản phảm đã chọn</div>}
        bordered
        dataSource={selectedProducts}
        renderItem={(product) => (
          <List.Item>
            {product.name} - {product.quantity} - Tổng tiền:{" "}
            {product.totalPrice}
            <InputNumber
              min={0}
              value={product.quantity}
              onChange={(value) => handleChangeQuantity(product.id, value)}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

export default ContentSideBar;
