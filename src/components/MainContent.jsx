import { Flex } from "antd";
import ProductLists from "./ProductLists";

function MainContent() {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <ProductLists />
      </Flex>
    </div>
  );
}

export default MainContent;
