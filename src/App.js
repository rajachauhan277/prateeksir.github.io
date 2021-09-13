import axios from "axios";
import { useEffect, useState } from "react";
import { Spin, Row, Col, Card } from "antd";
const { Meta } = Card;

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log("🚀 ~ file: App.js ~ line 17 ~ apiCall ~ data", data);
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      {loading && <Spin />}
      <Row>
        {products.map((val) => (
          <Col span={4}>
            <Product
              productTitle={val.title}
              image={val.image}
              description={val.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Product = ({ productTitle, image, description }) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 180 }}
        cover={<img alt={productTitle} src={image} />}
      >
        <Meta title={productTitle}  />
      </Card>

      {/* <p>{}</p> */}
    </>
  );
};

export default App;
