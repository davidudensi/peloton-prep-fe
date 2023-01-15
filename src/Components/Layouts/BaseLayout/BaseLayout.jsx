import Navbar from "../../Navbar/Navbar";
import navs from "../../../Data/navs";
import styles from "./BaseLayout.module.scss";

const BaseLayout = ({ children }) => {
  return (
    <div className={styles.baseLayout}>
      <Navbar navs={navs} />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default BaseLayout;
