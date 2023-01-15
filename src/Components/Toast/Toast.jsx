import styles from "./Toast.module.scss";

const Toast = ({ toast, onClose }) => {
  return (
    <div className={styles.toast}>
      <span className={styles.close} onClick={onClose}>
        X
      </span>
      <span className={styles.title}>{toast.title}</span>
      <span className={styles.message}>{toast.message}</span>
    </div>
  );
};

export default Toast;
