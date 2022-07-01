import React from "react";
import { FaFacebook, FaTripadvisor, FaFacebookMessenger, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

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
                    <div className="icons-social-contacts">
                        <a href='https://www.facebook.com/profile.php?id=100057741576433'><FaFacebook id="facebook"/></a>
                        <a href='https://www.tripadvisor.pt/Restaurant_Review-g1903584-d19337459-Reviews-Pastelaria_Trindade-Fuseta_Olhao_Faro_District_Algarve.html'><FaTripadvisor id="tripadvisor" /></a>
                        <a href='https://www.messenger.com/t/952944161523362'><FaFacebookMessenger id="menssenger"/></a>
                    </div>
                </div>
                <div className="contacts-grid-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.0758052880346!2d-7.748813348670638!3d37.055676679798054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd10016672fc5361%3A0x8517825f48adc1a5!2sPastelaria%20Trindade!5e0!3m2!1spt-PT!2spt!4v1656362068265!5m2!1spt-PT!2spt" allowfullscreen="" title="mapa" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contacts-grid-3"></div>
                <div className="contacts-grid-4"></div>
            </div>
        </div>
    );
}

export default Contacts;