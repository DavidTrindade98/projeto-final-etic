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
    const [recheio, setRecheio] = useState("");
    const [cobert, setCobert] = useState("");
    const [peso, setPeso] = useState("");
    const [form, setForm] = useState("");



    const onSubmit = (event) => {
        event.preventDefault();

        alert(`Nome: ${name} \r\nEmail: ${email} \r\nTelefone: ${tele} \r\nData de Entrega: ${date} \r\nHora de Entrega: ${hour} \r\nTipo de Encomenda: ${caketype} \r\nNome do Aniversariante: ${bname} \r\nIdade do Aniversariante: ${age} \r\nTipo de Massa: ${mass} \r\nTipo de Recheio: ${recheio} \r\nCobertura: ${cobert} \r\nPeso: ${peso} \r\nFormato do Bolo: ${form}  `)

        console.log("Nome : " + name);
        console.log("Email : " + email);
        console.log("Telefone : " + tele);
        console.log("Data de Entrega : " + date);
        console.log("Hora de Entrega : " + hour);
        console.log("Tipo de Encomenda : " + caketype);
        console.log("Nome do Aniversariante: " + bname);
        console.log("Idade do Aniversariante: " + age);
        console.log("Tipo de Massa: " + mass);
        console.log("Tipo de Recheio: " + recheio);
        console.log("Cobertura: " + cobert);
        console.log("Formato do Bolo: " + form);
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
                    Desde bolos mais simples a verdadeiras obras de arte!
                </p>
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
                                <option>Outro</option>
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
                                name="age"
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
                        <label>
                            <p>Tipo de Recheio:</p>
                            <select onChange={(e) => setRecheio(e.target.value)}>
                                <option value="">Selecionar...</option>
                                <option>Ovo</option>
                                <option>Chocolate</option>
                                <option>Frutos Vermelhos</option>
                                <option>Doce de Leite</option>
                                <option>Ferrero Rocher</option>
                                <option>Doce de Morango</option>
                                <option>Chantilly</option>
                                <option>Sem Recheio</option>
                            </select>
                        </label>
                        <label>
                            <p>Cobertura:</p>
                            <select onChange={(e) => setCobert(e.target.value)}>
                                <option value="">Selecionar...</option>
                                <option>Doce de Ovos</option>
                                <option>Chocolate</option>
                                <option>Chantilly</option>
                                <option>ButterCream</option>
                                <option>Pasta Americana</option>
                                <option>Sem Cobertura</option>
                            </select>
                        </label>
                        <label>
                            <p>Peso:</p>
                            <select onChange={(e) => setPeso(e.target.value)}>
                                <option value="">Selecionar...</option>
                                <option>1 Kg</option>
                                <option>1,5 Kg</option>
                                <option>2 Kg</option>
                                <option>2.5 Kg</option>
                                <option>3.5 Kg</option>
                                <option>4 Kg</option>
                                <option>4,5 Kg</option>
                                <option>5 Kg</option>
                            </select>
                        </label>
                        <label>
                            <p>Formato do Bolo:</p>
                            <select onChange={(e) => setForm(e.target.value)}>
                                <option value="">Selecionar...</option>
                                <option>Rectangular</option>
                                <option>Quadrado</option>
                                <option>Redondo</option>
                            </select>
                        </label>
                        <label>
                            <input type="submit" value="Encomendar" id="order-button" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OrderCakes;