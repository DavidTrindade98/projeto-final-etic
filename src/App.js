import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import OrderCakes from './pages/OrderCakes';
import Contacts from './pages/Contacts';
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Products.css';
import './styles/OrderCakes.css';
import './styles/Contacts.css';
import './styles/Footer.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNos" element={<About />} />
        <Route path="/Produtos" element={<Products />} />
        <Route path="/Encomendar" element={<OrderCakes />} />
        <Route path="/Contactos" element={<Contacts />} /> 
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
