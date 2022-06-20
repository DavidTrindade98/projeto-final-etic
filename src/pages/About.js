import React from "react";

function About() {
    return (
        <div className="about">
            <div className="about-hero">
                <div className="about-hero-text">Sobre Nós</div>
            </div>
            <div className="about-section">
                <p>O seu ponto de encontro, situado
                    no Largo da República, no coração
                    da vila fusetense.<br></br>
                    A Pastelaria Trindade, com início em 2017, destaca-se na produção de bolos, pasteis e outros complementos.
                    <br></br>Sempre focados em fazer mais e melhor, desde a data de inicio que desenvolvemos novas técnicas de confecção<br></br> adaptando os nossos produtos e serviços sempre em prol do tipo de cliente e produto que deseja.</p>
            </div>
            <div className="dual-photo-grid">
                <div className="about-photo-1"></div>
                <div className="about-photo-2"></div>
            </div>
            <div className="okdizem">
                <h1>O que dizem?</h1>
            </div>
        </div>
    );
}

export default About;
