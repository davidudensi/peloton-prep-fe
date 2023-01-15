import { Link } from "react-router-dom";
import styles from "./Product.module.scss";

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <Link to={`products/${product.id}`}>
        <div className={styles.item_image}>
          <img
            className={styles.image}
            alt={product.name}
            src={product.imageUrl}
          />
        </div>
        <div className={styles.details}>
          <span>{product.name}</span>
        </div>
      </Link>
      <div className={styles.quantityPane}>
        <span className={styles.quantity}>Just {product.quantity} left</span>
      </div>
    </div>
  );
};

export default Product;
