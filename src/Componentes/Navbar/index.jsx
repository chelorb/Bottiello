import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Bottiello Calzados</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-link">Inicio</li>
        <li className="nav-link">Productos</li>
        <li className="nav-link">Ofertas</li>
        <li className="nav-link">Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
