// import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/nav.css';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
  <div className='navbar'>
    <h2 className='heading'>Bookstore CMS</h2>
    <nav>
      <Link to="/" className={splitLocation[1] === ''? "active" : "inactive"}>BOOKS</Link>
      <Link to="./categories" className={splitLocation[1] === 'categories'? "active" : "inactive"}>CATEGORIES</Link>
    </nav>
  </div>
)
};

export default NavBar;
