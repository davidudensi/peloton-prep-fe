import { useParams } from "react-router-dom";
import BaseLayout from "../../Components/Layouts/BaseLayout/BaseLayout";
import ProductFull from "../../Components/Product/ProductFull";
import { BASE_URL, ENDPOINTS } from "../../Constants/Constants";

const { Fragment, useState, useEffect } = require("react");

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const productDb = await fetchProduct();
      setProduct(productDb);
    };
    getProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch(
      `${ENDPOINTS.PRODUCTS.GET_PRODUCTS}/${id}`
    );
    const data = await res.json();
    return data;
  };

  return (
    <Fragment>
      <BaseLayout>
        <h1>{product.name}</h1>
        <ProductFull product={product} />
      </BaseLayout>
    </Fragment>
  );
};

export default ViewProduct;
