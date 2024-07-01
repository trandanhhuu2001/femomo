import {
  Button,
  Card,
  Flex,
  Image,
  InputNumber,
  List,
  Radio,
  Typography,
} from "antd";
import coke from "../assets/coca.png";
import { useState } from "react";

function ContentSideBar() {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  const [moneyItems, setMoneyItems] = useState([
    { denomination: 10000, quantity: 0 },
    { denomination: 20000, quantity: 0 },
    { denomination: 50000, quantity: 0 },
    { denomination: 100000, quantity: 0 },
    { denomination: 200000, quantity: 0 },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);

  const updateQuantity = (index, newQuantity) => {
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
                  onClick={() => updateQuantity(index, item.quantity - 1)}
                >
                  -
                </Button>
                <InputNumber
                  min={0}
                  value={item.quantity}
                  onChange={(value) => updateQuantity(index, value)}
                />
                <Button
                  type="text"
                  onClick={() => updateQuantity(index, item.quantity + 1)}
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
    </Card>
  );
}

export default ContentSideBar;
