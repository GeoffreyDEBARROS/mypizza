import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <span id="my">My</span>
          <span id="pizza">pizza.</span>
          <span id="fr">fr</span>
        </h1>
      </div>
      <div className="intro">
        <div className="left">
          <img src="./img/olives.png" alt="Olives noir" width="250px" />
        </div>
        <div className="right">
          <span id="one">Pizzas, flammekueches</span>
          <span id="two">Tiramisu maison, glaces</span>
          <span id="three">Boissons, vin, café</span>
        </div>
      </div>
      <div className="fide-container">
        <div className="fide">
          <span id="one">Fidélité my pizza.fr</span>
          <p>
            9 pizzas achetées,
            <br /> la 10ème offerte
          </p>
          <span id="two">(uniquement sur les pizzas)</span>
        </div>
      </div>
      <div className="card-btn-container">
        <div className="img1">
          <img src="./img/3poivrons.png" alt="Poivrons" width="200px" />
        </div>
        <div className="btn">
          <button>La carte</button>
        </div>
        <div className="img2">
          <img src="./img/1chili.png" alt="Poivron" width="220px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
