import React from "react";
import { FaFacebook, FaTripadvisor, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

function Contacts(){
    return(
        <div className="contacts">
            <div className="contacts-hero">
                <div className="contacts-hero-text">Contactos</div>
            </div>
            <div className="contacts-grid">
                <div className="contacts-grid-1">
                    <h1>Contacte-nos</h1>
                    <p><FaPhoneAlt/>289 071 939</p>
                    <p><FaEnvelope /> Pastelariatrindade2018@gmail.com </p>
                    <p><FaClock /> 07:30-20:00h</p>
                    <p><FaCalendarAlt /> Terça a Domingo (Até às 13:00h)</p>
                    <p><FaMapMarkerAlt /> Rua Dr. Virgilio Inglês, Largo da República 60A, 8700-032 Fuseta</p>
                    <p>
                        <FaFacebook />
                        <FaTripadvisor />
                    </p>
                </div>
                <div className="contacts-grid-2"></div>
                <div className="contacts-grid-3"></div>
                <div className="contacts-grid-4"></div>
            </div>
        </div>
    );
}

export default Contacts;