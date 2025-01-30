import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Mi Tienda</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;