

// src/components/NavBar.jsx


import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Mi tienda virtual</Link>
        <Link to="/category/laptops">laptops</Link>
        <Link to="/category/fragrances">fragrances</Link>
        <Link to="/category/celulares">celulares</Link>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
