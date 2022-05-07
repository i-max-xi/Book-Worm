import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Fragment>
    <h2>Bookstore CMS</h2>
    <nav>
      <Link to="/">Books</Link>
      <Link to="./categories">Categories</Link>
    </nav>
  </Fragment>
);

export default NavBar;
