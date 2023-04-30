import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
// import { CART } from "../../Constants/Constants";
import Nav from "../Nav/Nav";
import styles from "./Navbar.module.scss";
// import {CartContext} from "./../../App.js"

const Navbar = ({ navs }) => {
  // const cart = useContext(CartContext);
  const { count } = useSelector((state) => state.counter);
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <ul>
          {navs.map((nav, index) =>
            nav.isCart ? (
              <div key={index} className={styles.cart}>
                {/* <span className={styles.counter}>{cart.cartQuantity}</span> */}
                <span className={styles.counter}>{count}</span>
                <Nav key={index} to={nav.to} text={nav.text} />
              </div>
            ) : (
              <Nav key={index} to={nav.to} text={nav.text} />
            )
          )}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
