import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';

class Navbar extends React.Component {
    render() {
        return (
        <div className="header-container">
            <nav>
                <img src={logo} className='navbar-logo' alt="Logo" />
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
