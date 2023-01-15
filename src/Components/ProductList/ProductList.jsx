import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  return products.length > 0 ? (
    <div className={styles.productList}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className={styles.productList}>
      <span>Product list is empty</span>
    </div>
  );
};

export default ProductList;
