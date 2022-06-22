import React from "react";

function About() {
    return (
        <div className="about">
            <div className="about-hero">
                <div className="about-hero-text">Sobre Nós</div>
            </div>
            <div className="about-section">
                <p>
                <h1>A Nossa História</h1>
                    O seu ponto de encontro, situado
                    no Largo da República, no coração
                    da vila fusetense.<br></br>
                    A Pastelaria Trindade, com início em 2017, destaca-se na produção de bolos, pasteis e outros complementos.<br></br><br></br>
                    Sempre focados em fazer mais e melhor, desde a data de inicio que desenvolvemos novas técnicas de <br></br> confecção adaptando os nossos produtos e serviços sempre em prol do tipo de cliente e produto que deseja.<br></br>
                    <br></br>Pretendemos estar sempre mais perto dos nossos clientes, bem como primamos para que<br></br> os nossos produtos cheguem até eles, com a máxima qualidade possível.
                </p>
            </div>
            <div className="quad-photo-grid">
                <div className="about-photo-1"></div>
                <div className="about-photo-2"></div>
                <div className="about-photo-3"></div>
                <div className="about-photo-4"></div>
            </div>
        </div>
    );
}

export default About;
