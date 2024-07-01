import { Flex, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import MainContent from './components/MainContent'
import SideContent from './components/SideContent'
import './App.css'
import productData from './product'
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = productData

  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };


  return (
    <>
      <Layout>
          <Content className='content'>
              <Flex gap = "large">
                  <MainContent />
                  <SideContent />
              </Flex>
          </Content>
      </Layout>
    </>
  )
}

export default App
