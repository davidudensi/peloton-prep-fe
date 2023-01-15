import BaseLayout from "../../Components/Layouts/BaseLayout/BaseLayout";
import ProductList from "../../Components/ProductList/ProductList";
// import { products } from "../../Data/products";
import { BASE_URL, ENDPOINTS } from "../../Constants/Constants";

const { Fragment, useState, useEffect } = require("react");

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsDb = await fetchProducts();
      setProducts(productsDb);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}${ENDPOINTS.PRODUCTS.GET_PRODUCTS}`);
    const data = await res.json();
    return data;
  };

  return (
    <Fragment>
      <BaseLayout>
        <h1>Welcome to Peloton</h1>
        <ProductList products={products} />
      </BaseLayout>
    </Fragment>
  );
};

export default Home;
