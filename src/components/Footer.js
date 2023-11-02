import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="command">
        <h2>Commandez :</h2>
        <p>
          Tel : 06 49 61 79 91 <br />
          Ou
        </p>
        <NavLink
          to="https://my-pizzafr.order.app.hd.digital/menus"
          target="blank"
        >
          <button>Commande en ligne</button>
        </NavLink>
      </div>
      <div className="schedule">
        <h2>Horaires d'ouverture :</h2>
        <p>
          Du mardi au dimanche <br /> 18h - 21h30
        </p>
        <p>
          122 rue Alexandre Bérard <br /> 01500 Amberieu en Bugey
        </p>
      </div>
      <div className="contact">
        <NavLink to="/contact">
          <button>Contact nous</button>
        </NavLink>
        <ul>
          <li>
            <img src="./img/email.svg" alt="Logo email" height="70px" />
          </li>
          <li>
            <img src="./img/fb.svg" alt="Logo email" height="70px" />
          </li>
          <li>
            <img src="./img/twitter.svg" alt="Logo email" height="70px" />
          </li>
        </ul>
      </div>
      <div className="condition">
        <p>Conditions de retour et formulaire de rétractation</p>
      </div>
    </div>
  );
};

export default Footer;
