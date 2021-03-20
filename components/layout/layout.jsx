import React, { Fragment } from "react";
import Navbar from "./navbar/Navbar";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
