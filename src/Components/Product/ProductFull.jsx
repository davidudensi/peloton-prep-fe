import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/counter";
// import { CartContext } from "../../App";
import Toast from "../Toast/Toast";
import styles from "./ProductFull.module.scss";

const ProductFull = ({ product }) => {
  const [toastProp, setToastProp] = useState({});
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  //   const cart = useContext(CartContext);

  useEffect(() => {
    let p = {
      ...toastProp,
      title: "Success",
      message: `${product.name} added successfully`,
    };
    setToastProp(p);
  }, [product]);

  //   const handleAddToCart = () => {
  //     cart.updateQuantity(cart.cartQuantity + 1);
  //     setShowToast(true);
  //   }

  const handleAddToCart = () => {
    dispatch(increment());
    setShowToast(true);
  };

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
        {/* <button onClick={() => handleAddToCart()} className={styles.addToCart}>
          Add to cart
        </button> */}
        <button
          onClick={() => handleAddToCart()}
          className={styles.addToCart}
        >
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
