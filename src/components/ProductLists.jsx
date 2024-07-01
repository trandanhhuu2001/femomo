import { Button, Card, Flex, Image, InputNumber, Modal } from "antd";
import productData from "../product";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

const { Meta } = Card;

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };
  
function ProductLists() {
  const { addProduct } = useContext(ProductContext);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const showModal = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  const handleOk = () => {
    addProduct({ ...selectedProduct, quantity });
    setVisible(false);
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
            <Button onClick={() => showModal(product)}>Mua | {formatCurrency(product.price)}</Button>
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
