import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homepage">
            <div className="homepage-hero">
                <div className="homepage-hero-text">
                    <h1 className="homepage-hero-title">Pastelaria Trindade</h1>
                    <p className="homepage-hero-subtitle">O seu ponto de encontro, situado<br></br> no Largo da República, no coração<br></br> da vila fusetense.</p>
                    <p className="homepage-hero-subtitle2">Encomende Já o seu Bolo</p>
                    <Link to="/encomendar">
                        <button type="button" className="general-button">Encomendar</button>
                    </Link>
                </div>
            </div>
            <div className="welcome">
                <div className="welcome-text">
                    <h1>Bem-Vindo</h1>
                    <p>Descubra uma das mais populares pastelarias em todo o Algarve!<br></br>
                        Grande variedade de bolos em diversos tipos de massas e sabores, é só vir experimentar!</p>
                </div>
            </div>
            <div className="homepage-grid-container">
                <div className="homepage-box1">
                    <h1>Cafetaria</h1>
                    <p>São mais de dez as variedades de café, onde o cliente pode escolher desde o expresso tradicional aos cada vez mais populares cappuccinos.</p>
                    <Link to="/produtos">
                        <button type="button" className="general-button">Saber mais</button>
                    </Link>
                </div>
                <div className="homepage-box2"></div>
                <div className="homepage-box3"></div>
                <div className="homepage-box4">
                    <h1>Pastelaria</h1>
                    <p>São diversos os tipos de bolos caseiros feito de modo artesanal com produtos frescos e de qualidade.<br></br>Venha já escolher o seu ! </p>
                    <Link to="/produtos">
                        <button type="button" className="general-button">Saber mais</button>
                    </Link>
                </div>
                <div className="homepage-box5">
                    <h1>Bolos de Aniversário</h1>
                    <p>Grande diversidade de bolos de aniversário de diferentes
                        tamanhos e texturas, é só encomendar, festejar e disfrutar
                        o sabor!</p>
                    <Link to="/encomendar">
                        <button type="button" className="general-button">Encomendar</button>
                    </Link>
                </div>
                <div className="homepage-box6"></div>
            </div>
        </div>
    );
}

export default Home;