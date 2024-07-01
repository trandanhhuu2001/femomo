import { Flex, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import "./App.css";
import ProductProvider from "./context/ProductProvider";
function App() {
  return (
    <>
      <ProductProvider>
        <Layout>
          <Content className="content">
            <Flex gap="large">
              <MainContent />
              <SideContent />
            </Flex>
          </Content>
        </Layout>
      </ProductProvider>
    </>
  );
}

export default App;
