import React from "react";
import { FaFacebook, FaTripadvisor, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-box1">
                    <h1>Contactos</h1>
                    <p><FaPhoneAlt /> 289 071 939</p>
                    <p><FaEnvelope />Pastelariatrindade2018@gmail.com</p>
                </div>
                <div className="footer-box2">
                    <h1>Horário de Atendimento</h1>
                    <p><FaClock /> Terça a Domingo das 07:30-20:00h</p>
                    <p><FaMapMarkerAlt />Rua Dr. Virgilio Inglês, Largo da República 60A, 8700-032 Fuseta</p>
                </div>
                <div className="footer-box3">
                    <h1>Redes Sociais</h1>
                    <div className="icons-social">
                        <a href='https://www.facebook.com/profile.php?id=100057741576433'><FaFacebook id="face-icon"/></a>
                        <a href='https://www.tripadvisor.pt/Restaurant_Review-g1903584-d19337459-Reviews-Pastelaria_Trindade-Fuseta_Olhao_Faro_District_Algarve.html'><FaTripadvisor id="trip-icon" /></a>
                        <a href='https://www.messenger.com/t/952944161523362'><FaFacebookMessenger id="msg-icon"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;