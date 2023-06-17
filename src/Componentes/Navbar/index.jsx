import React from 'react';
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Logo de la tienda</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <a href="/carrito">Carrito</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
