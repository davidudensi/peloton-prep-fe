import { useEffect, useState } from "react";
import { CART } from "../../Constants/Constants";
import Toast from "../Toast/Toast";
import styles from "./ProductFull.module.scss";

const ProductFull = ({ product }) => {
  const [toastProp, setToastProp] = useState({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let p = {
      ...toastProp,
      title: "Success",
      message: `${product.name} added successfully`,
    };
    setToastProp(p);
  }, [product]);

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
        <button onClick={() => setShowToast(true)} className={styles.addToCart}>
          Add to cart
        </button>
      </div>
      {showToast && (
        <Toast toast={toastProp} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

export default ProductFull;
