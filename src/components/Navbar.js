import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header-container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/SobreNos">Sobre Nós</Link>
                <Link to="/Produtos">Produtos</Link>
                <Link to="/Encomendar">Encomendar</Link>
                <Link to="/Contactos">Contactos</Link>
            </nav>
        </div>
    );
}

export default Navbar;
