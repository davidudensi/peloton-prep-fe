import styles from "./ProductFull.module.scss";

const ProductFull = ({ product }) => {
  return (
    <div className={styles.productFull}>
      <div className={styles.product_image}>
        <img
          className={styles.image}
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>&#163;{product.price}</span>
      </div>
      <div className={styles.quantityPane}>
        <span className={styles.quantity}>Just {product.quantity} left</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductFull;
