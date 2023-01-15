import { Fragment } from "react";
import Nav from "../Nav/Nav";
import styles from "./Navbar.module.scss"

const Navbar = ({ navs }) => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <ul>
          {navs.map((nav, index) => (
            <Nav key={index} to={nav.to} text={nav.text} />
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar
