import React from "react";
import { Form, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./style.scss";

const Login = () => {
  return (
    <div id="log--container">
      <div id="left--side">
        <div className="left--logo--side">
        <NavLink to="/">
          <h1>TravelSquad</h1>
          </NavLink>
        </div>
        <div className="content--welcome--left">
          <p>Au plaisir de vous revoir</p>
          <h1>BIENVENUE</h1>
          <i class="window minimize icon" size="big"></i>
          <p>
            Partez à la découverte des plus belles destinations <br />
            du monde et créez des souvenirs inoubliables
            </p>
        </div>
      </div>

      <div className="right--side">
        <div className="right--content">
          <h1>Connexion au compte </h1>

          <Icon name="user circle" className="tata" size="big" />
          <Form>
            <Form.Field>
              <input type="email" placeholder="Email" required />
            </Form.Field>
            <Form.Field>
              <input type="password" placeholder="Mot de passe" required />
            </Form.Field>

            <NavLink to="/signup">
              <p className="redirect--login">Pas encore membre ?</p>
            </NavLink>

            <button className="log--submit" type="submit">
              Se connecter
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
