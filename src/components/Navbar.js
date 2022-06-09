import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <p className="navbar-logo"><Link to="/">Pastelaria Trindade</Link></p>
                    <ul>
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
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
