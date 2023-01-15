import { Fragment } from "react";
import { Link } from "react-router-dom";

const Nav = ({ to, text }) => {
  return (
    <Fragment>
      <li>
        <Link to={to}>{text}</Link>
      </li>
    </Fragment>
  );
};

export default Nav;
