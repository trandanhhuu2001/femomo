import { Button, Card, Flex, Image, InputNumber, Modal } from "antd";
import productData from "../product";
import { useState } from "react";

const { Meta } = Card;

function ProductLists() {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    console.log("Clicked OK");
    setVisible(false);
    // Xử lý logic khi người dùng ấn OK
  };

  const handleCancel = () => {
    console.log("Clicked Cancel");
    setVisible(false);
  };

  const onChangeQuantity = (value) => {
    setQuantity(value);
  };
  return (
    <Flex align="center" gap="large">
      {productData.map((product) => (
        <Card key={product.id} hoverable className="product-card">
          <Image src={product.picture} style={{ width: "80px" }} />
          <Flex horizontal align="center" justify="center" gap="large" style={{marginTop: "20px"}}>
            <Meta title={product.name} />
            <Button onClick={showModal}>Mua | {formatCurrency(product.price)}</Button>
          </Flex>
          <Modal
            title="Chọn số lượng"
            open={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Vui lòng chọn số lượng:</p>
            <InputNumber min={1} defaultValue={1} onChange={onChangeQuantity} />
          </Modal>
        </Card>
      ))}
    </Flex>
  );
}

export default ProductLists;
