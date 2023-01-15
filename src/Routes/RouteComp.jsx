import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ViewCart from "../Pages/Cart/ViewCart";
import Home from "../Pages/Home/Home";
import ViewProduct from "../Pages/Product/ViewProduct";
import NotFound from "../Pages/NotFound/NotFound";

const RouteComp = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products">
            {/* <Route index element={<ViewProducts />} /> */}
            <Route index element={<Home />} />
            <Route path=":id" element={<ViewProduct />} />
        </Route>
        <Route path="/cart" element={<ViewCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default RouteComp;
