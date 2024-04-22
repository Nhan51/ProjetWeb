import React, { useState } from 'react';
import './welcome.css'
import Register from './register.jsx'
import Login from './login.jsx'

export default function Welcome() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  

  const connexionClick = () => {
    setShowLogin(true);//true
    setShowRegister(false);
    setShowWelcome(false);
    setShowButtons(false); 
  };

  const inscriptionClick = () => {
    setShowLogin(false);
    setShowRegister(true);//true
    setShowWelcome(false);
    setShowButtons(false); 
  };

  const handleReset = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowWelcome(true);//true
    setShowButtons(true);//true
  }

  return (
    <div>
      {showWelcome && (
      <>
      <h1>Bienvenue sur CouD'Coud</h1>
      <h2>Avez vous un compte ?</h2>
      </>)}
      {showButtons && (
        <>
          <button onClick={connexionClick}>Oui</button>
          <button onClick={inscriptionClick}>Non</button>
        </>)}
      
      

      {/* Render Login or Register component based on state */}

      {showLogin && <Login onReset={handleReset}/>}
      {showRegister && <Register onReset={handleReset}/>}
    </div>
  );
}

