import React from "react";

function Home() {
    return (
        <div className="homepage">
            <div className="hero-image">
                <div className="hero-text">
                    <h1 className="hero-title">Pastelaria Trindade</h1>
                    <p className="hero-subtitle">Encomende Já o seu Bolo</p>
                    <button className="Encomendar">Encomendar</button>
                </div>
            </div>
            <section className="welcome">
                <h1 className="welcome-title">Bem Vindo</h1>
                <p className ="welcome-subtitle">Descubra o gosto bla bla bla</p>
            </section>
        </div>
    );
}

export default Home;