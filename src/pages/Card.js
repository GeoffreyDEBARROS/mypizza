import React, { useState } from "react";
import Footer from "../components/Footer";
import { boissons } from "../data/boissons";
import { desserts } from "../data/desserts";
import { flamiches } from "../data/flamiches";
import { pizzas } from "../data/pizzas";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [pizzasList] = useState(pizzas);
  const [flamichesList] = useState(flamiches);
  const [boissonsList] = useState(boissons);
  const [dessertsList] = useState(desserts);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="card">
      <div className="title">
        <h1>
          <span id="my">My</span>
          <span id="pizza">pizza.</span>
          <span id="fr">fr</span>
        </h1>
      </div>
      <div className="sub-title">
        <h2>La carte</h2>
        <div className="menu">
          <ul>
            <li>
              <a href="#pizzas">Pizzas</a>
            </li>
            <li>
              <a href="#flamiches">Flamiches</a>
            </li>
            <li>
              <a href="#boissons">Boissons</a>
            </li>
            <li>
              <a href="#desserts">Desserts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="img-container">
        <NavLink to="/">
          <button>Retour à l'accueil</button>
        </NavLink>
        <img src="./img/pizzas.png" alt="Des pizzas" height="150px" />
      </div>
      <div id="pizzas">
        <h4>Les pizzas</h4>
        <div className="container">
          {pizzasList.map((item, index) => (
            <div className="infos" key={index}>
              <h5>{item.nom}</h5>
              <p id="ingredients">{item.ingredients}</p>
              <p id="price">{item.prix} &euro;</p>
            </div>
          ))}
        </div>
      </div>
      <div id="flamiches">
        <h4>Les flamiches</h4>
        <div className="container">
          {flamichesList.map((item, index) => (
            <div className="infos" key={index}>
              <h5>{item.nom}</h5>
              <p id="ingredients">{item.ingredients}</p>
              <p id="price">{item.prix} &euro;</p>
            </div>
          ))}
        </div>
      </div>
      <div id="desserts">
        <h4>Les desserts</h4>
        <div className="container">
          {dessertsList.map((item, index) => (
            <div className="infos" key={index}>
              <h5>{item.nom}</h5>
              <p id="ingredients">{item.ingredients}</p>
              <p id="price">{item.prix} &euro;</p>
            </div>
          ))}
        </div>
      </div>
      <div id="boissons">
        <h4>Les boissons</h4>
        <div className="container">
          {boissonsList.map((item, index) => (
            <div className="infos" key={index}>
              <h5>{item.nom}</h5>
              <p id="ingredients">{item.ingredients}</p>
              <p id="price">{item.prix} &euro;</p>
            </div>
          ))}
        </div>
        <div className="btn-container">
          <button onClick={backToTop}>&#x2191;</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
