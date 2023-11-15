import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Herosection/Hero';
import Logo from './Logosection/Logo';
import Residency from './Reasidencysection/Residency';
import Value from './Valuesection/Value';
import Contact from './Contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Hero/>
    <Logo/>
    <Residency/>
    <Value/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
