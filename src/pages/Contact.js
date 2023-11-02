import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        <h1>
          <span id="my">My</span>
          <span id="pizza">pizza.</span>
          <span id="fr">fr</span>
        </h1>
      </div>
      <div className="sub-title">
        <h2>Contact</h2>
      </div>
      <div className="img-container">
        <img src="./img/tomates.png" alt="Tomates" height="150px" />
      </div>
      <div className="form-container">
        <form action="">
          <div className="input-container">
            <label htmlFor="name">Nom : </label>
            <input type="text" id="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" />
          </div>
          <div className="message-container">
            <label htmlFor="message">Message : </label>
            <textarea id="message" cols="30" rows="12"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="back">
        <NavLink to="/">
          <button>Retour à l'accueil</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
