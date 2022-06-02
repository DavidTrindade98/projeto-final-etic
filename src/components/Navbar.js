import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
        <div className="navbar">
            <nav>
                <p className="navbar-logo">Pastelaria Trindade</p> 
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/SobreNos">Sobre Nós</Link>
                </li>
                <li>
                    <Link to="/Produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/Encomendar">Encomendar</Link>
                </li>
                <li>
                    <Link to="/Contactos">Contactos</Link>
                </li>
            </nav>
        </div>
        );
    }
}

export default Navbar;
