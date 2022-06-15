import React from "react";

function OrderCakes() {
    return (
        <div className="encomendar">
            <div className="encomendar-hero">
                <div className="encomendar-hero-text">Encomendar</div>
            </div>
            <div className="encomendar-section">
                <p>Necessita de um bolo? Aniversário, casamento, batizado ou outro? Conte connosco!<br></br>
                    As ideias partem de si, nós apenas concretizamos!<br></br>
                    Os nossos bolos de aniversário são confeccionados e decorados com a maior atenção ao detalhe.<br></br> 
                    Desde bolos mais simples a verdadeiras obras de arte em três dimensões!</p>
            </div>
            <div className="encomendar-container">
                <div className="encomendar-image">
                    <h1>Encomendar</h1>
                </div>
                <div className="encomendar-form-container">
                    <form>
                        <label>
                            <p>Nome</p>
                            <input name="name" />
                        </label>
                        <label>
                            <p>Email</p>
                            <input name="email" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderCakes;