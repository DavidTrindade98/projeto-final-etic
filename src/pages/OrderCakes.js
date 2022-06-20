import React, { useState } from "react";

function OrderCakes() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tele, setTele] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        alert(`Name: ${name} \r\nEmail: ${email} \r\nTelefone: ${tele} \r\nData de Entrega: ${date} \r\nHora de Entrega: ${hour}  `)

        console.log("Name : " + name);
        console.log("Email : " + email);
        console.log("Telefone : " + tele);
        console.log("Data de Entrega : " + date);
        console.log("Hora de Entrega : " + hour);
    }

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
                <div className="encomendar-image"></div>
                <div className="encomendar-form-container">
                    <form onSubmit={onSubmit}>
                        <label>
                            <p>Nome:</p>
                            <input
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>Email:</p>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>Telefone:</p>
                            <input
                                type="tele"
                                name="tele"
                                value={tele}
                                onChange={(e) => setTele(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>Data de Entrega:</p>
                            <input
                                name="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>Hora de Entrega:</p>
                            <input
                                name="time"
                                type="time"
                                value={hour}
                                onChange={(e) => setHour(e.target.value)}
                                required
                            />
                        </label>
                        <input type="submit" value="Encomendar" id="order-button" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderCakes;