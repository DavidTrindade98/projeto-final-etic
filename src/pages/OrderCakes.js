import React, { useState } from "react";

function OrderCakes() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tele, setTele] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [caketype, setCaketype] = useState("");
    const [bname, setBname] = useState("");
    const [age, setAge] = useState("");
    const [mass, setMass] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        alert(`Name: ${name} \r\nEmail: ${email} \r\nTelefone: ${tele} \r\nData de Entrega: ${date} \r\nHora de Entrega: ${hour} \r\nTipo de Encomenda: ${caketype} \r\nNome do Aniversariante: ${bname} \r\nIdade do Aniversariante: ${age} \r\nTipo de Massa: ${mass}  `)

        console.log("Nome : " + name);
        console.log("Email : " + email);
        console.log("Telefone : " + tele);
        console.log("Data de Entrega : " + date);
        console.log("Hora de Entrega : " + hour);
        console.log("Tipo de Encomenda : " + caketype);
        console.log("Nome do Aniversariante: " + bname);
        console.log("Idade do Aniversariante: " + age);
        console.log("Tipo de Massa: " + mass);
    }

    return (
        <div className="encomendar">
            <div className="encomendar-hero">
                <div className="encomendar-hero-text">Encomendar</div>
            </div>
            <div className="encomendar-section">
                <p>
                    <h1>As ideias partem de si, nós apenas concretizamos!</h1>
                    Necessita de um bolo? Aniversário, casamento, batizado ou outro? Conte connosco!<br></br>
                    
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
                        <label>
                            <p>Tipo de Encomenda:</p>
                            <select onChange={(e) => setCaketype(e.target.value)}>
                                <option value="">Selecionar...</option>
                                <option>Aniversário</option>
                                <option>Casamento</option>
                                <option>Batizado</option>
                                <option>Bolo de Finalistas</option>
                            </select>
                        </label>
                        <label>
                            <p>Nome do Aniversariante:</p>
                            <input
                                name="name"
                                type="text"
                                value={bname}
                                onChange={(e) => setBname(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>Idade do Aniversariante:</p>
                            <input
                                name="name"
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <p>Tipo de Massa:</p>
                            <select onChange={(e) => setMass(e.target.value)}>
                                <option value="">Selecionar...</option>
                                <option>Pao de Lo Tradicional</option>
                                <option>Chocolate</option>
                                <option>Amendoa</option>
                                <option>Noz</option>
                                <option>Red Velvet</option>
                                <option>Cenoura</option>
                            </select>
                        </label>
                        <input type="submit" value="Encomendar" id="order-button" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderCakes;