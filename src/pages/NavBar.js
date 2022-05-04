import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <h2>Bookstore CMS</h2>
      <nav>
        <Link to="/">Books</Link>
        <Link to="./categories">Categories</Link>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
