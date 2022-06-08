import React from "react";

function Home() {
    return (
        <div className="homepage">
            <div className="hero-image">
                <div className="hero-text">
                    <p className="hero-title">Pastelaria Trindade</p>
                    <p className="hero-subtitle">Encomende Já o seu Bolo</p>
                    <button className="Encomendar">Encomendar</button>
                </div>
            </div>
            <section className="welcome">
                <h1 className="welcome-title">Bem Vindo</h1>
                <p className ="welcome-subtitle">Descubra o gosto de uma das mais populares pastelarias em todo o Algarve!
                <br></br>Pasteis variados em diversos tipos de massas e sabores, é só vir experimentar!</p>
            </section>
            <section className="grid">
                <div className="grid-container">

                </div>
            </section>

            


        </div>
    );
}

export default Home;