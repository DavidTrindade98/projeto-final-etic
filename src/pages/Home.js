import React from "react";

function Home() {
    return (
        <div className="homepage">
            <div className="hero-image">
                <div className="hero-text">
                    <h1 id="hero-title">Pastelaria Trindade</h1>
                    <p className="hero-subtitle">Encomende Já o seu Bolo</p>
                    <button className="Encomendar">Encomendar</button>
                </div>
            </div>
            <section className="welcome">
                <h1 className="welcome-title">Bem Vindo</h1>
                <p className ="welcome-subtitle">Descubra o gosto de uma das mais populares pastelarias em todo o Algarve!
                <br></br>Pasteis variados em diversos tipos de massas e sabores, é só vir experimentar!</p>
            </section>
                <div className="grid-container">
                    <div className="box1">
                        <h1>Cafetaria</h1>
                    </div>
                    <div className="box2"></div>
                    <div className="box3">Tree</div>
                    <div className="box4">Four</div>
                    <div className="box5">Five</div>
                    <div className="box6">Six</div>
                </div>

            


        </div>
    );
}

export default Home;