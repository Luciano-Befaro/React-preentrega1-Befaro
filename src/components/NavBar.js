import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        {/* Enlace a la home */}
        <Link className="navbar-brand" to="/">Mi Tienda</Link>

        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/category/electronics">Electrónica</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/ropa">Ropa</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/hogar">Hogar</Link>
            </li>
        </ul>
        </div>

        <CartWidget />
    </div>
    </nav>
);
};

export default NavBar;