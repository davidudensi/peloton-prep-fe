import { Fragment } from "react";
import { CART } from "../../Constants/Constants";
import Nav from "../Nav/Nav";
import styles from "./Navbar.module.scss";

const Navbar = ({ navs }) => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <ul>
          {navs.map((nav, index) =>
            nav.isCart ? (
              <div key={index} className={styles.cart}>
                <span className={styles.counter}>{CART}</span>
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
